---
title: "Excel Export"
component: "Gantt"
description: "Learn how to export Gantt data to Excel and CSV documents in the Essential JS 2 Gantt control."
---

# Excel Export

Gantt supports client-side exporting, which allows you to export its data to the Excel and CSV formats. Use the [`excelExport`](../api/gantt/#excelexport) and [`csvExport`](../api/gantt/#csvexport) methods for exporting. To enable Excel export in the Gantt, set the [`allowExcelExport`](../api/gantt/#allowexcelexport) to true.

To export data to Excel and CSV, inject the `ExcelExport` module in Gantt.

{% tab template="gantt/excel-export",es5Template="excelexport" %}

```typescript

import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_excelexport') {
        gantt.excelExport();
        }
    else if (args.item.id === 'GanttExport_csvexport') {
        gantt.csvExport();
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
    allowExcelExport: true,
    toolbar: ['ExcelExport', 'CsvExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');

```

{% endtab %}