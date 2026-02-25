(function () {
  function drawRowspanLines(scopeSelector) {
    const tables = document.querySelectorAll(scopeSelector || 'table.fix-rowspan-lines');
    tables.forEach(function (table) {
      const color = '#d0d7de'; // visible line colour matching your borders

      table.querySelectorAll('td[rowspan], th[rowspan]').forEach(function (cell) {
        const n = parseInt(cell.getAttribute('rowspan'), 10);
        if (!n || n < 2) return;

        // Clean old lines
        cell.querySelectorAll('.rowspan-line').forEach(l => l.remove());

        // Ensure positioning context
        const cs = getComputedStyle(cell);
        if (cs.position === 'static') cell.style.position = 'relative';

        const row = cell.closest('tr');
        const rows = Array.from(table.querySelectorAll('tr'));
        const start = rows.indexOf(row);
        if (start < 0) return;

        const cellTop = cell.getBoundingClientRect().top + window.scrollY;

        for (let i = 1; i < n; i++) {
          const boundaryRow = rows[start + i];
          if (!boundaryRow) break;

          const boundaryTop = boundaryRow.getBoundingClientRect().top + window.scrollY;
          const offsetY = boundaryTop - cellTop;

          const line = document.createElement('div');
          line.className = 'rowspan-line';
          line.style.position = 'absolute';
          line.style.left = '0';
          line.style.right = '0';
          line.style.height = '0';
          line.style.top = offsetY + 'px';
          line.style.borderTop = '1px solid ' + color;
          line.style.pointerEvents = 'none';
          line.style.zIndex = '2';

          cell.appendChild(line);
        }
      });
    });
  }

  // Run after DOM is ready
  function ready(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
  ready(drawRowspanLines);
  // Run after full load (fonts/layout settle), and on resize
  window.addEventListener('load', drawRowspanLines);
  let t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(drawRowspanLines, 150);
  });
})();
