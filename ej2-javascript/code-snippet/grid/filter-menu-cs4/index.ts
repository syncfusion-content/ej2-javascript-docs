import { Grid, Filter, Page, ActionEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    actionBegin: actionBegin,
    actionComplete: actionComplete,
    height: 270
});     
grid.appendTo('#Grid');


function actionBegin(args: ActionEventArgs)
{
  var message=document.getElementById('message')as HTMLElement;
    if (args.requestType == 'filterBeforeOpen' && args.columnType === "number") {
        args.filterModel.customFilterOperators.numberOperator = [
        { value: "equal", text: "Equal" },
        { value: "notequal", text: "Not Equal" }];
        message.innerText ='Filter operators for number column were customized using the filterBeforeOpen action in the actionBegin event';
    }
    else{
        message.innerText= args.requestType + ' action is triggered in actionBegin event'
      }
      if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
        args.cancel=true;
        message.innerText= args.requestType + ' is not allowed for ShipCity column';
      }
}
function actionComplete(args: ActionEventArgs)
{
  var message=document.getElementById('message')as HTMLElement;
    if(args.requestType === 'filterAfterOpen') {
        message.innerText ='Applied CSS for filter dialog during filterAfterOpen action';
        args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
        args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
      }
      if(args.requestType == 'filtering'){
        message.innerText = args.requestType + ' action is triggered in actionComplete event';
      }
}