# Raw Fashion

A fully functional single-page e-commerce site for **Raw Fashion**, a clothing store.
Built with plain HTML, CSS, and vanilla JavaScript — no framework, no build step.

## How to use it

Open `index.html` directly in any modern browser. That's it — no server, no install.

## What's inside

- Client-side hash router (`#/products`, `#/product/p1`, `#/cart`, etc.) covering
  Home, Products, Categories, Product Detail, Cart, Wishlist, Search, About,
  Contact, Checkout, and Order Confirmation.
- 12 products across 6 categories (Outerwear, Denim, Knitwear, Basics, Footwear,
  Accessories), each with color/size variants, materials & care info, a size &
  fit guide, styling tips, shipping/return info, and customer reviews (with a
  working "write a review" form).
- A real shopping cart and wishlist — add, remove, adjust quantity, promo codes
  (`WELCOME10`, `SAVE20`, `FREESHIP`, `RAW5`), automatic bundle discount at 5+
  items, and free-shipping threshold logic.
- Search (by name/category/brand/color) and filters (category, brand, price,
  availability, rating) with 5 sort modes.
- A full checkout flow ending in an order confirmation page with a generated
  order number.

## Persistence note

Cart and wishlist contents are saved so they survive a page refresh **when
this file is opened inside the Claude artifact/preview environment**, which
provides a small persistent key-value store the page calls into
(`window.storage`). If you open `index.html` on its own outside that
environment (double-clicking it, hosting it elsewhere, etc.), that storage
API won't be present — the site still works perfectly, but the cart and
wishlist will reset on refresh unless you wire in your own persistence
(e.g. swap the calls in the `loadPersisted` / `persistCart` / `persistWishlist`
functions near the top of the `<script>` block for `localStorage`, or a real
backend).

## Editing

Everything lives in one file, organized top to bottom as:

1. `<style>` — all CSS (design tokens as CSS variables at the top)
2. Static HTML shell — nav, footer, toast notification
3. `<script>` — data (`PRODUCTS`, `CATEGORIES`, `PROMO_CODES`), state,
   storage, router, page renderers, and the `App` object that handles every
   click/submit interaction

Product data lives in the `PRODUCTS` array near the top of the script — edit
that to add, remove, or change products.
