ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    height: 265,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', edit: { params: { showClearButton: true } }, headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', editType: 'dropdownedit', width: 150 }
    ]
});
grid.appendTo('#Grid');