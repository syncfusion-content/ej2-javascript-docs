ej.base.enableRipple(true);

var data = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true,
});
var query = new ej.data.Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
var query1 = new ej.data.Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);

var treeObj = new ej.navigations.TreeView({
    fields: { dataSource: data, query: query, id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID', tooltip: 'Title',
        child: { dataSource: data, query: query1, id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }
    }
});
treeObj.appendTo('#tree');

