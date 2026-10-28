# Soul Paint · Pilot

Informatiepagina voor studenten die meedoen aan de Soul Paint VR-pilot (26 oktober t/m 4 december 2026).

## Rooster aanpassen

Open `rooster.js`. Elke week heeft een eigen blok met als naam de datum van de maandag, bijvoorbeeld `"2026-11-02"`. Per dag vul je voor Isabelle en Thomas de tijden en plekken in:

```js
dinsdag: {
  Isabelle: [{ van: "09:00", tot: "12:30", waar: "Les in W104" }],
  Thomas: []
},
```

Een lege lijst (`[]`) betekent "afwezig". De pagina laat automatisch de huidige week zien (in het weekend al de volgende). Staat een week er nog niet in, dan zegt de pagina dat het rooster nog volgt.

## Publiceren via GitHub Pages

1. Zet deze map in een GitHub-repository (de map `Informatie/` wordt bewust niet meegenomen, zie `.gitignore`).
2. Ga op GitHub naar **Settings → Pages**.
3. Kies bij **Source** "Deploy from a branch", branch `main`, map `/ (root)`, en klik **Save**.
4. Na een minuutje staat de pagina op `https://<gebruikersnaam>.github.io/<repository>/`.

Let op: een GitHub Pages-site is openbaar, ook als iemand de link niet van jou heeft gekregen.
