# Bar Atlas

App statica/PWA per consultare ricette cocktail, salvare preferiti, creare liste e filtrare le ricette in base alla propria dispensa.

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
- `app.js`: ricerca, filtri, preferiti, liste, profilo, dispensa, backup e PWA.
- `recipes.json`: unico database con 160 ricette complete.
- `manifest.webmanifest` e `service-worker.js`: installazione e uso offline.
- `scripts/validate-recipes.mjs`: validazione eseguita da GitHub Actions.
