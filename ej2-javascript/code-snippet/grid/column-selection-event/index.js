var grid = new ej.grids.Grid({
    dataSource: data,
    columnSelected: columnSelected,
    columnSelecting: columnSelecting,
    columnDeselected: columnDeselected,
    columnDeselecting: columnDeselecting,
    selectionSettings: { allowColumnSelection: true },
    pageSettings: { pageSize: 8 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2' }
    ],
    height: 315
});
grid.appendTo('#Grid');

var message = document.getElementById('message');

function columnSelected(args) {
    message.textContent = `Trigger columnSelected`;
    args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';
}

function columnSelecting(args) {
    message.textContent = `Trigger columnSelecting`;
    if (args.column.field == "CustomerID")
        args.cancel = true;
}

function columnDeselected(args) {
    message.textContent = `Trigger columnDeselected`;
    args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
}

function columnDeselecting(args) {
    message.textContent = `Triggercolumn Deselecting`;
    if (args.column.field == "Freight")
        args.cancel = true;
}