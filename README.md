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

2. Use the form to add items to any section. Items are stored in your browser's localStorage.

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

Next steps / deployment

- Use GitHub Pages to publish (push this repo and enable Pages on the `main` branch).
- Replace localStorage with a small backend (Firebase/Netlify Functions) for shared editing.
