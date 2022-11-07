# Multiple exporting

PDF export provides an option for exporting multiple Gantt to same file. In this exported document, each Gantt will be exported to a new page of the document in same file.

{% tab template="gantt/pdf-multiple-export",es5Template="multipleexport" %}

```typescript

import { Gantt, Toolbar,PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/14/2019'),
    height: '280px',
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
    toolbar: ['PdfExport'],
    height: '250px'
});
secondGantt.appendTo('#GanttExport2');

firstGantt.toolbarClick = (args: Object) => {
    if (args.item.id === 'GanttExport1_pdfexport') {
        let firstGanttPdfExport: Promise<Object> = gantt.pdfExport({}, true);
        firstGanttPdfExport.then(function(pdfData){
            secondGantt.pdfExport({}, false, pdfData);
        });
    }
}

```

{% endtab %}

## To customize PDF export

PDF export provides an option to customize the mapping of Gantt to exported PDF document.

### File name for exported document

You can assign a file name for the exported document by defining the `fileName` property in `pdfExportProperties`.

{% tab template="gantt/pdf-export",es5Template="filename" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
           fileName:"new.pdf"
        };
        gantt.pdfExport(exportProperties);
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

### How to change page orientation

Page orientation can be changed to `Portrait` (Default Landscape) for the exported document using the property `pdfExportProperties.pageOrientation`.

{% tab template="gantt/pdf-export",es5Template="pageorientation" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
           pageOrientation: 'Portrait'
        };
        gantt.pdfExport(exportProperties);
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

### How to change page size

Page size can be customized for the exported document using the `pdfExportProperties.pageSize`.
The supported page sizes are:

* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tab template="gantt/pdf-export",es5Template="pagesize" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
           pageSize: 'A0'
        };
        gantt.pdfExport(exportProperties);
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

### Export current view data

PDF export provides an option to export the current view data into PDF. To export current view data alone, define the `exportType` to `CurrentViewData`.

{% tab template="gantt/pdf-export",es5Template="currentviewdata" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, Filter, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection, Filter);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
             exportType: 'CurrentViewData'
        };
        gantt.pdfExport(exportProperties);
    }
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowFiltering: true,
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

### Enable footer

By default, we render the default footer for a PDF file, this can be enabled or disabled by using the `enableFooter` property.

{% tab template="gantt/pdf-export",es5Template="footer" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
            enableFooter: false
        };
        gantt.pdfExport(exportProperties);
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

### Export hidden columns

PDF export provides an option to export hidden columns of Gantt by defining the `includeHiddenColumn` to `true`.

{% tab template="gantt/pdf-export",es5Template="hiddencolumn" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
            includeHiddenColumn: true
        };
        gantt.pdfExport(exportProperties);
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
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Export predecessor lines

By using `showPredecessorLines`, you can hide or show predecessor lines in the exported PDF document.

{% tab template="gantt/pdf-export",es5Template="predecessorline" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
            showPredecessorLines: true
        };
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
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Show or hide columns on exported PDF

You can show a hidden column or hide a visible column while exporting the Gantt using the [`toolbarClick`](../api/gantt#toolbarclick) and [`beforePdfExport`](../api/gantt#beforepdfexport) events.

You can show or hide columns by setting the `column.visible` property to `true` or `false` respectively.

In the following example, there is a hidden column `Duration` in the Gantt. While exporting, we have changed `Duration` to visible column and `StartDate` to hidden column.

{% tab template="gantt/pdf-export",es5Template="showhidecolumn" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { EJ2Instance } from '@syncfusion/ej2-navigations';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let obj: any = (<EJ2Instance>document.getElementById('GanttExport')).ej2_instances[0]
        obj.treeGrid.columns[2].visible = false;
        gantt.pdfExport();
    }
};

let beforePdfExport: EmitType<Object> = (args: Object) => {
    let obj: any = (<EJ2Instance>document.getElementById('GanttExport')).ej2_instances[0]
    obj.treeGrid.columns[3].visible = true;
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
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName'},
        { field: 'StartDate'},
        { field: 'Duration', visible: false},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    beforePdfExport: beforePdfExport
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using the [`pdfQueryCellInfo`](../api/gantt#pdfquerycellinfo) event. In this event, you can format the treegrid cells of exported PDF document based on the column cell value.

In the following sample, the background color is set for `Progress` column in the exported document by using the `args.style` and `backgroundColor` properties.

{% tab template="gantt/pdf-export",es5Template="cellformatting" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfQueryTimelineCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport();
    }
};

let pdfQueryCellInfo: EmitType<PdfQueryCellInfoEventArgs> = (args: PdfQueryCellInfoEventArgs) => {
    if(args.column.field == 'Progress'){
        if(args.value < 50) {
            args.style = {backgroundColor: '#F08080'};
        } else {
            args.style = {backgroundColor: '#A569BD'};
        }
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
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryCellInfo: pdfQueryCellInfo
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Timeline cell formatting

Timeline cells in the exported PDF document can be customized or formatted using the [`pdfQueryTimelineCellInfo`](../api/treegrid#pdfquerytimelinecellinfo) event.

In the following sample, the header background color is set for timeline cells in the exported document by using the `args.headerBackgroundColor` property.

{% tab template="gantt/pdf-export",es5Template="timelinecellformatting" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfQueryTimelineCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport();
    }
};

let pdfQueryTimelineCellInfo: EmitType<PdfQueryTimelineCellInfoEventArgs> = (args: PdfQueryTimelineCellInfoEventArgs) => {
    args.timelineCell.backgroundColor= new PdfColor(240, 248, 255);
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
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryTimelineCellInfo: pdfQueryTimelineCellInfo
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Taskbar formatting

Taskbars in the exported PDF document can be customized or formatted using the [`pdfQueryTaskbarInfo`](../api/treegrid#pdfquerytaskbarinfo) event.

In the following sample, the taskbar background color is customized in the chart side of the exported document by using the `args.taskbar` property.

{% tab template="gantt/pdf-export",es5Template="taskbarformatting" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport();
    }
};

let pdfQueryTaskbarInfo: EmitType<Object> = (args: Object) => {
    if(args.data.Progress < 50 && !args.data.hasChildRecords) {
        args.taskbar.progressColor = new PdfColor(205, 92, 92);
        args.taskbar.taskColor =  args.taskbar.taskBorderColor = new PdfColor(240, 128, 128);
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
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryTaskbarInfo: pdfQueryTaskbarInfo
});
gantt.appendTo('#GanttExport');

```

{% endtab %}

### Theme

PDF export provides an option to include theme for the exported PDF document.
To apply theme in exported PDF, define the `theme` in `pdfExportProperties`.
The available themes are:

* Material
* Fabric
* Bootstrap
* Bootstrap 4

{% tab template="gantt/pdf-export",es5Template="theme" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
           theme:"Fabric"
        };
        gantt.pdfExport(exportProperties);
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

### Customized Theme

PDF export provides an option to customize the Gantt style for the exported PDF document.
To customize Gantt style in exported PDF, define the `ganttStyle` in `pdfExportProperties`.

{% tab template="gantt/pdf-export",es5Template="customtheme" %}

```typescript

import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { PdfPaddings } from '@syncfusion/ej2-gantt/src/export/pdf-base/pdf-borders';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
            ganttStyle: {
                fontFamily: 1,
                columnHeader: {
                    backgroundColor: new PdfColor(179, 219, 255)
                },
                taskbar: {
                    taskColor: new PdfColor(240, 128, 128),
                    taskBorderColor: new PdfColor(240, 128, 128),
                    progressColor: new PdfColor(205, 92, 92)
                },
                connectorLineColor: new PdfColor(128, 0, 0),
                footer: {
                    backgroundColor: new PdfColor(205, 92, 92)
                },
                timeline: {
                    backgroundColor: new PdfColor(179, 219, 255),
                    fontStyle: 1
                }
                label: {
                    fontColor: new PdfColor(128, 0, 0)
                },
                cell: {
                    backgroundColor: new PdfColor(240, 248, 255),
                    fontColor: new PdfColor(0, 0, 0),
                    borderColor: new PdfColor(179, 219, 255)
                },  
            }
        };
        gantt.pdfExport(exportProperties);
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
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID'},
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
gantt.appendTo('#GanttExport');

```

{% endtab %}