# ProjectWork_T2-13
Project Work per Laurea Triennale Pegaso, Tema 2 - Traccia 13  "Sviluppo di un software mobile-friendly per il calcolo del fattore di rischio"

## Demo

- **Demo online**: https://github.com/rico989/ProjectWork_T2-13
- **Documento teorico/PDF**: `doc/calcolo_fattore_rischio.pdf`

## Funzionalità

- Inserimento interattivo dei livelli di:
  - **Probabilità (P)** \[1–4\]
  - **Danno (D)** \[1–4\]
- Calcolo automatico del fattore di rischio **R = P × D**.
- Assegnazione della **classe di rischio**:
  - R = 1–2 → Rischio basso  
  - R = 3–6 → Rischio moderato / da controllare  
  - R = 8–9 → Rischio alto / rilevante  
  - R = 12–16 → Rischio molto alto  
- Evidenziazione nella **matrice 4×4** (cella P,D corrispondente).
- Card del risultato che **cambia colore** in base alla classe di rischio.
- Sezione **“Scarica il documento”** con PDF di supporto teorico e normativo.
- Accesso rapido tramite **QR code** (es. da DVR o procedure aziendali).

## Tech stack

- **Frontend**: HTML5, CSS3 (responsive, single page), JavaScript vanilla
- **Nessun backend**: tutto il calcolo avviene in locale nel browser
- **Distribuzione**: pensato per hosting statico (es. GitHub Pages)

## Struttura del progetto

```text
.
├── index.html          # Pagina principale con form, matrice e sezioni informativi
├── style.css           # Stili, layout responsive e palette blu/azzurra
├── risk.js             # Logica di calcolo R, classi di rischio e colorazione UI
├── qrcode.min.js       # Libreria per generare il QR code
└── doc/
    └── calcolo_fattore_rischio.pdf  # Documento teorico/normativo di supporto
