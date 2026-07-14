ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ColumnChooser);

var data = [
    { OrderID: 10001, CustomerName: 'John Miller', OrderDate: new Date('2025-01-15'), Freight: 45.50, ShippedDate: new Date('2025-01-20'), ShipCountry: 'USA' },
    { OrderID: 10002, CustomerName: 'Sarah Johnson', OrderDate: new Date('2025-02-03'), Freight: 62.75, ShippedDate: new Date('2025-02-08'), ShipCountry: 'Canada' },
    { OrderID: 10003, CustomerName: 'Michael Davis', OrderDate: new Date('2025-02-18'), Freight: 38.25, ShippedDate: new Date('2025-02-23'), ShipCountry: 'UK' },
    { OrderID: 10004, CustomerName: 'Emily Brown', OrderDate: new Date('2025-03-05'), Freight: 55.00, ShippedDate: new Date('2025-03-10'), ShipCountry: 'Germany' },
    { OrderID: 10005, CustomerName: 'James Wilson', OrderDate: new Date('2025-03-22'), Freight: 41.30, ShippedDate: new Date('2025-03-28'), ShipCountry: 'France' }
];


var grid = new ej.grids.Grid({
    dataSource: data,
    showColumnChooser: true,
    columnChooserSettings: { mode: 'Immediate'},
    toolbar: ['ColumnChooser'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', showInColumnChooser: false },
        { field: 'CustomerName', headerText: 'Customer Name', width: 150},
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 235
});

grid.appendTo('#Grid');


