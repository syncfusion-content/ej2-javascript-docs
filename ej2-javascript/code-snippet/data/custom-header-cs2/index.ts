import { DataManager, Query, ReturnOption, ODataV4Adaptor, RequestOptions } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string =
  '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string =
  'https://services.syncfusion.com/js/production/api/Orders';

let table: HTMLElement = <HTMLElement>document.getElementById('datatable');

class CustomODataAdaptor extends ODataV4Adaptor {
  public beforeSend(
    dm: DataManager,
    request: Request,
    settings: RequestOptions
  ): void {
    request.headers.set('syncfusion', 'true');
    super.beforeSend(dm, request, settings);
  }
}
new DataManager({
  url: SERVICE_URI,
  adaptor: new CustomODataAdaptor(),
})
  .executeQuery(new Query())
  .then((e: ReturnOption) => {
    (<Object[]>e.result).forEach((data: Object) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });