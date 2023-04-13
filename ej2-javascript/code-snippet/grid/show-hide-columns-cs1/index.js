var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var show = new ej.buttons.Button({ cssClass: 'e-flat' }, '#show');
var hide = new ej.buttons.Button({ cssClass: 'e-flat' }, '#hide');

document.getElementById('show').onclick = function() {
    grid.showColumns(['Customer ID', 'Ship Name']); //show by HeaderText
};

document.getElementById('hide').onclick = function() {
    grid.hideColumns(['Customer ID', 'Ship Name']); //hide by HeaderText
};

