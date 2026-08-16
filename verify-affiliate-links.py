#!/usr/bin/env python3
"""Affiliate-link integrity check for the Wade's Tactical site.

Wade's Tactical affiliate id is ref/127.
The Ammo Academy (Wes's own business, a separate project) is ref/598 and must NEVER appear here.

Run from the wades-tactical/ directory:   python3 verify-affiliate-links.py
Exits non-zero if anything is wrong.
"""
import glob
import re
import sys
from collections import Counter

REF = "127"
FORBIDDEN = {"598"}
STOREFRONT = "educate.uslawshield.com"

# slug -> the coupon code Wade supplied for it
EXPECTED_COUPON = {
    "handgun-owner-foundations": "EFJACPCE",
    "police-encounters-while-armed": "EFJACPCE",
    "transporting-a-firearm": "EFJACPCE",
    "prohibited-areas-for-firearms": "EFJACPCE",
    "handgun-ammunition-101": "EFJACPCE",
    "range-safety-etiquette": "EFJACPCE",
    "handgun-marksmanship-fundamentals": "EFJACPCE",
    "firearm-safety-rules": "EFJACPCE",
    "buying-selling-firearms": "EFJACPCE",
    "maintenance-cleaning-of-handguns": "EFJACPCE",
    "holster-selection": "EFJACPCE",
    "firearm-security-storage": "EFJACPCE",
    "handgun-function-fundamentals": "EFJACPCE",
    "u-s-lawshield-california-ccw-renewal-course": "899827",
    "u-s-lawshield-california-ccw-course": "899827",
    "u-s-lawshield-florida-cwl-online-training": "USLS8954",
    "u-s-lawshield-texas-ltc-online-training": "USLS8954",
    "mace-brand-pepper-spray-training-for-civilians": "USLS1446",
    "first-aid-for-gunshot-wounds": "USLS1446",
}

URL = re.compile(r'https://educate\.uslawshield\.com/product/([a-z0-9\-]+)/ref/(\d+)\?coupon-code=([A-Za-z0-9]+)')

errors, seen = [], Counter()

for path in sorted(glob.glob("*.html")):
    html = open(path).read()

    for bad in FORBIDDEN:
        if f"/ref/{bad}" in html:
            errors.append(f"{path}: contains forbidden affiliate id ref/{bad} (that's The Ammo Academy)")

    # every storefront link must be a well-formed affiliate URL
    for raw in re.findall(r'href="([^"]*%s[^"]*)"' % re.escape(STOREFRONT), html):
        m = URL.fullmatch(raw)
        if not m:
            errors.append(f"{path}: malformed storefront link -> {raw}")
            continue
        slug, ref, coupon = m.groups()
        seen[slug] += 1
        if ref != REF:
            errors.append(f"{path}: {slug} uses ref/{ref}, expected ref/{REF}")
        if slug not in EXPECTED_COUPON:
            errors.append(f"{path}: unknown course slug '{slug}'")
        elif coupon != EXPECTED_COUPON[slug]:
            errors.append(f"{path}: {slug} uses coupon {coupon}, expected {EXPECTED_COUPON[slug]}")

    # outbound affiliate links should open in a new tab and be marked sponsored
    for a in re.findall(r'<a\b[^>]*%s[^>]*>' % re.escape(STOREFRONT), html):
        if 'rel="noopener sponsored"' not in a:
            errors.append(f'{path}: affiliate link missing rel="noopener sponsored" -> {a[:110]}')
        if 'target="_blank"' not in a:
            errors.append(f'{path}: affiliate link missing target="_blank" -> {a[:110]}')

missing = sorted(set(EXPECTED_COUPON) - set(seen))
if missing:
    errors.append("courses never linked anywhere: " + ", ".join(missing))

print(f"{sum(seen.values())} affiliate links across {len(glob.glob('*.html'))} pages; "
      f"{len(seen)}/{len(EXPECTED_COUPON)} courses linked")
for slug, n in sorted(seen.items()):
    print(f"  {n} x  {slug}")

if errors:
    print("\nFAILED:")
    for e in errors:
        print("  -", e)
    sys.exit(1)
print("\nOK — every link is ref/%s with the right coupon." % REF)
