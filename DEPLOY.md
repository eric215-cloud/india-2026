# Enchanting India app: deploying it

## What to upload

Everything sits at the top level of the repo, with **no folders**:

```
index.html  sw.js  manifest.webmanifest  DEPLOY.md
hero-bg.webp  day-jal-mahal.webp  day-amer-fort.webp  day-pashupatinath.webp
icon-180.png  icon-192.jpg  icon-512.jpg  favicon-32.png  social.jpg
```

Unzip, **open the folder**, select everything inside (Cmd+A), and drag those
files into GitHub's upload page. Don't drag the folder itself.

## Steps (same as the cruise apps)

1. On github.com, create a **public** repo named **India-2026**.
2. **Add file → Upload files**, then drag in the files (not the folder they came in).
3. **Commit changes**.
4. **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
5. After a minute or two the app is live at **https://eric215-cloud.github.io/india-2026/**

If you name the repo something else, the app still works. Only the link-preview
card is affected, because `index.html` mentions `India-2026` twice in its `og:` tags.

## Check any day before you leave

Add `?today=` and a date to the address to see what the app shows on that day:

- `…/india-2026/?today=2026-10-22`: safari day
- `…/india-2026/?today=2026-10-30`: the split day (going home or flying to Nepal)

A small "Preview" tag appears in the header so you know the date is simulated.

## Making changes later

Upload a new `index.html` the same way. Phones that are online get it the next
time they open the app. The offline copy is used only when there's no signal,
so nobody gets stuck on an old version.

## Text for the group (ready to paste)

> Here's our India trip app: https://eric215-cloud.github.io/india-2026/
> Open it in Safari, tap Share → Add to Home Screen, leave "Open as Web App" ON, and tap Add.
> Then open it from your Home Screen and add your flights there, not in Safari. Safari and the Home Screen app keep separate copies of what you type.
> On the Home page there's a Backup tile. Send yourself a backup code once your info is in.
> New to the app? Tap "How to use this app" at the top of Home.
