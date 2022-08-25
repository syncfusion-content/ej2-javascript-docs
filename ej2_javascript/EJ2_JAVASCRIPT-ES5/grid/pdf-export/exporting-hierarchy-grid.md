# Exporting Hierarchy Grid

The grid have an option to export the hierarchy grid to pdf document. By default, grid will exports the master grid with expanded child grids alone. you can change the exporting option by using the `PdfExportProperties.hierarchyExportMode` property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids. |
| All      | Exports the master grid with all the child grids. |
| None     | Exports the master grid alone. |

{% tab template="grid/hierarchy-print", es5Template="hierarchypdfexport" %}

```typescript
import { Grid, DetailRow, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(DetailRow, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    toolbar: ['PdfExport'],
    allowPdfExport: true,
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
    if (args['item'].id === 'Grid_pdfexport') {
        let exportProperties: PdfExportProperties = {
           hierarchyExportMode: "Expanded"
        };
        grid.pdfExport(exportProperties);
    }
}

```

{% endtab %}