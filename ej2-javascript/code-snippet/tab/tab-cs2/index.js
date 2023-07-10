ej.base.enableRipple(true);

var itemsData = [];
var mapping =  { header: 'FirstName', content: 'Notes' };

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataAdaptor})
    .executeQuery(new ej.data.Query().range(1, 4)).then((e) => {
        var result = e.result;

        for(var i = 0; i < result.length; i++) {
            itemsData.push({ header: {text: result[i][mapping.header]}, content: result[i][mapping.content] });
        }

        //Initialize Tab component
        var tabObj = new ej.navigations.Tab({
            items: itemsData
        });

        //Render initialized Tab component
        tabObj.appendTo('#element');
    });

