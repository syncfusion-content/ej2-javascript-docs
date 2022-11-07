# Drill-through grid's cell edit type

Using the [`drillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview#drillthrough) event in the pivot table, you can define the edit type of a particular column in the grid present inside the drill-through dialog. To do so, check the column name in the [`drillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview#drillthrough) event and then specify the edit type of that column using the [`gridColumns.editType`](https://ej2.syncfusion.com/documentation/api/grid/column/#edittype) event argument.

> The [`gridColumns.editType`](https://ej2.syncfusion.com/documentation/api/grid/column/#edittype) property must be set based on the column's data type. For example, the string data type will not be applicable for the numeric text box edit type.

* [`NumericTextBox`](https://ej2.syncfusion.com/documentation/numerictextbox/) control for integer, double, and decimal data types.
* [`TextBox`](https://ej2.syncfusion.com/documentation/textbox/) control for string data type.
* [`DropDownList`](https://ej2.syncfusion.com/documentation/drop-down-list/) control to show all unique values related to that field.
* [`CheckBox`](https://ej2.syncfusion.com/documentation/check-box/) control for boolean data type.
* [`DatePicker`](https://ej2.syncfusion.com/documentation/datepicker/) control for date data type.
* [`DateTimePicker`](https://ej2.syncfusion.com/documentation/datetimepicker/) control for date time data type.

In the below example, the data type of the `Country` column is set to `DropDownList`.

{% tab template="pivot-table/pivot-table", es5Template="editType", sourceFiles="index.ts,index.html" %}

```typescript
import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 350,
    drillThrough(args) {
        for (var i = 0; i < args.gridColumns.length; i++) {
            if (args.gridColumns[i].field === 'Country') {
                args.gridColumns[i].editType = 'dropdownedit';
                //args.gridColumns[i].editType = 'numericedit';
                //args.gridColumns[i].editType = 'textedit';
                //args.gridColumns[i].editType = 'booleanedit';
                //args.gridColumns[i].editType = 'datepickeredit';
                //args.gridColumns[i].editType = 'datetimepickeredit';
            }
        }
    },
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' }
});
pivotTableObj.appendTo('#PivotTable');

```

{% endtab %}