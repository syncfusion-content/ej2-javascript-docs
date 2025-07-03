
let template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction = ej.base.compile(template);

let table =document.getElementById('datatable');
let datamanager = new ej.data.DataManager({ json: data.slice(0, 4) });

datamanager.executeQuery(new ej.data.Query())
    .then((e) => {
        (e.result).forEach((data) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
var changes = {
    changedRecords: [], addedRecords: [], deletedRecords: []
};

document.getElementById('added').onclick = () => {
    let orderid = document.getElementById('addOrderID');
    let cusid = document.getElementById('addCustomerID');
   let empid = document.getElementById('addEmployeeID');
    changes.addedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
};

document.getElementById('changed').onclick = () => {
    let orderid = document.getElementById('updateOrderID');
    let cusid = document.getElementById('updateCustomerID');
   let empid = document.getElementById('updateEmployeeID');
    changes.changedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
};

document.getElementById('deleted').onclick = () => {
   let orderid = document.getElementById('deleteOrderID');
    changes.deletedRecords.push({
        OrderID: +orderid.value
    });
};

document.getElementById('save').onclick = () => {
    datamanager.saveChanges(changes, 'OrderID');
    changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
    datamanager.executeQuery(new ej.data.Query())
        .then((e) => {
            table.tBodies[0].innerHTML = '';
            (e.result).forEach((data) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};