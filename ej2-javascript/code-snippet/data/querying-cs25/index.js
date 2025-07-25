var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
var compiledFunction = ej.base.compile(template);
var SERVICE_URI =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
var table1 = (document.getElementById('table1'));
var distinctTable = (document.getElementById('distinct'));

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(new ej.data.Query().take(10).requiresCount().aggregate('average', 'Freight'))
    .then((e) => {
        var fullData = e.result;
        (fullData).forEach((data) => {
            table1.appendChild(compiledFunction(data)[0]);
        });
        var distinctData = ej.data.DataUtil.distinct(fullData, "EmployeeID", true);

        // Render distinct rows in second table.
        distinctData.forEach((item) => {
          distinctTable.appendChild(compiledFunction(item)[0]);
        });
    });