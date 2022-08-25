# Multiple Gantt exporting

In Gantt, the Excel export provides support to export multiple Gantt data in new sheet or same sheet.

## Same sheet

The Excel export provides support to export multiple Gantt data in the same sheet. To export in same sheet, define `multipleExport.type` as `AppendToSheet` in `ExcelExportProperties`. You can also provide blank rows between exported multiple Gantt data. These blank rows count can be defined using `multipleExport.blankRows`.

{% tab template="gantt/excel-multiple-export",es5Template="samesheet" %}

```typescript

import { Gantt, Toolbar,ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let firstGantt: Gantt = new Gantt({
    dataSource: [GanttData[0]],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    height: '280px',
    toolbar: ['ExcelExport']
});
firstGantt.appendTo('#GanttExport1');

let secondGantt: Gantt = new Gantt({
    dataSource: [GanttData[1]],  
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    height: '250px'
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = (args: Object) => {
    if (args.item.id === 'GanttExport1_excelexport') {
        let appendExcelExportProperties: ExcelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 }
        };

        let firstGanttExport: Promise<any> = firstGantt.excelExport(appendExcelExportProperties, true);
        firstGanttExport.then((fData: any) => {
            secondGantt.excelExport(appendExcelExportProperties, false, fData);
        });
    }
}

```

{% endtab %}

>By default, `multipleExport.blankRows` value is 5.

## New sheet

The Excel exporting provides support to export multiple Gantt in new sheet. To export in new sheet, define `multipleExport.type` as `NewSheet` in `ExcelExportProperties`.

{% tab template="gantt/excel-multiple-export",es5Template="newsheet" %}

```typescript

import { Gantt, Toolbar,ExcelExport, Selection }  from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport,Selection);

let firstGantt: Gantt = new Gantt({
    dataSource: [GanttData[0]],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    height: '280px',
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    allowExcelExport: true,
    toolbar: ['ExcelExport']
});
firstGantt.appendTo('#GanttExport1');

let secondGantt: Gantt = new Gantt({
    dataSource: [GanttData[1]],
    height: '250px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = (args: Object) => {
    if (args.item.id === 'GanttExport1_excelexport') {
        let appendExcelExportProperties: ExcelExportProperties = {
            multipleExport: { type: 'NewSheet' }
        };

        let firstGanttExport: Promise<any> = firstGantt.excelExport(appendExcelExportProperties, true);
        firstGanttExport.then((fData: any) => {
            secondGantt.excelExport(appendExcelExportProperties, false, fData);
        });
    }
}

```

{% endtab %}

## Customize the Excel export

Gantt Excel export allows the users to customize the exported document based on requirement.

### Export hidden columns

In Gantt, the Excel export provides an option to export hidden columns by defining `includeHiddenColumn` as `true`.

{% tab template="gantt/excel-export",es5Template="includehiddencolumn" %}

```typescript

import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            includeHiddenColumn: true
        };
        gantt.excelExport(excelExportProperties);
    }
    else if (args.item.id === 'GanttExport_csvexport') {
        let excelExportProperties: ExcelExportProperties = {
            includeHiddenColumn: true
        };
        gantt.csvExport(excelExportProperties);
    }
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150',visible:false },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    toolbar: ['ExcelExport','CsvExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Show or hide columns on exported Excel

In Gantt, while exporting, you can show a hidden column or hide a visible column using the [`toolbarClick`](../api/gantt/#toolbarclick) and [`excelExportComplete`](../api/gantt/#excelexportcomplete) events.

In the `toolbarClick` event, using the `args.item.id` property, you can show or hide columns by setting the `column.visible` property to `true` or `false` respectively.

Similarly, in the `excelExportComplete` event, you can revert the columns visibility back to the previous state.

{% tab template="gantt/excel-export",es5Template="showhide" %}

```typescript

import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

var clickHandler = function(args){
    let columns: Column[] = gantt.treeGrid.grid.columns;
    if (args.item.id === 'GanttExport_excelexport') {
        columns[0].visible = true;
        columns[3].visible = false;
        gantt.excelExport();
    }
    else if (args.item.id === 'GanttExport_csvexport') {
        columns[0].visible = true;
        columns[3].visible = false;
        gantt.csvExport();
    }
};
var exportComplete = function(args){
        let columns: Column[] = gantt.treeGrid.grid.columns;
        columns[0].visible = false;
        columns[3].visible = true;
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100',visible:false  },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    toolbar: ['ExcelExport','CsvExport'],
    toolbarClick: clickHandler,
    excelExportComplete: exportComplete
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Cell formatting during export

In Gantt, you can customize the TreeGrid cells in the exported document using the [`excelQueryCellInfo`](../api/gantt/#excelquerycellinfo) event. In this event, you can format the TreeGrid cells of exported Excel and CSV documents based on the required condition.

In the following sample, the background color has been customized for `TaskID` column in the exported Excel using the `args.style` and `backColor` properties.

{% tab template="gantt/excel-export",es5Template="cellcustomization" %}

```typescript

import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport,Selection );

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    labelSettings:{
        taskLabel: '${Progress}%'
    },
    toolbar: ['ExcelExport'],
    splitterSettings: {
        columnIndex: 3
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100',visible:false  },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' }
    ],
    excelQueryCellInfo: function (args: any) {
        if(args.column.field == 'Progress'){
            if(args.value > 80) {
                args.style = { backColor: '#A569BD' };
            }
            else if(args.value < 20) {
                args.style = { backColor: '#F08080' };
            }
        }
    },
    queryTaskbarInfo: function (args: any) {
        if (args.data.Progress > 80) {
            args.progressBarBgColor = "#6C3483";
            args.taskbarBgColor = args.taskbarBorderColor = "#A569BD";
        } else if (args.data.Progress < 20) {
            args.progressBarBgColor = "#CD5C5C";
            args.taskbarBgColor = args.taskbarBorderColor = "#F08080";
        }
    },
    queryCellInfo: function (args: any) {
        if(args.column.field == 'Progress'){
            if(args.data.Progress > 80) {
                args.cell.style.backgroundColor  = '#A569BD';
            }
            else if(args.data.Progress < 20) {
                args.cell.style.backgroundColor  = '#F08080';
            }
        }
    }
});
gantt.appendTo('#GanttExport');
gantt.toolbarClick = (args: Object) => {
    if (args.item.id === 'GanttExport_excelexport') {
        gantt.excelExport();
    }
}

```

{% endtab %}

### Theme

The Excel export also provides an option to include custom theme for exported Excel document.

To apply theme in exported Excel, define the `theme` in `ExcelExportProperties`.

{% tab template="gantt/excel-export",es5Template="exceltheme" %}

```typescript

import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    toolbar: ['ExcelExport']
});
gantt.appendTo('#GanttExport');
gantt.toolbarClick = (args: Object) => {
    if (args['item'].id === 'GanttExport_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            theme:
                {
                    header: { fontName: 'Segoe UI', fontColor: '#666666' },
                    record: { fontName: 'Segoe UI', fontColor: '#666666' }
                }
        };
        gantt.excelExport(excelExportProperties);
    }
}

```

{% endtab %}

> By default, material theme is applied to the exported Excel document.

### Add header and footer

The Excel export also allows users to include header and footer contents to the exported Excel document.

{% tab template="gantt/excel-export",es5Template="exportfooter" %}

```typescript

import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    toolbar: ['ExcelExport']
});
gantt.appendTo('#GanttExport');
gantt.toolbarClick = (args: Object) => {
    if (args['item'].id === 'GanttExport_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            header: {
                headerRows: 7,
                rows: [
                    { cells: [{ colSpan: 4, value: "Northwind Traders", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
                    { cells: [{ colSpan: 4, value: "2501 Aerial Center Parkway", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                    { cells: [{ colSpan: 4, value: "Suite 200 Morrisville, NC 27560 USA", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                    { cells: [{ colSpan: 4, value: "Tel +1 888.936.8638 Fax +1 919.573.0306", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                    { cells: [{ colSpan: 4, hyperlink: { target: 'https://www.northwind.com/', displayText: 'www.northwind.com' }, style: { hAlign: 'Center' } }] },
                    { cells: [{ colSpan: 4, hyperlink: { target: 'mailto:support@northwind.com' }, style: { hAlign: 'Center' } }] },
                ]
            },
            footer: {
                footerRows: 4,
                rows: [
                    { cells: [{ colSpan: 4, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
                    { cells: [{ colSpan: 4, value: "!Visit Again!", style: { hAlign: 'Center', bold: true } }] }
                ]
            },
        };
        gantt.excelExport(excelExportProperties);
    }
}

```

{% endtab %}

### File name for exported document

You can set the required file name for the exported document by defining the `fileName` property in `ExcelExportProperties`.

{% tab template="gantt/excel-export",es5Template="filename" %}

```typescript

import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-grids'
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    treeColumnIndex: 1,
    allowExcelExport: true,
    toolbar: ['ExcelExport','CsvExport']
});
gantt.appendTo('#GanttExport');
gantt.toolbarClick = (args: Object) => {
    if (args['item'].id === 'GanttExport_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            fileName:"Gantt.xlsx"
        };
        gantt.excelExport(excelExportProperties);
    }
    else if (args['item'].id === 'GanttExport_csvexport') {
        let excelExportProperties: ExcelExportProperties = {
            fileName:"Gantt.csv"
        };
        gantt.csvExport(excelExportProperties);
    }
}

```

{% endtab %}