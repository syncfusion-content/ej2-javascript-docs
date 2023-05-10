ej.base.enableRipple(true);

var SERVICE_URI = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/';

var menuFields = {
    text: ['FirstName','ShipName'],
    children: ['Orders']
};

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataAdaptor, crossDomain: true })
.executeQuery(
new ej.data.Query().from('Employees').take(5).hierarchy(
    new ej.data.Query()
    .foreignKey('EmployeeID')
    .from('Orders').take(13),
    function() {
        return [1,2,3,4,5]
    }
))
.then((e) => {
    new ej.navigations.Menu({ items: e.result, fields: menuFields  }, '#menu');
});

