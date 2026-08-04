import {
    Gantt,
    Toolbar,
    PdfExport,
    PdfExportProperties
} from '@syncfusion/ej2-gantt';

import { GanttData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport);

let clickHandler = (args: ClickEventArgs) => {
  if (args.item.id === 'GanttExport_pdfexport') {
    let exportProperties: PdfExportProperties = {
      header: {
        fromTop: 100,
        height: 120,
        contents: [
          {
            type: 'Text',
            value: exportToPDF(),
            position: { x: 80, y: 50 },
            style: { textBrushColor: '#C25050', fontSize: 20 },
          },
        ],
      },
      footer: {
        fromBottom: 0,
        height: 0,
        contents: [],
      },
    };
    ganttChart.pdfExport(exportProperties);
  }
};

function exportToPDF() {
  // Get the form elements
  const form: HTMLFormElement = document.getElementById('formComponent') as HTMLFormElement;

  const name: string = (form.elements.namedItem('name') as HTMLInputElement).value;
  const email: string = (form.elements.namedItem('email') as HTMLInputElement).value;
  const message:string = (form.elements.namedItem('message') as HTMLInputElement).value;

  // Return the form data as a string
  return `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
}

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
    },
    treeColumnIndex: 1,
    allowPdfExport: true,
    gridLines: 'Both',
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
});

gantt.appendTo('#GanttExport');