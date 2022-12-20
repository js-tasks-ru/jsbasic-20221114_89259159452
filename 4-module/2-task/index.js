function makeDiagonalRed(table) {
    const tr = Array.from(table.rows);
    tr.map((td, i) => td.cells[i].style.background = 'red');
}
