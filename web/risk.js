js
(function() {
  var form = document.getElementById('risk-form');
  var resultValue = document.getElementById('risk-value');
  var resultClass = document.getElementById('risk-class');
  var resultPosition = document.getElementById('risk-position');
  var matrix = document.getElementById('risk-matrix');
  var riskCard = document.getElementById('risk-card');

  // Classi coerenti con il documento (R 1–16)
  function getRiskClass(r) {
    if (r >= 1 && r <= 2) {
      return { label: 'Rischio basso', css: 'rm-low' };
    }
    if (r >= 3 && r <= 6) {
      return { label: 'Rischio moderato / da controllare', css: 'rm-medium' };
    }
    if (r >= 8 && r <= 9) {
      return { label: 'Rischio alto / rilevante', css: 'rm-high' };
    }
    if (r >= 12 && r <= 16) {
      return { label: 'Rischio molto alto', css: 'rm-very-high' };
    }
    // valori “buchi” (es. 7,10,11) fuori dalle classi definite
    return { label: 'Non classificato', css: '' };
  }

  function clearSelection() {
    if (matrix) {
      var cells = matrix.querySelectorAll('td');
      cells.forEach(function(td) {
        td.classList.remove('rm-low', 'rm-medium', 'rm-high', 'rm-very-high', 'rm-selected');
      });
    }
    if (riskCard) {
      riskCard.classList.remove('rm-low', 'rm-medium', 'rm-high', 'rm-very-high');
    }
  }

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var p = parseInt(document.getElementById('probability').value, 10);
    var d = parseInt(document.getElementById('damage').value, 10);

    // ora il dominio è 1–4
    if (isNaN(p) || isNaN(d) || p < 1 || p > 4 || d < 1 || d > 4) {
      alert('Inserire valori interi tra 1 e 4 per P e D.');
      return;
    }

    var r = p * d;
    var rc = getRiskClass(r);

    if (resultValue) resultValue.textContent = r;
    if (resultClass) resultClass.textContent = rc.label;
    if (resultPosition) {
      resultPosition.textContent = 'Riga D = ' + d + ', Colonna P = ' + p;
    }

    clearSelection();

    if (matrix) {
      var selector = 'tbody tr[data-d="' + d + '"] td[data-p="' + p + '"]';
      var cell = matrix.querySelector(selector);
      if (cell) {
        if (rc.css) cell.classList.add(rc.css);
        cell.classList.add('rm-selected');
      }
    }

    if (riskCard && rc.css) {
      riskCard.classList.add(rc.css);
    }
  });

  // inizializza con i valori di default
  form.dispatchEvent(new Event('submit'));
})();
