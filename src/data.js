// Dati del sito — modifica qui testi, servizi e recapiti.

export const azienda = {
  nome: "Impresa Edile Charrier",
  nomeBreve: "Charrier",
  claim: "Costruiamo e ristrutturiamo con cura, dalle fondamenta alle finiture.",
  descrizione:
    "Impresa edile a conduzione familiare specializzata in pavimentazioni esterne ed interne, muratura e lavori di edilizia in generale. Qualità, precisione e rispetto dei tempi.",
  email: "info@impresacharrier.it",
  telefono: "+39 000 000 0000",
  zona: "Piemonte e dintorni",
}

export const servizi = [
  {
    titolo: "Pavimenti esterni",
    descrizione:
      "Posa di pavimentazioni per cortili, vialetti e terrazze: autobloccanti, pietra, gres e porcellanato per esterni.",
    icona: "exterior",
  },
  {
    titolo: "Pavimenti interni",
    descrizione:
      "Posa di piastrelle, gres, parquet e resine. Massetti e sottofondi a regola d'arte.",
    icona: "interior",
  },
  {
    titolo: "Muratura",
    descrizione:
      "Costruzione e ristrutturazione di muri, tramezzi, intonaci e opere in pietra e mattoni.",
    icona: "masonry",
  },
  {
    titolo: "Edilizia generale",
    descrizione:
      "Ristrutturazioni complete, nuove costruzioni, rifacimenti e piccole opere edili su misura.",
    icona: "building",
  },
]

// Galleria lavori.
// Per aggiungere una foto: metti il file in /public/gallery/ e aggiungi una voce qui,
// oppure usa un URL esterno. Esempio: { src: "/gallery/lavoro1.jpg", titolo: "Pavimento esterno" }
export const galleria = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    titolo: "Cantiere in corso",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    titolo: "Interni ristrutturati",
  },
  {
    src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
    titolo: "Posa pavimento",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    titolo: "Esterni e vialetti",
  },
  {
    src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    titolo: "Muratura in pietra",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    titolo: "Finiture interne",
  },
]
