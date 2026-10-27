# ClueHug

A little mystery. A lovely surprise.

Create a message, link, photo, video or file reveal; wrap it in 1–6 riddles or personal questions; play the recipient preview; share a link or downloadable puzzle file. The creator needs no account or setup guide.

## Run

Static app, no build required. Use a secure origin in production (Web Crypto needs HTTPS).

```sh
python3 -m http.server 4173
```

Open http://localhost:4173. For tests: `npm ci`, `npx playwright install chromium`, `npm test`.

## Features

- Birthday, just-because and best-friend starting points
- Built-in riddles, number puzzle and word scramble; editable questions and hints
- Personal-knowledge mode with a private first-try score
- Up to five accepted answer alternatives; Unicode, case, spacing and punctuation normalization
- Three themes and complete recipient preview
- Copy/share link, encrypted file export/import, local image resize
- Optional device-only text drafts (off by default); attachments are not persisted
- No backend, third-party analytics, login, AI keys or server-side surprise storage
- Self-hosted fonts, reduced-motion support, keyboard labels and focus indicators

## Important privacy limits

This is playful puzzle gating, **not a vault**. Familiar answers and built-in riddles can be guessed offline. Anyone can forward the link/file. There is no revocation, expiration, recipient identity verification or open tracking. Do not use sensitive content or credentials.

Names, first question and hint, theme and mode are visible in the URL fragment. The reveal and subsequent clues are encrypted in the browser. Each layer uses a random AES-256-GCM data key and an answer-derived key (PBKDF2-SHA-256, 180,000 iterations) to wrap it. Random salts and IVs are generated for each layer. Alternatives wrap the same data key, avoiding exponential payload growth. The encrypted layer is compressed before encryption. Decompression and import sizes are bounded. This is not a cryptographic audit or security guarantee.

Fragments are not part of the ordinary HTTP request, but the browser, clipboard and messaging service may retain the full URL. The hosting service still receives normal page requests. External links/media are only rendered after solving and remain subject to their provider's privacy/access rules.

Links over 24,000 characters fall back to a puzzle file. File attachments are limited to 8 MB; pictures are resized to at most 1,200 pixels on the longest side and converted to JPEG. Files must be opened through this website. Some chat apps truncate long links. Video URLs open on their provider, not in an embedded player; uploaded compatible video files play locally after solving. Sharing uses the device share sheet if available, otherwise copy.

## Deployment

Serve the static files at the domain root. `vercel.json` includes response security headers. Do not publish tests, node_modules, local drafts or credentials as web assets.

## Research

See `docs/product-research.md` for the compared products and explicit tradeoffs. No competitor code/assets were copied.
