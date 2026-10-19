# Impresa Edile Charrier — Sito web

Sito vetrina in **React + Vite + Tailwind CSS v4** per l'impresa edile Charrier
(pavimenti esterni ed interni, muratura ed edilizia in generale).

## Avvio

```bash
npm install
npm run dev
```

Poi apri l'indirizzo mostrato nel terminale (di solito `http://localhost:5173`).

## Build di produzione

```bash
npm run build
npm run preview
```

## Struttura

```
src/
  data.js                    # Testi, servizi, recapiti e foto della galleria (modifica qui)
  components/
    Navbar.jsx               # Barra di navigazione
    Hero.jsx                 # Sezione iniziale
    Services.jsx             # I servizi offerti
    Gallery.jsx              # Galleria lavori + caricamento foto (anteprima)
    About.jsx                # Chi siamo
    AppointmentForm.jsx      # Modulo per prenotare l'appuntamento
    Footer.jsx               # Piè di pagina
```

## Personalizzazione

- **Testi e recapiti**: modifica [`src/data.js`](src/data.js) (nome, email, telefono, servizi).
- **Foto della galleria**: metti le immagini in `public/gallery/` e aggiungi una voce
  nell'array `galleria` di `src/data.js`, ad esempio:
  ```js
  { src: "/gallery/lavoro1.jpg", titolo: "Pavimento esterno" }
  ```
  Il pulsante **"+ Carica foto"** nella galleria permette un'anteprima locale delle foto,
  ma **non le salva** (serve un backend per renderle permanenti).

## Modulo appuntamenti — invio email al proprietario

Attualmente il modulo (nome, cognome, email, data e messaggio) è **solo lato front-end**:
alla conferma apre l'app di posta precompilata verso l'indirizzo del proprietario
(`azienda.email` in `src/data.js`) come ripiego, e mostra il messaggio di conferma.

Per far arrivare l'email **automaticamente** al proprietario serve un passo successivo
(uno di questi):

1. **Servizio esterno senza backend** — es. [EmailJS](https://www.emailjs.com/) o
   [Formspree](https://formspree.io/): bastano poche righe nel componente
   [`AppointmentForm.jsx`](src/components/AppointmentForm.jsx) (vedi il commento `TODO`).
2. **Endpoint backend** — un piccolo server (Node/Express, serverless, ecc.) che riceve
   i dati del modulo e invia l'email con un servizio SMTP.

Il punto esatto in cui agganciare l'invio è segnalato dal commento `TODO` dentro
`AppointmentForm.jsx`.
