# Swayam Pendgaonkar Portfolio

Cinematic React + Vite portfolio, deployed to GitHub Pages.

## Deployment model used

This repository is configured to deploy from a branch.

- Source branch: deployment
- Folder: /(root)
- Working branch for source code: main

## Why this setup

- Keeps all source code on main
- Publishes only compiled static files to deployment
- Avoids committing node_modules

## One-time GitHub setup

1. Open repository Settings -> Pages
2. Under Build and deployment:
3. Set Source to Deploy from a branch
4. Set Branch to deployment and folder to /(root)
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
git commit -m "Set up portfolio source"
git push -u origin main
```

Then publish the build to deployment:

```powershell
npm run build
git checkout deployment
git rm -r .
Copy-Item -Path .\dist\* -Destination .\ -Recurse -Force
Set-Content -Path .gitignore -Value "node_modules"
if (-not (Test-Path .\.nojekyll)) { New-Item -ItemType File -Path .\.nojekyll | Out-Null }
git add -A
git commit -m "Deploy latest portfolio build"
git push origin deployment
git checkout main
```

If git remote already exists and you are only updating source on main:

```powershell
git add .
git commit -m "Update portfolio source"
git push origin main
```

## Notes

- node_modules and dist are ignored on main via .gitignore
- Resume is served from public/Swayam_Pendgaonkar_Resume_SoftwareEngineer.pdf
- Site URL: https://starrylight90.github.io/
