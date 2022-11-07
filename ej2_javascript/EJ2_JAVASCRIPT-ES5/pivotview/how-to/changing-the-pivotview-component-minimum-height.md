# Changing the Pivot Table component's minimum height

The `minHeight` property allows you to change the minimum height for the pivot table control. For the pivot table control, the default minimum height is **300px**.

{% tab template="pivot-table/pivot-table", es5Template="minimum-height", sourceFiles="index.ts,codebehind.html" %}

```typescript
import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
           dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: [],
        },
        height: 200
});
pivotTableObj.minHeight = 200;
pivotTableObj.appendTo('#PivotTable');

```

{% endtab %}