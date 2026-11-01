let employees = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering', age: 29 },
  { id: 2, name: 'Bob Smith', department: 'Design', age: 35 },
  { id: 3, name: 'Charlie Kim', department: 'Product', age: 42 },
  { id: 4, name: 'Diana Lopez', department: 'Engineering', age: 31 },
  { id: 5, name: 'Ethan Brown', department: 'Marketing', age: 27 }
];

let filteredEmployees = [...employees];
let isDescending = true;

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  createTableBody(filteredEmployees);
  document.getElementById('search-input').addEventListener('input', (event) => {
    console.log('VA:', event.target.value);
    const value = event.target.value.length > 0 ? event.target.value : '';
    const reducedEmp = filteredEmployees.filter((emp) => {
      if (emp.name.toLowerCase().includes(value.toLowerCase())) {
        return true;
      } else if (String(emp.age).includes(value)) {
        return true;
      } else if (emp.department.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
    });
    createTableBody(reducedEmp);
  });
});

function createTableBody(employees) {
  const tableBody = document.getElementById('employee-table-body');
  tableBody.innerHTML = '';

  employees.forEach((emp) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.department}</td>
    `;
    tableBody.appendChild(row);
  });
}
