var updateTemplate = function(){
    numeric = new ej.inputs.NumericTextBox({
        min: 1,
        max: 3,
        step: 1,
        width: 200,
        format: '###.##',
        change: (args) => {
            var value = args.value;
            grid.goToPage(value);
        }
    });
    numeric.appendTo('#currentPage');
  };
  
  var flag = true;
  ej.grids.Grid.Inject(ej.grids.Page);
  var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    pageSettings: { template: '#template', pageSize: 5 },
    dataBound() {
        if (flag) {
            flag = false;
            updateTemplate();
        }
    },
    actionComplete(args){
        if (args.requestType === 'paging') {
            updateTemplate();
        }
    }
  });
  grid.appendTo('#Grid');