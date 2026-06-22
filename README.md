# HackYourSummer — Bootcamp Materials (static)

This is a minimal static site to organize bootcamp materials into four sections:
- Things to Read
- Speaker Recordings
- Demos
- Ideas

Usage

1. Open `index.html` in a browser, or run a simple static server (recommended):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000
```

2. Browse the curated sections. The Things to Read section includes:
   - Stanford Course References
   - Harvard Course References
   - Anthropic Skills Learning

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the static site automatically when you push to `main`.

If your local folder is not yet a git repo, run:

```bash
cd /Applications/Documents/AIProjects/HackYourSummer
git init
git add .
git commit -m "Initial HackYourSummer site"
git branch -M main
git remote add origin https://github.com/priyasplayground/hackyoursummer2026.git
git push -u origin main
```

After pushing, GitHub Pages will deploy the site. The expected URL is:

`https://priyasplayground.github.io/hackyoursummer2026/`

## Netlify deployment (private repo)

This repo can be deployed on Netlify even while private. Netlify supports private GitHub repos via GitHub App integration.

1. Create or login to a Netlify account.
2. In Netlify, choose "New site from Git".
3. Connect GitHub and grant access to the `priyasplayground/hackyoursummer2026` repo.
4. Set the build settings:
   - Branch: `main`
   - Build command: (leave blank)
   - Publish directory: `.`
5. Deploy the site.

The repo already includes `netlify.toml`, so Netlify will use root publish settings automatically.

### Local dev

Run in the project folder:

```bash
python3 -m http.server 8000
```

### Notes

- `netlify.toml` is set for a plain static site with root publishing.
- For a private repo, the GitHub app must have repository access.

Next steps / deployment

- Use GitHub Pages to publish (push this repo and enable Pages on the `main` branch).
- Use Netlify for private deployment instead of GitHub Pages.
- Replace localStorage with a small backend (Firebase/Netlify Functions) for shared editing.
