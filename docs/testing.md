# Verification - 28 October 2026

- Chromium automated suite: 16 passing scenarios (local and public production site), including 320/390/1280 layouts.
- Firefox: 13 functional scenarios passed locally. Responsive screenshots were inspected in Chromium.
- WebKit/Safari could not be launched in this environment because required browser system libraries are missing. iPhone Safari and WhatsApp embedded-browser behavior remain unverified.
- Actual desktop and mobile screenshots inspected for home, surprise editor, clue editor, theme selection, recipient puzzle and reveal.
- Covered: link encode/decode/reload, sequential unlock, wrong answers, hints, alternatives, Unicode, personal score, preview back, invalid URL rejection, escaped text/XSS, malformed/tampered payloads, optional drafts and clear, clue bank/reorder/remove/limits, image resize, encrypted file export/import, oversize rejection, uploaded video playback and external video link isolation, six clues with five alternatives and 65 KB attachment.
- Not covered by a security audit. No claim that low-entropy answers protect sensitive data. No device share-sheet/clipboard permission matrix or messenger link truncation guarantee.

Production checked at https://cluehug.vercel.app/: public anonymous access works, full Chromium suite passes, security response headers present, tests/README/node_modules/.env not served (404). Demo solved in a separate browser session.
