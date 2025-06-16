
/*
This file handles the logic for reading the inputs, 
validating it, and dynamically creating the multiplication table. It ensures that the user inputs are 
logically correct (start values must not exceed the end values). If invalid input is detected, 
an error message is shown. If the inputs are valid, a table is generated. 
Each header labels the rows and columns
appropriately.
*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('multiplicationForm');
  const outputDiv = document.getElementById('output');
  const tableContainer = document.getElementById('tableContainer');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const startCol = parseInt(document.getElementById('startCol').value);
    const endCol = parseInt(document.getElementById('endCol').value);
    const startRow = parseInt(document.getElementById('startRow').value);
    const endRow = parseInt(document.getElementById('endRow').value);

    // Clear previous output
    outputDiv.innerHTML = '';
    tableContainer.innerHTML = '';

    // === Validation checks ===
    if (endRow < startRow && endCol < startCol) {
      outputDiv.innerHTML = `<p style="color: red; font-weight: bold;">
         ERROR: beginning value for column AND row must be greater than or equal to the end values for either
      </p>`;
      return;
    }

    if (endRow < startRow) {
      outputDiv.innerHTML = `<p style="color: red; font-weight: bold;">
        ERROR: beginning value for row must be greater than or equal to end value
      </p>`;
      return;
    }

    if (endCol < startCol) {
      outputDiv.innerHTML = `<p style="color: red; font-weight: bold;">
        ERROR: beginning value for column must be greater than or equal to end value
      </p>`;
      return;
    }

    // Display summary
    outputDiv.innerHTML = `
      <p>multiplier (row): ${startCol} to ${endCol}</p>
      <p>multiplicand (column): ${startRow} to ${endRow}</p>
    `;

    // Generate the table
    generateTable(startCol, endCol, startRow, endRow);
  });

  function generateTable(startCol, endCol, startRow, endRow) {
  let html = '<table>';

  // Top row header (column labels)
  html += '<tr><th>&times;</th>'; // Top-left corner cell
  for (let col = startCol; col <= endCol; col++) {
    html += `<th>${col}</th>`;
  }
  html += '</tr>';

  // Remaining rows
  for (let row = startRow; row <= endRow; row++) {
    html += `<tr><th>${row}</th>`; // Row label (left column)
    for (let col = startCol; col <= endCol; col++) {
      html += `<td>${row * col}</td>`;
    }
    html += '</tr>';
  }

  html += '</table>';
  tableContainer.innerHTML = html;
}
});
