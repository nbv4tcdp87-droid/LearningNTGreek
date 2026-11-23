# En Archē Greek

A free beginner's course in **Septuagint and New Testament Greek**, starting from the alphabet.

Unit 1 has ten lessons, from the alphabet to εἰμί and the personal pronouns. Unit 2 is under way, starting with Lesson 11 on the third declension. Each lesson includes explanations, paradigm tables, verses from the LXX and NT with tap-for-meaning glosses, and exercises. The site also has:

- **Alphabet:** matching rounds that pair each letter with its name and with its sound spelled in phonetic English; a quick quiz in five versions that rotate on each visit, each asking one question about every letter; and a chart.
- **Vocabulary:** 106 high-frequency words with spaced-repetition flashcards, a quick quiz and a searchable word list.
- **Grammar review:** parsing and form-building drills, paradigm recall and mixed lesson review.
- **Paradigms:** every table in one place.

Pronunciation follows the Erasmian system.

## Progress

Progress (lesson scores and flashcard schedules) is saved in each visitor's browser using `localStorage`. Nothing is sent to a server. Clearing site data, or switching browsers or devices, starts fresh.

## Files

| File | Contents |
|---|---|
| `index.html` | Page layout, styles, and all app code (lessons, quizzes, flashcards, drills) |
| `data-core.js` | Alphabet, paradigms, prepositions, vocabulary |
| `data-lessons-1.js` | Lessons 1–5 |
| `data-lessons-2.js` | Lessons 6–10 |
| `data-lessons-3.js` | Unit 2, from Lesson 11 |

The site is plain HTML and JavaScript with no build step. Fonts (Cardo, Gentium Book Plus, Figtree) load from Google Fonts.

## Hosting on GitHub Pages

1. Upload these files to the root of a public repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and click **Save**.
4. After a minute or two the site appears at `https://<your-username>.github.io/<repository-name>/`.

To run it locally, open `index.html` in a browser, or serve the folder with any static server (for example `python3 -m http.server`).

## Adding lessons

Lessons are plain objects in the `data-lessons-*.js` files, each with `sections`, `texts` and `ex` (exercises). Exercise types are `mc` (multiple choice), `type` (transliteration), `match` and `self` (self-checked translation). New vocabulary goes in `data-core.js` with a lesson number `L`. Add a new data file with a `<script>` tag in `index.html`.

## Sources

LXX quotations follow Rahlfs' edition; NT quotations follow the standard critical text (NA28 / SBLGNT). Word frequencies are approximate NT counts. English translations of verses are original to this course.
