# Naveen Kumar Mohanarajan — Portfolio

Personal portfolio site for **Naveen Kumar Mohanarajan** — AI/ML Engineer & Full-stack Developer.

A single, self-contained static page: a brutalist dark theme with an interactive
3D skill sphere, project showcase, experience, and downloadable résumé. No build
step and no dependencies — just static HTML, CSS, and vanilla JS.

## Structure

```
index.html                 The entire site (inline CSS + JS)
images/                    Headshot, company logos, and project screenshots (WebP)
uploads/Resume_Accenture.pdf   Downloadable résumé
```

## Run locally

Serve the folder over HTTP (so relative asset paths resolve):

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

It's a static site — deploy the folder as-is to GitHub Pages, Vercel, or Netlify.
For GitHub Pages, enable Pages on the `main` branch (root); the included
`.nojekyll` file ensures assets are served untouched.

## Links

- Live: <https://naveenkm.vercel.app/>
- GitHub: <https://github.com/naveenkm21>
- LinkedIn: <https://www.linkedin.com/in/naveenkumarmohanarajan/>
