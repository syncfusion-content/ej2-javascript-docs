ej.grids.Grid.Inject(ej.grids.Filter);

var filtertype = [
    { id: 'CheckBox', type: 'CheckBox' },
    { id: 'Excel', type: 'Excel' }
];

var grid = new ej.grids.Grid({
    dataSource: ordersTrackData,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox', mode: 'Immediate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerName', headerText: 'Customer Name', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd', textAlign: 'Right' },
        { field: 'Product', headerText: 'Product', width: 80 },
        { field: 'Status', headerText: 'Status', width: 80 },
        { field: 'Amount', headerText: 'Amount', textAlign: 'Right', width: 80 }
    ]
});
grid.appendTo('#Grid');

let dropDownFilterType = new ej.dropdowns.DropDownList({
    dataSource: filtertype,
    width: '150px',
    fields: { text: 'type', value: 'id' },
    value: 'CheckBox',
    change: (e) => {
        let dropSelectedValue = e.value;
        grid.filterSettings.type = dropSelectedValue;
        grid.filterSettings.mode = 'Immediate';
        grid.clearFiltering();
    }
});
dropDownFilterType.appendTo('#filterType');