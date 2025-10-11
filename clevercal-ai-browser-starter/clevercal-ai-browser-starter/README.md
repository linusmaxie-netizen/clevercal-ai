# CleverCal.ai — Browser Starter (React via CDN)

**Ziel:** Sofort lauffähiger Prototyp im Browser. Später leicht zu migrieren zu Vite/Next/Expo.

## Nutzung (GitHub im Browser)
1. In deinem Repo: **Add file → Upload files**.
2. Lade alle Dateien/Ordner aus diesem Paket hoch.
3. Committen.
4. Optional: **Settings → Pages → Source: `main` (root)** → URL öffnen.

## Struktur
- `index.html` — lädt React per CDN, mountet die App.
- `src/app.jsx` — Komponenten & Navigation.
- `styles.css` — dunkles UI (rot/weiß/schwarz).
- `assets/clevercal-logo.svg` — Logo.

## TODO-Roadmap
- Tracker: Lebensmittel-Liste, Makros, QR/Barcode (später).
- Coach: täglicher Check-in, Ziel-Updates, Tipps.
- Profil: Ziele, Einheiten, Privacy.
- Migration: Vite/Next (npx create-vite), Code 1:1 übernehmbar.
