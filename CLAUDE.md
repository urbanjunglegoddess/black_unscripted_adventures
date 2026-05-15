# CLAUDE.md

Guidance for AI assistants working in this repository.

## Project overview

**Black Unscripted Adventures** is a static, multi-page community blog
celebrating the adventures, stories, and wisdom of the Afro-Diaspora. It is
plain HTML + CSS + vanilla JavaScript with no build step, no framework, and no
dependencies.

## Tech stack

- **HTML5** — hand-written, semantic markup
- **CSS3** — modular stylesheets combined via `@import`
- **Vanilla JavaScript** — a single script, no libraries
- **No tooling** — no package manager, bundler, transpiler, linter, or tests

## Repository structure

```
/
├── index.html              # Home page (carousel, featured post, blog grid, contact form)
├── blog-site.js            # All client-side JS (carousel, category filter, search)
├── css/
│   ├── main.css            # Entry point — @imports the other stylesheets + base/typography/responsive rules
│   ├── header.css
│   ├── footer.css
│   ├── carousel.css
│   ├── feature-post.css
│   ├── blog-cards.css
│   ├── author-info.css
│   ├── catergories.css     # NOTE: filename is misspelled ("catergories"); main.css imports it with that spelling
│   ├── responsive.css
│   └── blog-collection.css # NOT imported by main.css — currently unused
├── pages/
│   ├── about.html
│   ├── stories.html        # Category-filterable blog grid + pagination
│   └── blog-post.html      # Single blog post template
└── assets/
    └── images/
        ├── logo.png
        ├── stock/          # Real images used by the site (1.jpg–20.png, avatars, banner.jpg)
        └── placeholder/    # Sized placeholder PNGs, not referenced by pages
```

## How it fits together

- **`css/main.css` is the single stylesheet every page links to.** It
  `@import`s the modular CSS files and also holds base styles, typography, and
  media queries. To add styles, edit the relevant module; if you add a new CSS
  file, add an `@import` line to `main.css` (or it won't load).
- **`blog-site.js` is loaded by every page** and guards every feature with
  element existence checks, so the same script is safe across pages:
  - Carousel prev/next buttons (`#prevBtn`, `#nextBtn`, `#carousel`) — scrolls
    horizontally by 320px.
  - Category filtering (`.category` links + `.post-card[data-category]`) — used
    on `stories.html`.
  - Client-side search (`#site-search` input) — filters `.post-card` elements
    by text content.
- Post cards carry a `data-category` attribute; the category values in use are
  `afro-diaspora`, `holistic-lifestyle`, `innovation`, `travel`, `finance`,
  `african-history`.

## Known issues / gotchas

- **Broken script path:** every HTML file references `js/blog-site.js`, but the
  file actually lives at the repo root (`blog-site.js`). There is no `js/`
  directory, so the JavaScript does not currently load. Fix by either moving
  `blog-site.js` into a `js/` folder or correcting the `<script src>` paths.
- `css/blog-collection.css` exists but is not imported anywhere.
- `css/catergories.css` is misspelled — keep the existing spelling when editing
  imports/references, or rename the file *and* update `main.css` together.
- The contact form (`<form action="submit">`) and search/subscribe forms have no
  backend; they are non-functional placeholders.

## Conventions

- **Path conventions:** root pages use relative paths (`css/...`,
  `assets/...`); pages in `pages/` use `../css/...`, `../assets/...`.
- **Color palette** (documented as comments at the top of `css/main.css`):
  tawny `#cc5803`, buff `#d5996b`, rose-taupe `#825965`, russian-violet
  `#2f195f`, fern-green `#43701f`, timberwolf `#dddad2`, gunmetal `#232c33`,
  harvest-gold `#cc912d`. Reuse these hex values rather than introducing new
  colors.
- Keep markup semantic and accessible (alt text on images, `aria-label`s on
  controls) — the existing pages follow this.
- Responsive breakpoints: desktop `min-width: 1200px`, tablet `768px–1199px`,
  mobile `max-width: 767px`.

## Development workflow

- **Run locally:** open `index.html` in a browser, or serve the directory with
  any static server (e.g. `python3 -m http.server`). A server is preferable so
  relative paths resolve consistently.
- **No build, lint, or test commands exist.** Verify changes by loading the
  affected pages in a browser and checking the carousel, category filter, and
  search behave as expected.
- **Git:** active development branch is `claude/add-claude-documentation-qsccS`.
  Commit messages in this repo are short, imperative summaries of the change
  (e.g. "Update index.html with new carousel controls and content
  enhancements"). Push with `git push -u origin <branch>` and open a draft PR.
