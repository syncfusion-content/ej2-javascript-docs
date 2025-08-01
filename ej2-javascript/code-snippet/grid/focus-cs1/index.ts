

import { Grid, Page, Edit, Toolbar, RecordDoubleClickEventArgs, EditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, Edit);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal" },
  recordDoubleClick: recordDoubleClick,
  actionComplete: actionComplete,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 120, type: 'number' },
    { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true, minLength: 5 }, width: 140, type: 'string' },
    { field: 'Freight', headerText: 'Freight', editType: "numericedit", textAlign: 'Right', width: 120, format: 'C2', validationRules: { required: true, min: 1, max: 1000 } },
    {
      field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, editType: "datetimepickeredit",
      format: { type: "dateTime", format: "M/d/y hh:mm a" },
    },
    {
      field: "ShipCountry", headerText: "Ship Country", editType: "dropdownedit", width: 150, edit: { params: { popupHeight: "300px" } }
    }
  ],
  height: 220
});
grid.appendTo('#Grid');

let fieldName;

function recordDoubleClick(e: RecordDoubleClickEventArgs) {
  let clickedColumnIndex = e.cell.getAttribute('aria-colindex')-1;
  fieldName = this.columnModel[parseInt(clickedColumnIndex)].field;
}

function actionComplete(e: EditEventArgs) {
  if (e.requestType === "beginEdit") {
    // focus the column
    ((e.form as HTMLFormElement).elements[grid.element.getAttribute("id") + fieldName] as HTMLInputElement).focus();
  }
}