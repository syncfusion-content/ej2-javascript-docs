var itemsData = [];
var mapping =  { header: 'FirstName', content: 'Notes' };
const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor, crossDomain: true})
    .executeQuery(new ej.data.Query().range(1, 4)).then(function (e) {

    var result = e.result;

    for(var i = 0; i < result.length; i++) {
        itemsData.push({ header: result[i][mapping.header], content: result[i][mapping.content] });
    }

    //Initialize Accordion component
    var accordion = new ej.navigations.Accordion({
        items: itemsData
    });

    //Render initialized Accordion component
    accordion.appendTo('#element');
});

