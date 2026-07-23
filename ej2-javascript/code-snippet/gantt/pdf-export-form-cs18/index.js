var clickHandler = function (args) {
  if (args.item.id === 'GanttExport_pdfexport') {
    var exportProperties = {
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
  var form = document.getElementById('formComponent');

  var name = form.elements.namedItem('name').value;
  var email = form.elements.namedItem('email').value;
  var message = form.elements.namedItem('message').value;

  // Return the form data as a string
  return `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
}

var ganttChart = new ej.gantt.Gantt({
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

ganttChart.appendTo('#GanttExport');