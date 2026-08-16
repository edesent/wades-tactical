# Wade's Tactical — Del Rio, TX — demo call brief

**Live demo:** https://wades-tactical.vercel.app
**Prospect:** Wade's Tactical — Texas License to Carry instructor, Del Rio, TX
**Only web presence:** https://www.facebook.com/WadesTactical (4,270 likes) — **no website at all**
**Second account found:** Instagram [@wadestactical](https://www.instagram.com/wadestactical/) — 215 followers, 8 posts, last active ~Feb 2020, all Cerakote work. Display name is "thomas."

---

## The pitch in one line

He has 4,270 people following a Facebook page, sells out classes before he announces them,
and has **zero** ability for someone Googling "license to carry Del Rio" to find or book him.
Every seat he fills today comes from someone already following him on Facebook.

---

## Verified facts (all sourced from his own FB posts / page)

| Fact | Source |
|---|---|
| "Offering License to Carry classes to Del Rio and surrounding areas" | FB page about |
| Texas **DPS Firearms Instructor** | FB post (Dec class promo) |
| **8+ years** teaching Texas LTC; **12 years** teaching firearms training | same post |
| "Thousands" of students instructed & qualified | multiple posts |
| Classes in Del Rio, typically **Saturday or Sunday at 9am** | many posts |
| **18+** can obtain a Texas LTC | many posts |
| **37+ / 38** reciprocity states | posts (he says both numbers) |
| Texas is **permitless carry, NOT constitutional carry** — his signature talking point | multiple posts |
| **Rentals available including ammunition** | many posts |
| **Basic training included at no extra cost** — "other instructors make you pay $200 before you even take the LTC course" | Dec class promo |
| **Range qualification is charged separately**, covers range use, target, ammunition and rental | his own comment reply to "Lizette" |
| **Online LTC classroom** via U.S. LawShield, 24/7, then schedule a range day | post w/ his affiliate link |
| His affiliate link: `educate.uslawshield.com/product/u-s-lawshield-texas-ltc-online-training/ref/127?coupon-code=USLS8954` | post |
| **California CCW** (resident + non-resident) + renewals, also via U.S. LawShield | post |
| **Pistol optics** — installs, sights in, teaches you to run one | post |
| **Cerakote refinishing + sight installation** (TruGlo tritium/fiber optic) | FB video (Apr 2022) + IG |
| **Coachable children** — "fully equipped to handle coachable children to learn proper firearms safety" | video caption |
| **LTC gift bag** — class fee + rental & ammo + hat + patch + 2 LTC pens, delivery available | video caption |
| **Stickers** — shipped to 12+ states | post |
| **Eclipse Holsters** partner, promo code **WadeTac20** for 20% off | video overlay |
| Recommends **EZ Pawn on Veterans** (ask for **Juan**) for gun purchases | post |
| **Five Points Market** sponsored $20 off for the first 20 reservations on a Dec class | post |
| Runs giveaways constantly (free course, sticker packs, Chili's gift card) | multiple posts |
| Faith-forward voice: "Stay Safe, Stay Strapped, and Stay Blessed", "God bless y'all" | multiple posts |
| Recently had a baby boy; also has an older son who shoots | posts |

**NOT verified — deliberately left off the site (only he can supply):**

- Phone number, email address, physical/mailing address
- **Any price** — class fee, range qual fee, rental fee, gift bag price
- Exact class dates or a real calendar
- His **legal name** (Instagram display name is "thomas"; one FB commenter says "Thomas is an awesome
  instructor." Not strong enough to print on a website — **the About page is written in first person
  and never names him.** Confirm on the call.)
- Which range he uses, and whether it's private/leased
- Whether Cerakote is still actively offered (his Cerakote posts are 2020–2022)
- Any review/rating count (he has no Google Business Profile — see below)

---

## The demo — 6 pages

| Page | Angle |
|---|---|
| `index` | Split hero on his family portrait, "Texas is not a constitutional carry state," 6 service cards, instructor, "be your own first responder," 4-step how-it-works, merch |
| `ltc-class` | Classroom breakdown, the actual state course of fire (3/7/15 yd, 50 rds, B-27), what to bring, eligibility, what happens after |
| `services` | LTC, online + range day, first-timers, rentals, family/youth, optics + Cerakote, California CCW, gift bags |
| `about` | First-person, why he teaches, how the class runs, Del Rio-is-home, "be your own first responder" |
| `faq` | 19 questions in 4 groups — the permitless-carry question first, with FAQPage schema |
| `courses` | His full U.S. LawShield course catalogue — 19 affiliate links, grouped licenses / bundle / 12 skills / first aid + pepper spray |
| `contact` | Booking form (demo-only, shows a notice on submit) + real Messenger link |

**Schema shipped invisibly:** `EducationalOrganization` + `Course` offers on home, `Course` on the
LTC page, `FAQPage` on the FAQ. All pages are `noindex,nofollow` while it's a demo.

**All copy is his.** Headlines and pull quotes are lifted or lightly tightened from his own posts —
"carry with confidence," "give yourself the best possible opportunity by carrying legally," "keep that
head on a swivel," "stay safe, stay strapped, and stay blessed." He should recognize his own voice.

---

## U.S. LawShield affiliate links (added 2026-08-16)

Wade supplied 19 affiliate links. **All are `/ref/127` — that is Wade's affiliate id.**
The Ammo Academy (Wes's own business) is `/ref/598` and appears in no file here; a check enforces it.

Four coupon codes, mapped per course: `EFJACPCE` (the 13 skill courses), `899827` (California),
`USLS8954` (Texas + Florida), `USLS1446` (MACE + first aid).

**All 19 were fetched and verified** — every one returns 200 and keeps `ref/127` through the redirect
chain. Official titles were taken from the live pages, so several differ from the names in Wade's list
(e.g. "Firearms Safety Rules" is really *Firearm Safety Rules*, "Handgun Marksman Fundamentals" is
*Handgun Marksmanship Fundamentals*, "Firearms Secure Storage" is *Firearm Security & Storage*).

**Key discovery:** *Handgun Owner Foundations* is not a single course — it is a **bundle of the other 12**
(3–4 hours total). The site is built around that: the bundle is the featured buy, and the same 12 are
also listed individually underneath.

Where they live:
- **New `courses.html`** — carry licenses (TX $49.99, FL $49.99, CA $174.99, CA renewal $124.99),
  the Foundations bundle, the 12 individual courses, then first aid ($24.99) and MACE ($9.99).
- **Homepage** — a three-card "train on your own time" section (TX LTC, the bundle, first aid).
- **Training page** — the TX LTC button now shows the price; California section lists CA, CA renewal
  and FL with prices; both link out.
- **LTC class page** — a "walk in already ahead" callout pointing at the bundle.
- **FAQ** — five contextual in-answer links (prohibited areas, transporting, holsters, storage, licenses).
- Nav and footer gained a **Courses** item on all 7 pages.

Guard rails, because this is revenue:
- `verify-affiliate-links.py` in the project root checks every storefront link on every page: correct
  `ref/127`, correct coupon per slug, no `ref/598` anywhere, all 19 courses linked, and
  `target="_blank" rel="noopener sponsored"` on each. **Run it after any edit.** Currently: 31 links, clean.
- Prices shown are only the six Wade supplied. Nothing was scraped or guessed, and the page says
  plainly that prices are as quoted by Wade and to check at checkout.
- The page opens with a "read this before you buy anything" callout: these are **courses, not licenses**,
  and the Texas LTC online course is the **classroom portion only** — the range qualification is still
  Wade's, in person. That protects him and it's the truthful framing.

**Ask him:** whether the six prices are current, and whether any coupon has an expiry.

## Client-supplied photos (2026-08-16)

Wade sent **IMG_6090** (studio family portrait — him, his partner, two sons, twin girls) and asked to
"sub the thumbnail picture and main picture with this one." Done:

- **Main picture** → homepage hero. It's a full-length vertical studio portrait on a light tan backdrop,
  so it could not go behind the white headline of the old full-bleed hero. The hero is now a **split
  layout** — copy on a navy panel at left, the portrait framed at right, captioned "Family owned and
  taught, right here in Del Rio." Stacks on mobile.
- **Thumbnail** → the share/preview image (`og:image` + Twitter card) on **all six pages**, cropped
  1200×628 tight on the six faces. This is the picture that now appears whenever the link is pasted
  into Facebook, Messenger or a text.
- Also placed full-height on the **About page** in the instructor slot.
- The favicon/tab icon is deliberately still his **logo** — a family photo is unreadable at 32px.
  Say the word if he actually meant the favicon.
- The old hero photo (`range-group.jpg`, the Primal Defense range day he attended) is now **retired**
  from the site, which removes the one image with a provenance caveat.

**He also sent two more, now placed:** `IMG_0611` and `IMG_0614` — his older son at the Del Rio range
with an AR pistol, eye and ear pro on, 4284×5712.

- `range-shooting.jpg` (on the line, shouldering the rifle) → **First-Time Shooters** section on
  Training, and the matching card on the homepage.
- `youth-portrait.jpg` (posed, "DEL RIO CROSS COUNTRY" shirt) → **Family & Youth Range Safety** on
  Training. Runs full-frame there; it does not survive a 16:10 card crop (cuts through the shirt text),
  so it is deliberately not used as a card image.

That retires `range-berm.jpg` and pushes the last low-res video frames down to one card slot.
**Nitpick for Wade:** the First-Time Shooters copy talks about handguns while the photo shows a rifle.
Reads fine, but if he has a photo of a student on the line with a pistol, that's the better swap.

Originals for all three live in `source-photos/` (kept out of `images/` so 21MB of camera files don't deploy).

## Images — all real, all his

Facebook blocks its photo CDN, so these came out via the Googlebot + `lookaside.fbsbx.com` crawler
endpoint, including **pulling his FB videos as MP4s and extracting frames**:

- `logo.png` / `mark.png` — his actual logo, background knocked out to transparent
- `wade-family*.jpg` — **client-supplied** studio family portrait (hero, About, share thumbnail)
- `range-targets.jpg`, `range-berm.jpg`, `youth-range.jpg` — his outdoor Del Rio range
- `ltc-card-pistol.jpg`, `ltc-graphic-red.jpg`, `ltc-flag-banner.jpg`, `ltc-holster-banner.jpg` — his LTC graphics
- `gift-bag.jpg`, `stickers.jpg`, `patch-eclipse.jpg`, `holster-hellcat.jpg` — his real merch
- `cerakote-sights.jpg`, `optic-holosun.jpg` — his gun work
- `del-rio-sign.jpg`, `cooper-quote.jpg`

Several are video frames, so they're 620–720px wide — fine at card size, but **ask him for his camera
roll** and these get replaced with real photography immediately.

---

## What to ask him on the call

1. **Phone + email.** Every conversion on this site currently routes to Facebook Messenger.
2. **Pricing.** Class fee, range qual fee, rental fee, gift bag price. The single most-asked question
   in his own comments is "What's the price?" and it's answered nowhere.
3. **A class calendar.** He announces dates in FB posts that scroll away. A dated schedule page with
   online booking is the biggest single upgrade available to him.
4. **His name**, and how he wants to be credited.
5. **Photos.** Class photos, range photos, a photo of him teaching. There is not one clean photo of
   him instructing anywhere online.
6. **Is Cerakote still active?** It's on the site as a service; pull it if he's stopped.
7. **Google Business Profile — he has none.** For a local service business in a town of 35,000 that's
   free money. He should be the top result for "license to carry Del Rio" and he doesn't exist there.

## Angles worth raising

- **Deposits/booking.** He hand-manages a cancellation list in DMs. Online booking with a deposit
  would end no-shows and stop the "still three spots available" posts.
- **The affiliate link is buried.** His U.S. LawShield online-course link earns him money and lives in
  one FB post from months ago. On the site it's a permanent button on two pages.
- **Laughlin AFB.** Big transient military population 6 miles out, constantly needing non-resident and
  first-time training. Nothing targets them today.
- **Local sponsors.** Five Points Market already sponsored a class discount. A sponsors block on a real
  site makes that repeatable and gives him leverage for more.
