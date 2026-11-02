/* Original: /Users/roger/Sites/frontend-projects/vanillaHtmlCss/employeeSearch/sandboxEmpSearch.js | https://github.com/rogerprz/frontend-projects/blob/main/vanillaHtmlCss/employeeSearch/sandboxEmpSearch.js */
let employees = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering', age: 29 },
  { id: 2, name: 'Bob Smith', department: 'Design', age: 35 },
  { id: 3, name: 'Charlie Kim', department: 'Product', age: 42 },
  { id: 4, name: 'Diana Lopez', department: 'Engineering', age: 31 },
  { id: 5, name: 'Ethan Brown', department: 'Marketing', age: 27 }
];

let filteredEmployees = [...employees];
let isDescending = true;
let sortType = '';

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  createTableBody(filteredEmployees);

  const headers = document.querySelectorAll('th');
  headers.forEach((th) => {
    console.log(th.innerText, th.dataset.key);
    th.addEventListener('click', () => sortTable(th.dataset.key));
    th.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        sortTable(th.dataset.key);
      }
    });
    th.setAttribute('tabindex', '0');
    th.setAttribute('aria-sort', 'none');
  });
  document.getElementById('search-input').addEventListener('input', (event) => {
    const value = event.target.value.length > 0 ? event.target.value : '';
    const reducedEmp = filterEmployees(value);
    createTableBody(reducedEmp);
  });
});

function sortTable(type) {
  if (sortType !== type) {
    isDescending = true;
    sortType = type;
  }
  console.log(`Sorting by: ${type} - ${isDescending ? 'descending' : 'ascending'}`);
  filteredEmployees = [...filteredEmployees].sort((a, b) => {
    if (typeof a[type] === 'string') {
      return isDescending ? a[type].localeCompare(b[type]) : b[type].localeCompare(a[type]);
    }
    return isDescending ? a[type] - b[type] : b[type] - a[type];
  });
  isDescending = !isDescending; // toggle for next sort
  updateAriaSort(type, isDescending);
  createTableBody(filteredEmployees);
}

function filterEmployees(value) {
  return filteredEmployees.filter((emp) => {
    if (emp.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    } else if (String(emp.age).includes(value)) {
      return true;
    } else if (emp.department.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }
  });
}

function updateAriaSort(activeKey, isDescending) {
  const headers = document.querySelectorAll('#employee-table thead th');
  headers.forEach((th) => {
    const key = th.dataset.key;
    if (key === activeKey) {
      th.setAttribute('aria-sort', isDescending ? 'ascending' : 'descending');
    } else {
      th.setAttribute('aria-sort', 'none');
    }
  });
}

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
