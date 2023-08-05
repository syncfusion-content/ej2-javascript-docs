


import { Tab } from '@syncfusion/ej2-navigations';
import { DataManager, Query, ODataV4Adaptor, ReturnOption } from '@syncfusion/ej2-data';

let itemsData: any = [];
let mapping =  { header: 'FirstName', content: 'Notes' };
const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor, crossDomain: true})
  .executeQuery(new Query().range(1, 4)).then((e: ReturnOption) => {
    let result: any = e.result;

    for(let i: number = 0; i < result.length; i++) {
      itemsData.push({ header: {text: result[i][mapping.header]}, content: result[i][mapping.content] });
    }

    let tabObj: Tab = new Tab({
      items: itemsData
    });
    tabObj.appendTo('#element');
});



