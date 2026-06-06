# Bar Atlas

App statica/PWA per consultare ricette cocktail, cercarle per nome, salvare preferiti e creare liste personali.

## Avvio locale

Il file `recipes.json` viene caricato tramite `fetch`, quindi non aprire direttamente `index.html` con `file://`.

```bash
python -m http.server 8000
```

Poi apri `http://localhost:8000`.

## Pubblicazione GitHub Pages

1. Copia tutti i file nella root del repository mantenendo le cartelle `.github`, `icons` e `scripts`.
2. In GitHub apri **Settings → Pages**.
3. Come sorgente seleziona **GitHub Actions**.
4. Esegui un push su `main`.

La workflow valida automaticamente `recipes.json`, controlla la sintassi JavaScript e pubblica soltanto i file necessari.

## Struttura

- `index.html`: struttura dell'interfaccia.
- `styles.css`: tema responsive chiaro/scuro.
- `app.js`: ricerca per nome, filtri, preferiti, liste, profilo, backup e PWA.
- `recipes.json`: unico database con 200 ricette complete.
- `manifest.webmanifest` e `service-worker.js`: installazione e uso offline.
- `scripts/validate-recipes.mjs`: validazione eseguita da GitHub Actions.

## Aggiornamento v1.2.0

- Database con 200 ricette complete.
- Ricerca limitata ai nomi dei cocktail e ai loro nomi alternativi.
- Rimossi filtro “Preparabili” e gestione della dispensa per rendere l’interfaccia più chiara.
- Aggiunti i 27 cocktail mancanti dalla lista IBA confrontata nel giugno 2026.
- Aggiunti Long Island Iced Tea, Tokyo Iced Tea, Electric Iced Tea, Gin Tonic, Vodka Tonic, Gin Lemon, Vodka Lemon e Screwdriver.
- Aggiunte variazioni alla fragola e tropicali di Daiquiri, Caipiroska, Mojito e Margarita.
