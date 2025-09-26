var clickHandler = function(args){
    if (args.item.id === 'GanttExport_pdfexport') {
         var exportProperties = {
             enableFooter: false
         };
         ganttChart.pdfExport(exportProperties);
    }
 };
 function pdfQueryCellInfo(args) {
     if (args.column.headerText === 'Resources') 
     {
         args.image = { height: 40, width: 40, base64: args.data.taskData.ResourcesImage };
     }
     if (args.column.headerText === 'Email ID') {
         args.hyperLink = {
             target: 'mailto:' + args.data.taskData.EmailID,
             displayText: args.data.taskData.EmailID
         };
     }
 }
 
 var ganttChart = new ej.gantt.Gantt({
     dataSource: GanttData,
     height: '450px',
     taskFields: {
         id: 'TaskID',
         name: 'TaskName',
         startDate: 'StartDate',
         endDate: 'EndDate',
         duration: 'Duration',
         progress: 'Progress',
         resourceInfo: 'Resources',
         dependency: 'Predecessor',
         parentID: 'ParentID',
     },
     allowPdfExport: true,
     columns: [
         { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left' },
         { field: 'TaskName', headerText: 'Task Name', width: '250' },
         { field: 'Resources', headerText: 'Resources', width: '250', template: '#columnTemplate' },
         {field: 'EmailID', headerText: 'Email ID', template: '#template2', width: 180 },
     ],
     pdfQueryCellInfo: pdfQueryCellInfo,
     toolbar: ['PdfExport'],
     toolbarClick: clickHandler,
     resources: editingResources,
         resourceFields: {
             id: 'ResourceId',
             name: 'ResourceName'
         },
         projectStartDate: new Date('03/24/2019'),
         projectEndDate: new Date('07/06/2019')
 });
 ganttChart.appendTo('#GanttExport');