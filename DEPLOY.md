# Enchanting India app: deploying it

## What to upload

```
index.html             the app
sw.js                  lets it open with no signal (see below)
manifest.webmanifest   Home Screen name and icon
images/                the folder, keep the name exactly
```

## Steps (same as the cruise apps)

1. On github.com, create a **public** repo named **India-2026**.
2. **Add file → Upload files**, then drag in the three files and the `images` **folder** together.
3. **Commit changes**.
4. **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
5. After a minute or two the app is live at **https://eric215-cloud.github.io/India-2026/**

If you name the repo something else, the app still works. Only the link-preview
card is affected, because `index.html` mentions `India-2026` twice in its `og:` tags.

## Check any day before you leave

Add `?today=` and a date to the address to see what the app shows on that day:

- `…/India-2026/?today=2026-10-22`: safari day
- `…/India-2026/?today=2026-10-30`: the split day (going home or flying to Nepal)

A small "Preview" tag appears in the header so you know the date is simulated.

## Making changes later

Upload a new `index.html` the same way. Phones that are online get it the next
time they open the app. The offline copy is used only when there's no signal,
so nobody gets stuck on an old version.

## Text for the group (ready to paste)

> Here's our India trip app: https://eric215-cloud.github.io/India-2026/
> Open it in Safari, tap Share → Add to Home Screen, leave "Open as Web App" ON, and tap Add.
> Then open it from your Home Screen and add your flights there, not in Safari. Safari and the Home Screen app keep separate copies of what you type.
> Under My Info there's a Backup button. Send yourself a backup code once your info is in.
