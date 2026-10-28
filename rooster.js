// WEEKROOSTER — wanneer zijn Isabelle en Thomas waar?
//
// Per week een blok, met als naam de datum van de maandag ("jjjj-mm-dd").
// De pagina laat automatisch de huidige week zien (in het weekend al de volgende).
// Per dag per persoon een lijstje: { van, tot, waar }. Afwezig? Laat de lijst leeg: []
// Staat een week er niet in, dan meldt de pagina dat het rooster nog volgt.

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
  }

  // Week 2: 2–6 november — nog invullen, bijvoorbeeld:
  // ,"2026-11-02": { maandag: { Isabelle: [...], Thomas: [...] }, ... }

};
