# Exporting Hierarchy Grid

The grid has an option to export the hierarchy grid to excel document. By default, it will use `Expanded` as hierarchyExportMode. you can change the exporting option by using the `ExcelExportProperties.hierarchyExportMode` property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the visible child grids in expanded state. |
| All      | Exports the all the child grids in expanded state. |
| None     | Exports all child grids in collapse state. |

{% tab template="grid/hierarchy-print", es5Template="hierarchyexcelexport" %}

```typescript
import { Grid, DetailRow, Toolbar, ExcelExport, ExcelExportProperties } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(DetailRow, Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
    },
    toolbarClick: toolbarClick
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_excelexport') {
        let exportProperties: ExcelExportProperties = {
           hierarchyExportMode: "Expanded"
        };
        grid.excelExport(exportProperties);
    }
}

```

{% endtab %}

## Limitations

* Microsoft Excel permits up to seven nested levels in outlines. So that in the grid we can able to provide only up to seven nested level
  and if it exceeds more than seven levels then the document will be exported without outline option.
  Please refer the [Microsoft Limitation](https://docs.microsoft.com/en-us/sql/reporting-services/report-builder/exporting-to-microsoft-excel-report-builder-and-ssrs?view=sql-server-2017#ExcelLimitations)