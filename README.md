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

### Page Bootstrapping (How JavaScript is wired up)
Each page is intentionally “simple HTML + a few scripts”, so the runtime behavior is easy to follow.

- **Common pattern:** pages load their feature script(s), then load `js/includeHTML.js`, and finally call `includeHTML()`.
- **jQuery pages:** `abilities.html` and `physical-stats.html` load `js/jquery-1.12.4.min.js` and use `$(document).ready(...)` to attach click handlers.
- **Vanilla JS page:** `pregen-characters.html` uses plain DOM APIs + ES6 class syntax (`CharacterList`), and includes shims (via CDN) for broader compatibility.

For the character gallery, the JavaScript entrypoint is `js/app.js`:
- constructs a `CharactersService` instance (data source)
- constructs a `CharacterList` instance (DOM renderer)
- calls `characterList.init()` to render initial results

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

**Implementation notes**
- The click handler is bound to the `#calc-abilities` button.
- Results are written into `#assigned-abilities` and `#ordered-abilities` using `innerHTML` via jQuery.
- After generating values, the script scrolls to results by setting `window.location.href = '#calculated-abilities'`.

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

### Dice Parsing
The physical stat generator stores dice expressions as strings like `2d10`.

- `getMinRoll('XdY')` returns `X` (all ones)
- `getMaxRoll('XdY')` returns `X * Y`
- `rollDice('XdY')` loops `X` times and rolls `1..Y`

The “height modifier roll” is stored as `character.HeightModRoll` and then reused in weight calculation (matching the 5e tables).

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

### Form/Filtering Mechanics
- Class selection triggers `setMaxLevel(className)` (from `js/setMaxLevel.js`) which populates the level dropdown with `1..20`.
- Clicking **Search** runs `doGetCharacters(event)` (from `js/getCharacterSelection.js`), prevents the form submission, and calls `characterList.init()` to re-render.
- Filtering is applied during render by comparing the selected class/level to each character’s `character_class` and `character_max_level`.

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

### “Service + View” Separation
The gallery is split into two layers:

- `CharactersService` (`js/characters-api.service.js`): provides character data (currently static, but structured like a real API call)
- `CharacterList` (`js/characters.service.js`): turns records into DOM and mounts them under `#characters`

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

#### Naming rules (gallery relies on exact strings)
The gallery builds file paths from a mix of:

- the **selected** class/level in the form (dropdown text/value), and
- the character record fields (`character_name`, `character_build`, `character_class`, `character_race`).

That means **spelling, spaces, punctuation, and casing must match** across:

- the class dropdown (`pregen-characters.html`)
- folder names under `documents/characters/<level>/<Class>/` and `images/characters/<Class>/`
- the `character_name` and `character_build` strings in `js/characters-api.service.js`

**PDF filenames** are generated like:

```
<Class> <level> [<Build>] - <Character Name>.pdf
```

Example:

```
documents/characters/5/Warlock/Warlock 5 [The Undying] - Utassi Birdcruncher.pdf
```

**Image filenames** are generated like:

```
<Character Name>.jpg
```

Example:

```
images/characters/Warlock/Utassi Birdcruncher.jpg
```

Verdan special case:
- For a character whose `character_race` is exactly `Verdan`, the image name must be either `"<Name> (Young).jpg"` (level < 5) or `"<Name> (Mature).jpg"` (level >= 5).

### Add or adjust a race
1. Add/update the race object in `js/races.js`.
2. Ensure `prepCharacter()` in `js/physicalCharacteristics.js` maps the UI label to the correct race object.

#### Naming rules (physical stats)
`prepCharacter(race)` compares the selected dropdown *label text* (e.g. `"Elf, Dark (Drow)"`) against a long set of `if/else` string checks.

When adding/renaming a race:
- Update the `<option>` label text in `physical-stats.html` and the matching string in `prepCharacter()` together.
- Ensure the referenced race object exists in `js/races.js` and has the expected fields (`AdultAge`, `MaxAge`, `BaseHeight`, `HeightModifier`, `BaseWeight`, `WeightModifier`).

---

## Engineering Notes (Portfolio Highlights)

- **Separation of concerns:** a small “service” layer (`CharactersService`) provides structured data, while `CharacterList` focuses on DOM rendering.
- **Deterministic conventions:** PDFs and images are linked through consistent folder/file naming so content can scale without rewriting logic.
- **Progressive compatibility:** shims are included where needed to keep client-side logic working across older environments.

---

## Disclaimer

This project is a fan-made utility site and is not affiliated with Wizards of the Coast. Dungeons & Dragons and D&D are trademarks of Wizards of the Coast.
