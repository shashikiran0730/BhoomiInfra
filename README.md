# Bhoomi Infra Developers Website

This is a Next.js website for Bhoomi Infra Developers with a SQLite-backed data layer for site info, projects, and contact details.

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Vercel deployment

- Push this repository to GitHub.
- Connect the repo to Vercel.
- Use the default build command: `npm run build`.
- Use the output directory: `.next`.

### Notes

- The site reads its content from a local SQLite database file at `data/site.db`.
- Booking submissions are accepted through an API route and return a confirmation response.
- For a fully persistent booking backend, connect the form to a server or external database.
