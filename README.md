# ShopZone Electronics (HTML, CSS, JavaScript + Node.js + MongoDB)

## Features
- Multi-page electronics storefront, product details, cart and checkout
- Express API and MongoDB product/order storage
- Admin inventory page at `/admin.html` to add your own product name, SKU, prices, stock, image and description
- Admin key protection for inventory routes
- Demo checkout only; no real payment gateway

## Windows setup (PowerShell)
1. Install Node.js LTS and MongoDB Community Server, or create a MongoDB Atlas database.
2. Open PowerShell in this project folder.
3. Install packages:
   ```powershell
   npm install
   ```
4. Create your environment file:
   ```powershell
   Copy-Item .env.example .env
   notepad .env
   ```
5. In `.env`, set a long private `ADMIN_KEY`. Keep the local MongoDB URI or replace it with your Atlas connection string. Never upload `.env` to GitHub.
6. Start MongoDB if using a local database. Then seed starter listings:
   ```powershell
   npm run seed
   ```
7. Start the website:
   ```powershell
   npm run dev
   ```
8. Open `http://localhost:5000` for the store and `http://localhost:5000/admin.html` to manage inventory.
9. Enter the `ADMIN_KEY` value from `.env`, then use the form to add your real electronics. Starter listings are placeholders: replace their descriptions, images and prices with your own accurate product details.

## Add your own product photos
- Put image files inside `public/images/` (create the folder if needed).
- In the admin form, use a path such as `/images/usb-speaker.jpg`, or a public HTTPS image URL you have permission to use.
- Use photos of the actual item you sell and make sure you have rights to use them.

## API
- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/orders`
- `GET /api/admin/products` (requires `x-admin-key`)
- `POST /api/admin/products` (requires `x-admin-key`)
- `PATCH /api/admin/products/:id` (requires `x-admin-key`)

## Important
This is a learning/demo store. Checkout records demo orders and does not process payment. Before public production use, add proper admin authentication, HTTPS, rate limiting, privacy/security review, stock transaction handling, returns/shipping policies and any required business compliance. Never store payment card data in this app.
