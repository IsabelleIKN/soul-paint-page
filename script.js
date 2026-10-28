(function () {
  // Weekrooster uit rooster.js in de tabel zetten
  var DAGEN = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag'];
  var MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli',
    'augustus', 'september', 'oktober', 'november', 'december'];
  var MENSEN = ['Isabelle', 'Thomas'];

  // Maandag van deze week; in het weekend al de komende week
  var nu = new Date();
  nu.setHours(0, 0, 0, 0);
  var dagNr = nu.getDay();
  var maandag = new Date(nu);
  maandag.setDate(nu.getDate() + (dagNr === 0 ? 1 : dagNr === 6 ? 2 : 1 - dagNr));
  var vrijdag = new Date(maandag);
  vrijdag.setDate(maandag.getDate() + 4);

  function sleutel(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  var titel = document.getElementById('rooster-week');
  titel.textContent = 'Week van ' + maandag.getDate() +
    (maandag.getMonth() === vrijdag.getMonth() ? '' : ' ' + MAANDEN[maandag.getMonth()]) +
    '–' + vrijdag.getDate() + ' ' + MAANDEN[vrijdag.getMonth()];

  var week = (window.ROOSTER || {})[sleutel(maandag)];
  var tabel = document.getElementById('rooster-tabel');
  if (!week) {
    tabel.hidden = true;
    document.getElementById('rooster-leeg').hidden = false;
    return;
  }

  var tbody = tabel.querySelector('tbody');
  var vandaag = dagNr >= 1 && dagNr <= 5 ? DAGEN[dagNr - 1] : null;

  DAGEN.forEach(function (dag) {
    var tr = document.createElement('tr');
    if (dag === vandaag) tr.className = 'is-today';

    var td = document.createElement('td');
    var lang = document.createElement('span');
    lang.className = 'dag-lang';
    lang.textContent = dag.charAt(0).toUpperCase() + dag.slice(1);
    var kort = document.createElement('span');
    kort.className = 'dag-kort';
    kort.textContent = lang.textContent.slice(0, 2);
    td.appendChild(lang);
    td.appendChild(kort);
    if (dag === vandaag) {
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
})();
