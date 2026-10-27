# Product comparison and design decisions

Checked 28 October 2026. These are observations of product pages, not a claim that ClueHug is better in every respect.

| Product | Observed approach | ClueHug decision |
|---|---|---|
| [GiftPuzzle](https://giftpuzzle.com/) | Memory crossword, personal quiz and reveal; self-contained free-builder links | Keep instant creation and no required account; add arbitrary link/file reveals |
| [Grid Puzzles secret message](https://gridpuzzles.app/secret-message/) | Seven ready-made puzzle types; hint control; clearly says game lock not a safe | Use honest privacy language; editable clues and hints; do not make security claims from UI gating |
| [Open a Gift friendship quiz](https://www.openagift.com/templates/friendship-quiz) | Up to five personal clues, hints, skip after three attempts | Allow alternative spellings and unlimited retries; no automatic skip that bypasses answer-derived encryption |
| [Love Puzzle](https://lovepuzzle.com/how-it-works/) | Wordle, memory game, crossword, preview, paid publishing, QR | Keep recipient preview and simple steps; offer no-account static publishing, with fewer game types |
| [Unwrapio](https://unwrapio.com/bff-quiz-maker) | Templates, personal questions, message/photo/video/gift reveal | Add occasion starting points; focus on local control without AI calls or backend accounts |
| [Puzzle Box App](https://www.puzzleboxapp.com/) | Personal puzzles unlock a physical gift box, multiple puzzle mechanics | Use a digital reveal rather than hardware; keep optional personal knowledge questions |
| [Riddle Me Gifts](https://riddlemegifts.app/) | Riddle difficulty, lifelines and hints, gift-focused creation | Keep hints and a small question bank; avoid billing, schedules and social profiles in v1 |

## Improvements targeted

- A single coherent three-step maker with prefilled examples, templates and visible validation.
- No surprise upload, no sign-up, no payment, no analytics or creator access to recipient scores.
- Encrypted sequential reveal instead of plaintext hidden by CSS, with low-entropy warnings.
- Actual media/file support via an encrypted puzzle-file fallback rather than claiming any video fits in a link.
- No hard timer, unlimited retries, multiple answer variants, mobile-first layouts.

## Deliberate omissions

No AI-generated questions, server media uploads, cross-device creator accounts, short server links, QR codes, sender dashboards, edit-in-place or revocation. No memory-match board, crossword grid, Sudoku or drag puzzle yet. The number puzzle, word scramble, riddles and personal questions all use text-answer interactions. Large uploaded media requires sending a puzzle file, which is less convenient than a cloud-media platform. These are future product choices, not secretly mocked features.
