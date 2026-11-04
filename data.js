/* ------------------------------------------------------------------
   HONEST MISTAKE — survey content
   Everything you might want to edit lives in this file.
   ------------------------------------------------------------------ */

window.HM = {

  /* Instagram link for the thank-you screen. Leave "" to hide the button. */
  instagramUrl: "https://www.instagram.com/hnst.mstk/",

  /* Access code people type before the survey opens (not case-sensitive).
     Send it together with the link. Leave "" to turn the code screen off. */
  accessCode: "HNST26",

  /* Where answers go: a Google Form linked to a Google Sheet.
     action = the form's ".../formResponse" address; entries = the form's field ids. */
  googleForm: {
    action: "https://docs.google.com/forms/d/e/1FAIpQLSefLqB4y8sOCHo-dGAuMaxKLGIi2xy5vwT4wO9rhlq1Jtrxiw/formResponse",
    entries: { age: "entry.1918144299", gender: "entry.1933281923",
               p01: "entry.210936047", p02: "entry.1583162127", p03: "entry.1122639933", p04: "entry.1577447190",
               p05: "entry.529971921", p06: "entry.1067645831", p07: "entry.1287965784", p08: "entry.544695118",
               p09: "entry.144624653", p10: "entry.941105402", p11: "entry.21730551", p12: "entry.697532893",
               favourites: "entry.557555141", instagram: "entry.1260436815", email: "entry.1563139239" }
  },

  /* Fallback price ranges — only used if a piece has no "prices" of its own.
     Each piece's real ranges are set on the piece below. */
  defaultPrices: {
    silver: ["EGP ___ – ___", "EGP ___ – ___", "EGP ___ – ___"],
    plated: ["EGP ___ – ___", "EGP ___ – ___", "EGP ___ – ___"]
  },

  /* Images that aren't portrait are shown whole (not cropped) on their own edge colour. */
  fitWhole: {
    "bangle-1-2.jpg": "#000000",
    "ear-cuff-1-2.jpg": "#000000",
    "necklace-1-2.jpg": "#2b0200",
    "necklace-3-2.jpg": "#2c0500",
    "ring-1-2.jpg": "#2c0500",
    "ring-2-2.jpg": "#2c0500",
    "ring-3-2.jpg": "#ebebeb",
    "ring-4-2.jpg": "#e0dcd9",
    "ring-5-2.jpg": "#e4e3e1"
  },

  pieces: [
    { id: "p01", name: "Bangle 1",   desc: "Open bangle · twisted texture · sculpted ends",
      images: ["bangle-1-1.jpg", "bangle-1-2.jpg"],
      prices: { silver: ["EGP 5,000 – 7,000", "EGP 7,000 – 9,000", "EGP 9,000 – 11,000"], plated: ["EGP 2,500 – 3,500", "EGP 3,500 – 5,000", "EGP 5,000 – 6,500"] } },
    { id: "p02", name: "Bracelet 1", desc: "Mixed link chain · stamped tag · drop charms",
      images: ["bracelet-1-1.jpg", "bracelet-1-2.jpg"],
      prices: { silver: ["EGP 5,000 – 7,000", "EGP 7,000 – 9,000", "EGP 9,000 – 11,000"], plated: ["EGP 2,500 – 3,500", "EGP 3,500 – 5,000", "EGP 5,000 – 6,500"] } },
    { id: "p03", name: "Necklace 1", desc: "Paperclip chain · padlock clasp · stamped tags",
      images: ["necklace-1-1.jpg", "necklace-1-2.jpg"],
      prices: { silver: ["EGP 7,000 – 10,000", "EGP 10,000 – 13,000", "EGP 13,000 – 16,000"], plated: ["EGP 3,000 – 5,000", "EGP 5,000 – 7,000", "EGP 7,000 – 9,000"] } },
    { id: "p04", name: "Necklace 2", desc: "Double layer · apple coin · engraved bar",
      images: ["necklace-2-1.jpg", "necklace-2-2.jpg"],
      prices: { silver: ["EGP 8,000 – 11,000", "EGP 11,000 – 14,000", "EGP 14,000 – 17,000"], plated: ["EGP 3,500 – 5,500", "EGP 5,500 – 7,500", "EGP 7,500 – 9,500"] } },
    { id: "p05", name: "Necklace 3", desc: "Fine chain · linked plates · apple cutout",
      images: ["necklace-3-1.jpg", "necklace-3-2.jpg"],
      prices: { silver: ["EGP 4,000 – 5,500", "EGP 5,500 – 7,000", "EGP 7,000 – 8,500"], plated: ["EGP 2,000 – 3,000", "EGP 3,000 – 4,000", "EGP 4,000 – 5,000"] } },
    { id: "p06", name: "Earring 1",  desc: "Hammered hoop · two loose rings",
      images: ["earring-1-1.jpg", "earring-1-2.jpg"],
      prices: { silver: ["EGP 2,500 – 3,500", "EGP 3,500 – 4,500", "EGP 4,500 – 5,500"], plated: ["EGP 1,200 – 1,600", "EGP 1,600 – 2,000", "EGP 2,000 – 2,500"] } },
    { id: "p07", name: "Ear Cuff 1", desc: "Raw texture · red stones · no piercing needed",
      images: ["ear-cuff-1-1.jpg", "ear-cuff-1-2.jpg"],
      prices: { silver: ["EGP 3,000 – 4,000", "EGP 4,000 – 5,000", "EGP 5,000 – 6,000"], plated: ["EGP 1,500 – 2,000", "EGP 2,000 – 2,500", "EGP 2,500 – 3,000"] } },
    { id: "p08", name: "Ring 1",     desc: "Open band · embossed HNST MSTK · perforated edge",
      images: ["ring-1-1.jpg", "ring-1-2.jpg"],
      prices: { silver: ["EGP 2,500 – 3,500", "EGP 3,500 – 4,500", "EGP 4,500 – 5,500"], plated: ["EGP 1,200 – 1,600", "EGP 1,600 – 2,000", "EGP 2,000 – 2,500"] } },
    { id: "p09", name: "Ring 2",     desc: "Sculpted signet · engraved inside",
      images: ["ring-2-1.jpg", "ring-2-2.jpg"],
      prices: { silver: ["EGP 3,500 – 4,500", "EGP 4,500 – 5,500", "EGP 5,500 – 6,500"], plated: ["EGP 1,800 – 2,300", "EGP 2,300 – 2,800", "EGP 2,800 – 3,300"] } },
    { id: "p10", name: "Ring 3",     desc: "Crushed texture · irregular band",
      images: ["ring-3-1.jpg", "ring-3-2.jpg"],
      prices: { silver: ["EGP 3,000 – 4,000", "EGP 4,000 – 5,000", "EGP 5,000 – 6,000"], plated: ["EGP 1,500 – 2,000", "EGP 2,000 – 2,500", "EGP 2,500 – 3,000"] } },
    { id: "p11", name: "Ring 4",     desc: "Wavy band · scattered red stones",
      images: ["ring-4-1.jpg", "ring-4-2.jpg"],
      prices: { silver: ["EGP 3,000 – 4,000", "EGP 4,000 – 5,000", "EGP 5,000 – 6,000"], plated: ["EGP 1,500 – 2,000", "EGP 2,000 – 2,500", "EGP 2,500 – 3,000"] } },
    { id: "p12", name: "Ring 5",     desc: "Square band · raw finish · loose jump ring",
      images: ["ring-5-1.jpg", "ring-5-2.jpg"],
      prices: { silver: ["EGP 3,500 – 4,500", "EGP 4,500 – 5,500", "EGP 5,500 – 6,500"], plated: ["EGP 1,800 – 2,300", "EGP 2,300 – 2,800", "EGP 2,800 – 3,300"] } }
  ],

  ages: ["Under 20", "20-25", "26-30", "31-36", "37+"],
  genders: ["A woman", "A man"],
  whyNot: ["Don't like the design", "Too bold / edgy for me", "Not into the finish", "Other"]
};
