import { Gantt, Toolbar, PdfExport, Selection,PdfBorders, PdfExportProperties, DayMarkers } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { PdfPaddings } from '@syncfusion/ej2-gantt/src/export/pdf-base/pdf-borders';
import {   PdfDashStyle, PdfFontFamily, PdfFontStyle, PdfPen, PdfStringFormat, PdfTextAlignment, PdfVerticalAlignment} from '@syncfusion/ej2-pdf-export';

Gantt.Inject(Toolbar, PdfExport, Selection, DayMarkers);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        const stringFormat = new PdfStringFormat();
      stringFormat.alignment = PdfTextAlignment.Center;

      const vertical = new PdfStringFormat();
      vertical.alignment = PdfTextAlignment.Center;

      const penColor = new PdfColor(105, 105, 105);
      const penWidth = 1;
      const pen = new PdfPen(penColor, penWidth);
      pen.dashStyle = PdfDashStyle.Dash; 

      const borderWidth = 1;
      const borderColor = new PdfColor(192, 192, 192); 
      let pdfpen: PdfPen = new PdfPen(borderColor, borderWidth);
      let pdfborders: PdfBorders = new PdfBorders();
      pdfborders.all = pdfpen;
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
                },
                label: {
                    fontColor: new PdfColor(128, 0, 0)
                },
                cell: {
                    backgroundColor: new PdfColor(240, 248, 255),
                    fontColor: new PdfColor(0, 0, 0),
                    borderColor: new PdfColor(179, 219, 255)
                },
                eventMarker: {
                    label: {
                      backgroundColor: new PdfColor(255, 239, 213), 
                      fontFamily: PdfFontFamily.TimesRoman,
                      fontColor: new PdfColor(139, 69, 19), 
                      fontSize: 9,
                      format: stringFormat,
                      fontStyle: PdfFontStyle.Bold,
                      borderColor: new PdfColor(160, 82, 45), 
                      borders: pdfborders,
                    },
                    lineStyle: pen,
                  },
                  holiday: {
                    fontFamily: PdfFontFamily.TimesRoman,
                    fontSize: 10,
                    fontStyle: PdfFontStyle.Bold,
                    borderColor: new PdfColor(211, 211, 211), 
                    backgroundColor: new PdfColor(255, 248, 220), 
                    fontColor: new PdfColor(105, 105, 105),
                    format: vertical,
                    borders: pdfborders,
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
        parentID: 'ParentID'
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
    eventMarkers: [
        {
            day: '04/10/2019',
            cssClass: 'e-custom-event-marker',
            label: 'Project approval and kick-off'
        }
    ],
    holidays:  [{
        from: "04/04/2019",
        to: "04/04/2019",
        label: " Public holidays",
        cssClass: "e-custom-holiday"
    
    },
    {
        from: "04/12/2019",
        to: "04/12/2019",
        label: " Public holiday",
        cssClass: "e-custom-holiday"
    
    }],
});
gantt.appendTo('#GanttExport');