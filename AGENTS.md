# Project rules
- Keep certificate records and chronological filtering in a dedicated data module so the showcase and its rule tests share one source of truth.
- Store certificate images referenced by the portfolio in `public/Uploads` with site-relative URLs so they remain available on external static hosts such as Netlify.