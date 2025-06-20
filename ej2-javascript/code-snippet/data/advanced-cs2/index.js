let template ='<tr><td>${EmployeeID }</td><td>${Employees}</td><td>${Designation}</td><td>${Location}</td><td>${Status}</td></tr>';
let table = document.getElementById('datatable');
let compiledFunction = ej.base.compile(template);

const dataManager = new ej.data.DataManager({
  url: "https://services.syncfusion.com/js/production/api/UrlDataSource",
  adaptor: new ej.data.UrlAdaptor(),
  crossDomain: true
});

const btnLoad = document.getElementById("submit");
const inputFrom = document.getElementById("pageIndex");
const inputTo = document.getElementById("pageSize");

// Initial load: page 1, size 5.
let query = new ej.data.Query().page(1, 5);

function renderTable(data) {
  data.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
}

// Execute initial query.
dataManager.executeQuery(query).then((e) => {
  renderTable(e.result);
}).catch(console.error);

// Load data on demand button click.
btnLoad.addEventListener("click", () => {
  const pageIndex = parseInt(inputFrom.value);
  const pageSize = parseInt(inputTo.value);
  if (!isNaN(pageIndex) && !isNaN(pageSize) && pageIndex > 0 && pageSize > 0) {
    const tempQuery = new ej.data.Query().page(pageIndex, pageSize);
    dataManager.executeQuery(tempQuery).then((e) => {
      renderTable(e.result);
    }).catch(console.error);
  }
});
