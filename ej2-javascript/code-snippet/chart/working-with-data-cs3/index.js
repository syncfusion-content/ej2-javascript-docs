var query = new ej.data.Query() 

var data = new ej.data.DataManager({ 
  url: 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/Orders/?$top=7', 
    adaptor: new ej.data.ODataAdaptor() 
}); 


var chart = new ej.charts.Chart({ 
        //Initializing Primary X Axis 
        primaryXAxis: { 
            valueType: 'Category', 
        }, 
        //Initializing Chart Sample 
        series: [ 
            { 
                type: 'Column', 
                dataSource: data, 
                xName: 'CustomerID', yName: 'Freight', query: query, 
            } 
        ], 
    }); 

