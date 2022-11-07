# Add to Persist

## Persist the column template, header template and header Text

By default, the Grid properties such as column template, header text, header template, column formatter, and value accessor will not persist when [enablePersistence](../../api/grid/#enablepersistence) is set to true. Because the column template and header text can be customized at the application level.

If you wish to restore all these column properties, then you can achieve it by cloning the grid’s columns property using JavaScript Object’s assign method and storing this along with the persist data manually. While restoring the settings, this column object must be assigned to the grid’s columns property to restore the column settings as demonstrated in the following sample.

{% tab template="grid/column-persist", es5Template="column-persist" %}

```typescript

import { Grid, Page, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
    allowFiltering: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, headerTemplate: '#customertemplate' },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150, template: '#template'},
    ],
    height: 230
});
grid.appendTo('#Grid');

let savedProperties: any;
document.getElementById('restore').onclick = () => {
    savedProperties = JSON.parse(grid.getPersistData());
    var gridColumnsState = Object.assign([], grid.getColumns());
    savedProperties.columns.forEach((col: {
        field: any;
        headerText: any;
        template: any;
        headerTemplate: any;
    }) => {
        let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
        let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
        let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
        col.headerText = 'Text Changed';
        col.template = colTemplate;
        col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your wants.
    }
  );
    console.log(savedProperties);
    grid.setProperties(savedProperties);
};

```

{% endtab %}