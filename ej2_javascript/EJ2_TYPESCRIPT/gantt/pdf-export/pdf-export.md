---
title: "PDF Export"
component: "Gantt"
description: "Learn how to export Gantt data to PDF document in the Essential JS 2 Gantt control."
---

# PDF Export

PDF export allows exporting Gantt data to PDF document. You need to use the [`pdfExport`](../api/gantt/#pdfexport) method for exporting. To enable PDF export in the Gantt, set the [`allowPdfExport`](../api/gantt/#allowpdfexport) to true.

To export data to PDF document, inject the `PdfExport` module in Gantt.

>Note: Currently, we don't have support for exporting the manually scheduled tasks.

{% tab template="gantt/pdf-export",es5Template="pdfexport" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport();
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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');

```

{% endtab %}