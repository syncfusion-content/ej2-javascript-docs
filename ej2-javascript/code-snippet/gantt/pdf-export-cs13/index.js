var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
    const stringFormat = new ej.pdfexport.PdfStringFormat();
      stringFormat.alignment = ej.pdfexport.PdfTextAlignment.Center;

      const vertical = new ej.pdfexport.PdfStringFormat();
      vertical.alignment = ej.pdfexport.PdfTextAlignment.Center;

      const penColor = new ej.pdfexport.PdfColor(105, 105, 105);
      const penWidth = 1;
      const pen = new ej.pdfexport.PdfPen(penColor, penWidth);
      pen.dashStyle = ej.pdfexport.PdfDashStyle.Dash; 

      const borderWidth = 1;
      const borderColor = new ej.pdfexport.PdfColor(192, 192, 192); 
      let pdfpen = new ej.pdfexport.PdfPen(borderColor, borderWidth);
      let pdfborders = new ej.pdfexport.PdfBorders();
      pdfborders.all = pdfpen;
        var exportProperties = {
            ganttStyle: {
                fontFamily: 1,
                columnHeader: {
                    backgroundColor: new ej.pdfexport.PdfColor(179, 219, 255)
                },
                taskbar: {
                   taskColor: new ej.pdfexport.PdfColor(240, 128, 128),
                   taskBorderColor: new ej.pdfexport.PdfColor(240, 128, 128),
                   progressColor: new ej.pdfexport.PdfColor(205, 92, 92),
                },
                connectorLineColor: new ej.pdfexport.PdfColor(128,0,0),
                footer: {
                    backgroundColor: new ej.pdfexport.PdfColor(205, 92, 92)
                },
                timeline: {
                    backgroundColor: new ej.pdfexport.PdfColor(179, 219, 255),
                    fontStyle: 1
                },
                label: {
                    fontColor: new ej.pdfexport.PdfColor(128, 0, 0),
                },
                cell: {
                    backgroundColor: new ej.pdfexport.PdfColor(240, 248, 255),
                    fontColor: new ej.pdfexport.PdfColor(0, 0, 0),
                    borderColor:new ej.pdfexport.PdfColor(179, 219, 255),
                }, 
                eventMarker: {
                    label: {
                      backgroundColor: new ej.pdfexport.PdfColor(255, 239, 213), 
                      fontFamily: ej.pdfexport.PdfFontFamily.TimesRoman,
                      fontColor: new ej.pdfexport.PdfColor(139, 69, 19), 
                      fontSize: 9,
                      format: stringFormat,
                      fontStyle: ej.pdfexport.PdfFontStyle.Bold,
                      borderColor: new ej.pdfexport.PdfColor(160, 82, 45), 
                      borders: pdfborders,
                    },
                    lineStyle: pen,
                  },
                  holiday: {
                    fontFamily: ej.pdfexport.PdfFontFamily.TimesRoman,
                    fontSize: 10,
                    fontStyle: ej.pdfexport.PdfFontStyle.Bold,
                    borderColor: new ej.pdfexport.PdfColor(211, 211, 211), 
                    backgroundColor: new ej.pdfexport.PdfColor(255, 248, 220), 
                    fontColor: new ej.pdfexport.PdfColor(105, 105, 105),
                    format: vertical,
                    borders: pdfborders,
                  }, 
            }    
        };
        ganttChart.pdfExport(exportProperties);
   }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
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
ganttChart.appendTo('#GanttExport');