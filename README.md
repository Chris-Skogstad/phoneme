# Phoneme-Based Activity Builder

A frontend builder that lets Speech Pathology teachers create phoneme-based classroom activities — a Wordle-style guessing game and a Word Search puzzle — and export them as standalone, downloadable HTML files that run in any browser.

Built for **Assessment 1** of a multi-stage project. This stage is frontend-only: word lists are fixed rather than database-driven, with database and dynamic word-list management planned for a later assessment.

## Features

- **Wordle Builder** — guess a phoneme-based word within a limited number of attempts, with phoneme-by-phoneme feedback (correct / wrong position / absent) and a matching on-screen phoneme keyboard
- **Word Search Builder** — generates a grid of phoneme symbols hiding a small set of phoneme-based words, with adjustable difficulty (grid size)
- **Phoneme hints** — hovering any phoneme symbol (on tiles, the keyboard, or word lists) shows its English letter equivalent, e.g. `/θ/` → "TH (as in thin)"
- **Regional phoneme styles** — switch between Australian, British, and American phoneme transcriptions from Settings, affecting both activities
- **Light/dark mode** — theme preference persists across visits via a cookie
- **Cookie consent** — theme and locale cookies are only set after the user accepts a consent notice
- **Responsive design** — activity grids and boards scale to fit smaller screens
- **HTML export** — each activity can be downloaded as a single, self-contained `.html` file with no external dependencies, ready for students to open and play in any browser

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) with TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- React Context for theme and locale state

## Project structure

app/
page.tsx → Home
about/page.tsx → About
wordle/page.tsx → Wordle builder
word-search/page.tsx → Word Search builder
settings/page.tsx → Settings (theme + phoneme style)
components/ → Reusable UI components (Button, PhonemeTile, Nav, etc.)
context/ → ThemeContext and LocaleContext (React Context + cookies)
lib/ → Pure logic and data (word lists, grid generation, HTML export, phoneme legend)

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Author

Christopher Skogstad
Student Number: 21198609