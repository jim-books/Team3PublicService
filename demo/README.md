# SEED Demo (local clone)

Static mirror of the live Enter.pro demo:

**Live:** https://37f7ba50441f48ff808dfbcadd92d0be.prod.enterapp.pro/

## Run locally

```bash
python3 demo/serve.py
```

Then open http://127.0.0.1:8765/

Optional: change port with `python3 demo/serve.py --port 3000`

## Contents

| File | Description |
|------|-------------|
| `index.html` | App shell |
| `assets/index-*.js` | React SPA bundle (~1.2 MB) |
| `assets/index-*.css` | Styles |
| `favicon.ico` | Favicon |

## Notes

- This is a **built static export**, not editable source code. To change the app you need the original Enter.pro project or a new build.
- Map tiles and AI chat may still call external services over the internet when those features are used.
- Re-download from production:

```bash
wget --mirror --page-requisites --convert-links --adjust-extension --no-parent \
  -e robots=off -P demo \
  "https://37f7ba50441f48ff808dfbcadd92d0be.prod.enterapp.pro/"
```
