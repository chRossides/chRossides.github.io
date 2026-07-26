# Off-site SEO checklist (user actions)

These actions happen outside this repository but have the highest impact on local search and AI-assistant answers. Roughly in order of impact:

## 1. Google Business Profile
Both locations already exist as Google Maps places:
- Store: https://maps.app.goo.gl/qAVz1GjbH3xVna6X6
- Factory: https://maps.app.goo.gl/Yv9PHi2cpyBMbLbt8

Claim/verify ownership of both at https://business.google.com, then: set the website to https://www.chrossides.com, add opening hours, photos (the printing and banner photos used on the site work well), and the product categories. This is the single biggest lever for "flags Nicosia / σημαίες Λευκωσία" searches and Google Maps.

## 2. Search Console & Bing Webmaster Tools
- Google Search Console (https://search.google.com/search-console): verify the `www.chrossides.com` property (DNS TXT record or HTML file) and submit `https://www.chrossides.com/sitemap-index.xml`.
- Bing Webmaster Tools (https://www.bing.com/webmasters): can import directly from Search Console. Matters beyond Bing itself - Bing's index feeds ChatGPT and Copilot answers.
- Also add both locations to Bing Places (https://www.bingplaces.com).

## 3. Fix the existing directory listings
- **TradeKey** (https://www.tradekey.com/company/Charalambos-Rossides-Ltd-714536.html): founding year says **1983** - correct it to 1938. It also claims worldwide shipping; since delivery is Cyprus-only, correct that too.
- **cyprusmanufacturers.com** and **oncyprus.com**: check that address, phone numbers and the website URL are present and consistent with the site (Pindarou 5B / Nikolaou Ioannou 3, +357 22 764662 / 22 432481). Consistent name-address-phone across the web strengthens local rankings.
- Confirm whether the mobile 99 199063 shown on oncyprus.com should be public; if not, ask them to remove it.

## 4. Optional
- One social profile (e.g. Facebook or Instagram with workshop photos) gives customers a second touchpoint and another `sameAs` link for the structured data - tell Claude to add it to `src/i18n/ui.ts` (`site.sameAs`) once it exists.
- Once opening hours are settled, add them to the site's structured data too (`openingHoursSpecification`).
