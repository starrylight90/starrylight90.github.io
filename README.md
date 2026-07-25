# Swayam Pendgaonkar Portfolio

Cinematic React + Vite portfolio, deployed to GitHub Pages.

## Deployment model used

This repository is configured to deploy with GitHub Actions.

- Branch to use: main
- Pages source to choose in GitHub: GitHub Actions
- Folder choice: not needed (do not use root/docs mode for this setup)

## Why this setup

- Keeps source code in branch clean
- Does not commit dist output
- Avoids pushing node_modules or other local artifacts
- Produces reliable deployments on every push to main

## One-time GitHub setup

1. Open repository Settings -> Pages
2. Under Build and deployment:
3. Set Source to GitHub Actions
4. Save

## Local build check

```powershell
npm ci
npm run build
```

## Push flow

If your local folder is not connected to git yet, run:

```powershell
git init
git branch -M main
git remote add origin https://github.com/starrylight90/starrylight90.github.io.git
git add .
git commit -m "Set up Vite portfolio for GitHub Pages deployment"
git push -u origin main
```

If git remote already exists, run:

```powershell
git add .
git commit -m "Update portfolio and deployment workflow"
git push
```

## Notes

- node_modules and dist are ignored by .gitignore
- Resume is served from public/Swayam_Pendgaonkar_Resume_SoftwareEngineer.pdf
- Site URL: https://starrylight90.github.io/
