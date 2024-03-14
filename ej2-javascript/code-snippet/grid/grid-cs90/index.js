ej.grids.Grid.Inject(ej.grids.DetailRow);
var orderData = data;
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'LastName', headerText: 'LastName', width: 100 },
        { field: 'City', headerText: 'City', width: 100 }
    ],
    childGrid: {
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
    },
    detailDataBound: function(args){
        var empIdValue = args.data['EmployeeID'];
        var childGridData = new ej.data.DataManager(data).executeLocal(
            new ej.data.Query().where('EmployeeID', 'equal', empIdValue, true)
        );
        args.childGrid.query = new ej.data.Query();
        args.childGrid.dataSource = childGridData;
        }   
    });
grid.appendTo('#Grid');