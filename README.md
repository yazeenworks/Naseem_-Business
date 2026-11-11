# Naseem Business Services

A responsive Next.js App Router website using React, Tailwind CSS, Lucide React and Framer Motion.

## Run locally

Use Node.js 22 or later. Run `npm ci`, then `npm run dev`.

## Deploy

The supplied `out/` folder is ready for static hosting at the root of a domain. To rebuild it, run `npm ci` and `npm run build`. On a build-based host, use the build command `npm run build` and output directory `out`. Use `npm start` to preview the production export locally.

## Edit the site

- Components for navigation, hero, services, process, contact and footer are in `components/`.
- Edit `lib/content.js` for services, process steps and contact information.
- Edit `app/globals.css` for layout, colors and typography.
- The inquiry form opens a prefilled draft in the visitor’s email app. A copyable draft is available as a fallback. The visitor sends the message. No server or API key is required.
- Set NEXT_PUBLIC_INSTAGRAM_URL and NEXT_PUBLIC_LINKEDIN_URL to official HTTPS profile URLs before building to show those links in the footer.
- The location link searches the supplied address. The skyline image is an AI-generated illustration of Doha.
