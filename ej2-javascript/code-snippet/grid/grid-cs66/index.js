ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {type:'Menu'},
    height: 273,
        columns: [
            {
                field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', filter: {
                    ui: {
                        create: function(args){
                            var flValInput = new ej.base.createElement('input', { className: 'flm-input' });
                            args.target.appendChild(flValInput);
                            this.dropInstance = new ej.dropdowns.DropDownList({
                                dataSource: new ej.data.DataManager(data),
                                fields: { text: 'OrderID', value: 'OrderID' },
                                placeholder: 'Select a value',
                                popupHeight: '200px'
                            });
                            this.dropInstance.appendTo(flValInput);
                        },
                        write: function(args){
                            this.dropInstance.value = args.filteredValue;
                        },
                        read: function(args) {
                            args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);

                        }
                    }
                }
            },
            { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 100 }
        ]
});
grid.appendTo('#Grid');