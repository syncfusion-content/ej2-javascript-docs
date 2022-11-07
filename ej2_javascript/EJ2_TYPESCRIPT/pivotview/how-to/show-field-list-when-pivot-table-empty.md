# Show field list when pivot table is empty

When there are no fields in a pivot table's row, column, value, and filter axes, a field list can still be displayed. To do so, use the [`dataBound`](https://ej2.syncfusion.com/documentation/api/pivotview#databound) event and call the `onShowFieldList` method as shown below.

{% tab template="pivot-table/pivot-table", es5Template="show-field-list-table-empty", sourceFiles="index.ts,index.html" %}

```typescript
import { PivotView, IDataSet, FieldList } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
    },
    showFieldList: true,
    dataBound: (): void => {
        if (pivotTableObj && pivotTableObj.dataSourceSettings.values.length === 0) {
            (pivotTableObj.pivotFieldListModule.dialogRenderer as any).onShowFieldList();
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

```

{% endtab %}