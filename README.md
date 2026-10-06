# National Roofing Services: website

React + React Bootstrap + Framer Motion, built with Vite.

```bash
npm install
npm run dev      # http://localhost:5173 (captcha and mail are proxied to the live site)
npm run build    # output in dist/
```

## Editing content

All text, products, clients and contact details are in `src/data/site.js`.
Service pages are generated from it, so a new product only needs a new entry there.
Images live in `public/img/`.

## Deploying

Upload the contents of `dist/` to the web root of the existing PHP host, **next to**
`captcha.php`, `homemail.php` and `contactmail.php` (the quote form posts to those).
Remove the old `.php` page files (index.php, about-us.php, …) so the redirects below take over.

- **Apache:** `dist/.htaccess` is included. It 301-redirects the old `.php` URLs to the new pages
  and sends everything else to `index.html`.
- **nginx** (the current host reports nginx):

```nginx
location = /index.php                 { return 301 /; }
location = /about-us.php              { return 301 /about-us; }
location = /clients.php               { return 301 /clients; }
location = /contact-us.php            { return 301 /contact-us; }
location = /roofing-solutions.php     { return 301 /services/roofing-solutions; }
location = /walling-solutions.php     { return 301 /services/walling-solutions; }
location = /ceiling-solutions.php     { return 301 /services/ceiling-solutions; }
location = /everest-engineered-roofing-solutions.php { return 301 /services/everest-roofing-solutions; }
location = /everest-engineered-systems.php           { return 301 /services/everest-pre-engineered-systems; }
location = /dekstrip-flashing.php     { return 301 /services/dekstrip-flashing; }
location = /promat-passive-fire.php   { return 301 /services/promat-passive-fire-protection; }
location = /special-product.php       { return 301 /; }

location / { try_files $uri $uri/ /index.html; }
```
