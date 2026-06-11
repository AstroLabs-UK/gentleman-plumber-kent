# Mr Matt Plumbing — Cloudflare Worker

Single-file Cloudflare Worker serving the entire site (HTML/CSS/JS baked into `worker.js`).

## Local development

```bash
npm install
npm run dev
```

## Deploy

Deployment is automated via GitHub Actions on every push to `main`.

### One-time setup

1. Clone this repository.
2. Run `npm install`.
3. In your GitHub repo, go to **Settings → Secrets and variables → Actions** and add the following repository secrets:
   - `CF_API_TOKEN` — a Cloudflare API token with `Workers Scripts:Edit` permission.
   - `CF_ACCOUNT_ID` — your Cloudflare account ID.
4. (Optional) Replace the AstroLabs badge image URL in `worker.js`:
   `https://github.com/AstroLabs-UK/gentleman-plumber-kent/blob/73f220b25c557f2b7344b40a993e51a6890b076b/src/components/ui/AL.png?raw=true`
5. Push to `main` — GitHub Actions will deploy the worker automatically.

## Manual deploy

```bash
npx wrangler deploy
```

## Files

- `worker.js` — entire site as a single Cloudflare Worker
- `wrangler.toml` — Worker configuration
- `package.json` — npm scripts and `wrangler` devDependency
- `.github/workflows/deploy.yml` — GitHub Actions auto-deploy