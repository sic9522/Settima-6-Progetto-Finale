# Atelier — Studio di Architettura

Sito web one-page per uno studio di architettura fittizio. Progetto finale del corso, settimana 7.

## Struttura del progetto

```
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css          # CSS compilato da SASS
│   ├── sass/
│   │   ├── style.scss         # Foglio principale
│   │   ├── _colors.scss       # Palette colori (tema chiaro)
│   │   ├── _darkcolors.scss   # Palette colori (tema scuro)
│   │   ├── _sizes.scss        # Variabili di dimensione
│   │   └── _transitions.scss  # Velocità delle animazioni
│   └── javascript/
│       └── script.js          # Logica interattiva
```

## Funzionalità

- **Navigazione sticky** con navbar responsiva (Bootstrap 5)
- **Dark mode** con toggle switch e persistenza via `localStorage`
- **Sezione Servizi** — 3 card cliccabili che aprono modali Bootstrap con i dettagli
- **Sezione Lavori** — 6 card filtrabili per categoria (Tutti / Ville / Ristrutturazione / Esterni)
- **Form di contatto** con validazione nativa HTML5 e messaggio di successo
- **Footer** con informazioni di contatto e indirizzo

## Tecnologie

| Tecnologia | Utilizzo |
|---|---|
| HTML5 | Struttura semantica |
| SASS / SCSS | Stili modulari con variabili e nesting |
| Bootstrap 5.3 | Layout responsivo, navbar, modali, form |
| JavaScript (ES6+) | Dark mode, filtro lavori, validazione form |

## Come avviare

Apri `index.html` direttamente nel browser. Non sono richiesti build step o dipendenze npm — il CSS è già compilato in `assets/css/style.css`.

Per ricompilare il SASS dopo modifiche:

```bash
sass assets/sass/style.scss assets/css/style.css --watch
```