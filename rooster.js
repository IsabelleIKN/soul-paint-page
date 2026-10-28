// WEEKROOSTER — wanneer zijn Isabelle en Thomas waar?
//
// Per week een blok, met als naam de datum van de maandag ("jjjj-mm-dd").
// De pagina laat automatisch de huidige week zien (in het weekend al de volgende).
// Per dag per persoon een lijstje: { van, tot, waar }. Tijd onbekend? Laat van/tot weg.
// Afwezig? Laat de lijst leeg: []
// Bijzondere dag (studiedag e.d.)? Gebruik { notitie: "..." } in plaats van de namen.
// Staat een week er niet in, dan meldt de pagina dat het rooster nog volgt.

// Vaste rooster vanaf 9 november
var VANAF_9_NOV = {
  maandag: {
    Isabelle: [
      { van: "10:45", tot: "14:45", waar: "Les in W303" },
      { van: "15:00", tot: "16:30", waar: "Teamoverleg" }
    ],
    Thomas: [
      { van: "09:00", tot: "10:00", waar: "Les in W201" },
      { van: "10:45", tot: "12:45", waar: "Les in W305" },
      { van: "13:15", tot: "14:15", waar: "Les in W406" },
      { van: "15:00", tot: "16:30", waar: "Teamoverleg" }
    ]
  },
  dinsdag: {
    Isabelle: [],
    Thomas: [
      { van: "09:00", tot: "11:45", waar: "Les in W305" },
      { van: "13:15", tot: "16:00", waar: "Les in W305" },
      { van: "16:00", tot: "17:30", waar: "SLB-gesprekken" }
    ]
  },
  woensdag: {
    Isabelle: [
      { van: "09:00", tot: "11:15", waar: "Les in W301" },
      { van: "12:45", tot: "16:30", waar: "Les in W303" }
    ],
    Thomas: [
      { van: "09:30", tot: "16:30", waar: "Les in W305" }
    ]
  },
  donderdag: {
    Isabelle: [],
    Thomas: [
      { van: "09:30", tot: "16:30", waar: "Les in W305" }
    ]
  },
  vrijdag: {
    Isabelle: [],
    Thomas: []
  }
};

window.ROOSTER = {

  // Week 1: 26–30 oktober
  "2026-10-26": {
    maandag: {
      Isabelle: [
        { van: "09:00", tot: "12:45", waar: "Les in W104" },
        { van: "15:00", tot: "16:30", waar: "Teamoverleg" }
      ],
      Thomas: [
        { van: "09:30", tot: "12:45", waar: "Les in W303" },
        { van: "13:15", tot: "14:45", waar: "SLB-gesprekken" },
        { van: "15:00", tot: "16:30", waar: "Teamoverleg" }
      ]
    },
    dinsdag: {
      Isabelle: [],
      Thomas: [
        { van: "08:30", tot: "12:45", waar: "Les in W403" },
        { van: "13:15", tot: "14:15", waar: "Les in W201" }
      ]
    },
    woensdag: {
      Isabelle: [
        { van: "09:00", tot: "12:15", waar: "Les in W401" },
        { van: "13:45", tot: "14:45", waar: "Les in W401" }
      ],
      Thomas: [
        { van: "11:45", tot: "15:30", waar: "Les in W205" }
      ]
    },
    donderdag: {
      Isabelle: [],
      Thomas: [
        { van: "09:00", tot: "15:30", waar: "Les in W205" }
      ]
    },
    vrijdag: {
      Isabelle: [
        { van: "11:15", tot: "14:15", waar: "Les in W301" }
      ],
      Thomas: []
    }
  },

  // Week 2: 2–6 november (aparte week)
  "2026-11-02": {
    maandag: { notitie: "Studiedag docenten. Studenten zijn vrij." },
    dinsdag: {
      Isabelle: [],
      Thomas: [
        { van: "10:00", tot: "15:00", waar: "In W303" }
      ]
    },
    woensdag: {
      Isabelle: [
        { van: "10:00", tot: "15:00", waar: "In W305" }
      ],
      Thomas: []
    },
    donderdag: {
      Isabelle: [],
      Thomas: [
        { van: "10:00", tot: "15:00", waar: "In W303" }
      ]
    },
    vrijdag: { notitie: "Studenten zijn vrij. Isabelle is in de teamkamer." }
  },

  // Week 3 t/m 6: vaste rooster. Wijkt een week af? Vervang VANAF_9_NOV door een eigen blok.
  "2026-11-09": VANAF_9_NOV,
  "2026-11-16": VANAF_9_NOV,
  "2026-11-23": VANAF_9_NOV,
  "2026-11-30": VANAF_9_NOV

};
