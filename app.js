const tableBody = document.querySelector('tbody');

function addRow() {
  const rowCount = tableBody.rows.length;
  const newRow = tableBody.insertRow(rowCount);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.innerHTML = rowCount + 1;
  cell2.innerHTML = '<input type="text" placeholder="Enter task name">';
  cell3.innerHTML = '<input type="text" placeholder="Enter task description">';
  cell4.innerHTML = '<input type="checkbox">';
}

function deleteRow() {
  const rowCount = tableBody.rows.length;
  if (rowCount > 1) {
    tableBody.deleteRow(rowCount - 1);
  }
}
