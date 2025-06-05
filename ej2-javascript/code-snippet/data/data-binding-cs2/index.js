const SERVICE_URI = 'https://services.syncfusion.com/js/production/api/orders';

var grid = new ej.grids.Grid({
    dataSource: new ej.data.DataManager({ url: SERVICE_URI }),
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, type: 'number' },
        { field: 'CustomerID', width: 120, headerText: 'Customer ID', type: 'string' },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
        { field: 'ShipCity', width: 120, headerText: 'Ship City', type: 'string' },
        { field: 'ShipCountry', width: 120, headerText: 'Ship Country', type: 'string' },
    ],
    height: 315
});

grid.appendTo('#Grid');
