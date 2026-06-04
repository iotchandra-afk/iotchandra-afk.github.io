# Package Size QA

This package intentionally excludes generated and dependency folders:

- `node_modules/` is not included. Run `npm ci` after unpacking.
- `dist/` is not included. GitHub Actions builds it from source.
- `.astro/` is not included. Astro regenerates it.

This keeps the repository source package small and avoids committing dependency/build artifacts.

Line-ending controls added:

- `.gitattributes` enforces LF for text files.
- `.gitignore` excludes dependency and build outputs.

Deployment note:

The included `.github/workflows/deploy.yml` installs dependencies with `npm ci`, runs `npm run build`, uploads `dist/`, and deploys to GitHub Pages.
