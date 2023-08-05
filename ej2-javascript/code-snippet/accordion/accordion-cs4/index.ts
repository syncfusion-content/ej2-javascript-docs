


import { Accordion } from '@syncfusion/ej2-navigations';
import { DataManager, Query, ODataV4Adaptor, ReturnOption } from '@syncfusion/ej2-data';

let itemsData: any = [];
let mapping =  { header: 'FirstName', content: 'Notes' };
const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor, crossDomain: true})
  .executeQuery(new Query().range(1, 4)).then((e: ReturnOption) => {
    let result: any = e.result;

    for(let i: number = 0; i < result.length; i++) {
      itemsData.push({ header: result[i][mapping.header], content: result[i][mapping.content] });
    }

    let accordion: Accordion = new Accordion({
      items: itemsData
    });
    accordion.appendTo('#element');
});



