<script>
  (function() {
    var form = document.getElementById('risk-form');
    var resultValue = document.getElementById('risk-value');
    var resultClass = document.getElementById('risk-class');
    var resultPosition = document.getElementById('risk-position');
    var matrix = document.getElementById('risk-matrix');

    function getRiskClass(r) {
      if (r <= 6) return { label: 'Basso', css: 'rm-low' };
      if (r <= 12) return { label: 'Medio', css: 'rm-medium' };
      if (r <= 19) return { label: 'Alto', css: 'rm-high' };
      return { label: 'Molto alto', css: 'rm-very-high' };
    }

    function clearSelection() {
      var cells = matrix.querySelectorAll('td');
      cells.forEach(function(td) {
        td.classList.remove('rm-low', 'rm-medium', 'rm-high', 'rm-very-high', 'rm-selected');
      });
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var p = parseInt(document.getElementById('probability').value, 10);
      var d = parseInt(document.getElementById('damage').value, 10);

      if (isNaN(p) || isNaN(d) || p < 1 || p > 5 || d < 1 || d > 5) {
        alert('Inserire valori interi tra 1 e 5 per P e D.');
        return;
      }

      var r = p * d;
      var rc = getRiskClass(r);

      resultValue.textContent = r;
      resultClass.textContent = rc.label;
      resultPosition.textContent = 'Riga D = ' + d + ', Colonna P = ' + p;

      clearSelection();

      var selector = 'tbody tr[data-d="' + d + '"] td[data-p="' + p + '"]';
      var cell = matrix.querySelector(selector);
      if (cell) {
        cell.classList.add(rc.css, 'rm-selected');
      }
    });

    // inizializza con i valori di default
    if (form) {
      form.dispatchEvent(new Event('submit'));
    }
  })();
</script>