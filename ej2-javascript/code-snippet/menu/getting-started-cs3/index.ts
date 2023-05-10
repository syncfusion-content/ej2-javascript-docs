

import { Menu, FieldSettingsModel } from '@syncfusion/ej2-navigations';
import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const SERVICE_URI: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/';

// Menu fields definition.
let menuFields: FieldSettingsModel = {
    text: ['FirstName','ShipName'],
    children: ['Orders']
};

// Getting remote data using DataManager.
new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor, crossDomain: true })
.executeQuery(
new Query().from('Employees').take(5).hierarchy(
    new Query()
    .foreignKey('EmployeeID')
    .from('Orders').take(13),
    function() {
        return [1,2,3,4,5]
    }
))
.then((e: ReturnOption) => {
    //Initialize Menu component.
    new Menu({ items: ((<Object[]>e.result) as { [key: string]: Object }[]), fields: menuFields  }, '#menu');
});


