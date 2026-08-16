# Wade's Tactical — Del Rio, TX

Concept/demo website for **Wade's Tactical**, a Texas DPS-certified License to Carry instructor in
Del Rio, Texas. Static HTML/CSS/JS — no build step, no dependencies, no framework.

Currently live at <https://wades-tactical.vercel.app>.

---

## Deploying this to a different Vercel account

Nothing in the repo is tied to a specific Vercel account — the link lives in `.vercel/`, which is
gitignored. So a fresh clone deploys anywhere.

### Option A — Vercel dashboard (import from GitHub)

1. Vercel → **Add New… → Project → Import Git Repository** → pick this repo.
2. Framework preset: **Other**. Build command: *(leave blank)*. Output directory: *(leave blank —
   the site is served from the repo root)*. Install command: *(leave blank)*.
3. Deploy. `vercel.json` supplies `cleanUrls`, so `/courses` serves `courses.html`.

### Option B — Vercel CLI

```bash
git clone <this repo>
cd wades-tactical
vercel login                      # as whichever account should own it
vercel deploy --prod --yes        # add --scope <team-slug> to target a team
```

If a stale link is ever in the way, `rm -rf .vercel` and deploy again.

---

## Layout

```
index.html  ltc-class.html  services.html  courses.html  about.html  faq.html  contact.html
css/site.css            all styling, one file
js/site.js              mobile nav, scroll reveals, demo form handler
images/                 optimised, web-ready assets (this is what deploys)
source-photos/          client's original camera files — NOT deployed
vercel.json             cleanUrls + no trailing slash
robots.txt              Disallow: / while it's a demo
```

Every page also carries `<meta name="robots" content="noindex,nofollow">`. **Remove both that meta tag
and the `robots.txt` disallow when the site goes live for real**, or it will never be indexed.

## What is not deployed

`.vercelignore` keeps these out of every deployment:

- `source-photos/` — the client's full-resolution originals, including family photos of minors
- `CALL-BRIEF.md` — internal pitch notes
- `verify-affiliate-links.py`, `README.md`

Patterns in `.vercelignore` must sit on their own line; a trailing `# comment` silently breaks the
pattern and the file gets published.

## Affiliate links — read before editing

The site carries **19 U.S. LawShield affiliate links**, all using Wade's affiliate id **`/ref/127`**.

> A separate project in this workspace, The Ammo Academy, uses **`/ref/598`**.
> **These must never mix.** Getting it wrong sends someone else's commission to the wrong account.

After any edit that touches an outbound link, run:

```bash
python3 verify-affiliate-links.py
```

It checks every storefront link on every page for the correct ref, the correct coupon per course slug,
the absence of `/ref/598`, that all 19 courses are still linked, and that each link carries
`target="_blank" rel="noopener sponsored"`. It exits non-zero on any problem.

## Still needed from the client

Phone number, email address, real pricing for the in-person class and range qualification, and a class
schedule. The contact form is presentational only — it shows a "this is a demo" notice on submit and
posts nowhere. The real call-to-action throughout is Facebook Messenger.
