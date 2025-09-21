let employees = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering', age: 29 },
  { id: 2, name: 'Bob Smith', department: 'Design', age: 35 },
  { id: 3, name: 'Charlie Kim', department: 'Product', age: 42 },
  { id: 4, name: 'Diana Lopez', department: 'Engineering', age: 31 },
  { id: 5, name: 'Ethan Brown', department: 'Marketing', age: 27 }
];
let filteredEmployees = [...employees];
let isDescending = true; // toggle for sorting order
let sortType = '';
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    console.log(`Searching for: ${query}`);
  });
  // add employees as rows to the table
  createTableBody(employees);
});
function sortTable(type) {
  console.log(`Sorting by: ${type}`);
  if (sortType !== type) {
    isDescending = true;
    sortType = type;
  }
  const sortedEmployees = employees.sort((a, b) => {
    if (typeof a[type] === 'string') {
      return isDescending ? a[type].localeCompare(b[type]) : b[type].localeCompare(a[type]);
    }
    return isDescending ? a[type] - b[type] : b[type] - a[type];
  });
  isDescending = !isDescending; // toggle for next sort

  createTableBody(sortedEmployees);
}

function createTableBody(currEmployees) {
  const tBody = document.getElementById('employee-table-body');
  tBody.innerHTML = '';
  currEmployees.forEach((emp) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.department}</td>
      <td>${emp.age}</td>
      `;
    tBody.appendChild(row);
  });
}
