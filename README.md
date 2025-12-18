# DnD 5e Tools (Static Web App)

A lightweight, static Dungeons & Dragons 5e companion site built with plain HTML/CSS and JavaScript. It focuses on three practical, table-ready utilities:

- **Physical Stat Generator** (race-based random height/weight/age)
- **Ability Score Generator** (4d6, drop lowest)
- **Pre-generated Characters** (searchable gallery with PDF sheets + character art)

This repo is intentionally framework-free to emphasize fundamentals: clean DOM manipulation, simple “service + view” separation, and predictable asset/data conventions.

---

## Live Pages

- Home: `index.html`
- Ability Generator: `abilities.html`
- Physical Stat Generator: `physical-stats.html`
- Pre-generated Characters: `pregen-characters.html`

---

## Tech Stack

**Frontend**
- HTML5 + CSS3 (custom styles; no CSS framework)
- JavaScript (ES5-compatible patterns)
- jQuery 1.12.4 (event handling + DOM updates)

**Compatibility / Polyfills**
- The character gallery page includes ES5/ES6 shims (via CDN) for broader browser support.

**No build step**
- No bundler, transpiler, or package manager required. The project runs as static files behind any web server.

---

## Project Structure

```
.
├─ index.html
├─ abilities.html
├─ physical-stats.html
├─ pregen-characters.html
├─ header.html
├─ footer.html
├─ css/
│  ├─ common.css
│  ├─ header.css
│  ├─ menu.css
│  ├─ main.css
│  ├─ characters.css
│  └─ ...
├─ js/
│  ├─ includeHTML.js
│  ├─ abilityGenerator.js
│  ├─ races.js
│  ├─ physicalCharacteristics.js
│  ├─ characters-api.service.js
│  ├─ characters.service.js
│  ├─ getCharacterSelection.js
│  ├─ setMaxLevel.js
│  └─ app.js
├─ documents/
│  └─ characters/
│     └─ <level>/<Class>/<PDFs...>
└─ images/
   └─ characters/<Class>/<JPGs...>
```

---

## Core UI/UX Building Blocks

### Shared Header/Footer Includes
All pages render a consistent nav and footer using a lightweight HTML include mechanism.

- `header.html` and `footer.html` are partials.
- `js/includeHTML.js` scans for elements with the `include-html` attribute and injects the referenced file via `XMLHttpRequest`.

**Important:** because this uses HTTP requests, you must run the site from a local web server (not `file://`).

---

## Feature Details

## 1) Ability Score Generator
**Page:** `abilities.html`  
**Logic:** `js/abilityGenerator.js`

- Implements the classic **4d6, drop the lowest** algorithm.
- Produces two outputs:
  - **Assigned Abilities**: Strength → Charisma in a fixed order
  - **Ordered Abilities**: sorted highest-to-lowest

**Algorithm (per ability)**
1. Roll 4 integers in `[1..6]`
2. Sum the rolls
3. Subtract the smallest roll

---

## 2) Physical Stat Generator
**Page:** `physical-stats.html`  
**Data:** `js/races.js`  
**Logic:** `js/physicalCharacteristics.js`

This tool generates random **age**, **height**, and **weight** based on D&D 5e race tables.

### Data Model
`js/races.js` defines:
- A shared `character` object used as state
- A set of race objects (e.g., `aasimar`, `bugbear`, `human`) with:
  - `AdultAge`, `MaxAge`
  - `BaseHeight`, `HeightModifier` (e.g., `2d10`)
  - `BaseWeight`, `WeightModifier` (e.g., `2d4`)

### Flow
1. User selects a race
2. `prepCharacter(raceName)` copies the correct race table into `character`
3. `getCharacteristicRanges()` computes min/max and age brackets
4. Randomized stats are rolled using dice expressions like `2d10`
5. Results are rendered into the page

### Notes
- Height is stored as inches and converted to feet/inches for display.
- The page also renders the **range of possible outcomes** (min/max height/weight; age brackets).

---

## 3) Pre-generated Characters Gallery
**Page:** `pregen-characters.html`

This is a searchable list of characters that links to:
- a **PDF character sheet**
- a **character portrait image**

### Data Source
`js/characters-api.service.js` currently acts as the “API” layer, returning an in-memory array of character records:

- `character_id`
- `character_name`
- `character_race`
- `character_class`
- `character_build`
- `character_max_level`

### Rendering Layer
`js/characters.service.js` defines `CharacterList` which:
- reads the selected class + level from the form
- builds DOM nodes for each character card
- hides characters which don’t match:
  - selected class, or
  - level above `character_max_level`

### Asset Linking Conventions
The gallery constructs asset URLs **by convention**, so naming matters.

**Character sheet PDFs**

```
../documents/characters/<level>/<Class>/<Class> <level> [<Build>] - <Character Name>.pdf
```

**Character portraits**

```
../images/characters/<Class>/<Character Name>.jpg
```

Special case:
- For **Verdan**, the image path changes based on level (< 5 uses ` (Young)`, >= 5 uses ` (Mature)`).

---

## Local Development

This project must be served over HTTP (not opened via `file://`) because shared partials are loaded using `XMLHttpRequest`.

### Serve as static files (quick setup)
Any static server works; here are a few common choices:

**Python**

```bash
# from the repo root
python -m http.server 8000
```
Then open the URL printed by the server (typically `http://127.0.0.1:8000/`).

**Node (one-liner)**

```bash
npx serve .
```

### VS Code convenience (optional)
If you use VS Code tasks, you can run the workspace’s **Open in Browser** task (see `.vscode/tasks.json`) to open whatever URL you’ve configured for your local server.

---

## Extending the Content

### Add a new pre-generated character
1. Add a new record to the array returned by `CharactersService.getCharacters()` in `js/characters-api.service.js`.
2. Add the PDF to:

```
documents/characters/<level>/<Class>/
```

3. Add the portrait image to:

```
images/characters/<Class>/
```

Ensure the filename matches the conventions described above.

### Add or adjust a race
1. Add/update the race object in `js/races.js`.
2. Ensure `prepCharacter()` in `js/physicalCharacteristics.js` maps the UI label to the correct race object.

---

## Engineering Notes (Portfolio Highlights)

- **Separation of concerns:** a small “service” layer (`CharactersService`) provides structured data, while `CharacterList` focuses on DOM rendering.
- **Deterministic conventions:** PDFs and images are linked through consistent folder/file naming so content can scale without rewriting logic.
- **Progressive compatibility:** shims are included where needed to keep client-side logic working across older environments.

---

## Disclaimer

This project is a fan-made utility site and is not affiliated with Wizards of the Coast. Dungeons & Dragons and D&D are trademarks of Wizards of the Coast.
