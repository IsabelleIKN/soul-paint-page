(function () {
  // Weekrooster uit rooster.js in de tabel zetten, met bladeren per week
  var DAGEN = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag'];
  var MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli',
    'augustus', 'september', 'oktober', 'november', 'december'];
  var MENSEN = ['Isabelle', 'Thomas'];
  var rooster = window.ROOSTER || {};

  function plusDagen(d, n) {
    var x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  }

  function sleutel(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  // Maandag van deze week; in het weekend al de komende week
  var nu = new Date();
  nu.setHours(0, 0, 0, 0);
  var dagNr = nu.getDay();
  var dezeWeek = plusDagen(nu, dagNr === 0 ? 1 : dagNr === 6 ? 2 : 1 - dagNr);
  var vandaag = dagNr >= 1 && dagNr <= 5 ? DAGEN[dagNr - 1] : null;

  var weken = Object.keys(rooster).sort();
  var eerste = weken[0];
  var laatste = weken[weken.length - 1];

  var titel = document.getElementById('rooster-week');
  var label = document.getElementById('week-label');
  var tabel = document.getElementById('rooster-tabel');
  var tbody = tabel.querySelector('tbody');
  var leeg = document.getElementById('rooster-leeg');
  var vorige = document.getElementById('week-vorige');
  var volgende = document.getElementById('week-volgende');
  var terug = document.getElementById('week-terug');
  var getoond = dezeWeek;

  function toon(maandag) {
    getoond = maandag;
    var vrijdag = plusDagen(maandag, 4);
    var key = sleutel(maandag);
    var isDeze = key === sleutel(dezeWeek);

    titel.textContent = 'Week van ' + maandag.getDate() +
      (maandag.getMonth() === vrijdag.getMonth() ? '' : ' ' + MAANDEN[maandag.getMonth()]) +
      '–' + vrijdag.getDate() + ' ' + MAANDEN[vrijdag.getMonth()];
    label.textContent = isDeze ? 'Deze week' : '';
    terug.hidden = isDeze;
    vorige.disabled = !eerste || key <= eerste;
    volgende.disabled = !laatste || key >= laatste;

    tbody.innerHTML = '';
    var week = rooster[key];
    tabel.hidden = !week;
    leeg.hidden = !!week;
    if (!week) return;

    DAGEN.forEach(function (dag) {
      var isVandaag = isDeze && dag === vandaag;
      var tr = document.createElement('tr');
      if (isVandaag) tr.className = 'is-today';

      var td = document.createElement('td');
      var lang = document.createElement('span');
      lang.className = 'dag-lang';
      lang.textContent = dag.charAt(0).toUpperCase() + dag.slice(1);
      var kort = document.createElement('span');
      kort.className = 'dag-kort';
      kort.textContent = lang.textContent.slice(0, 2);
      td.appendChild(lang);
      td.appendChild(kort);
      if (isVandaag) {
        var tag = document.createElement('span');
        tag.className = 'today-tag';
        tag.textContent = 'vandaag';
        td.appendChild(tag);
      }
      tr.appendChild(td);

      // Een notitie (bijv. studiedag) vervangt de kolommen van die dag
      if (week[dag] && week[dag].notitie) {
        var notitie = document.createElement('td');
        notitie.colSpan = MENSEN.length;
        notitie.className = 'dagnotitie';
        notitie.textContent = week[dag].notitie;
        tr.appendChild(notitie);
        tbody.appendChild(tr);
        return;
      }

      MENSEN.forEach(function (persoon) {
        var cel = document.createElement('td');
        var blokken = (week[dag] && week[dag][persoon]) || [];
        if (!blokken.length) {
          cel.innerHTML = '<span class="none">Afwezig</span>';
        }
        blokken.forEach(function (b) {
          var slot = document.createElement('span');
          slot.className = 'slot';
          if (b.van) {
            slot.textContent = b.van + '–' + b.tot;
            var waar = document.createElement('span');
            waar.textContent = b.waar;
            slot.appendChild(waar);
          } else {
            slot.textContent = b.waar;
          }
          cel.appendChild(slot);
        });
        tr.appendChild(cel);
      });

      tbody.appendChild(tr);
    });
  }

  vorige.addEventListener('click', function () { toon(plusDagen(getoond, -7)); });
  volgende.addEventListener('click', function () { toon(plusDagen(getoond, 7)); });
  terug.addEventListener('click', function () { toon(dezeWeek); });

  toon(dezeWeek);
})();
