import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties,PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData,editingResources } from './datasource.ts';
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
function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): any {
    if (args.column.headerText === 'Resources') {
        {
            args.image = { height:40,width:40, base64: (args as any).data.taskData.ResourcesImage };
        }
    }
    console.log(args.column.headerText);
    if (args.column.headerText === 'Email ID') {
        console.log(args.data.taskData);
        args.hyperLink = {
            target: 'mailto:' + (args as any).data.taskData.EmailID,
            displayText: (args as any).data.taskData.EmailID
        };
    }
}

let gantt: Gantt = new Gantt({
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
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'Resources', headerText: 'Resources', width: '250', template: '#columnTemplate' },
        {field: 'EmailID', headerText: 'Email ID', template: '#template2', width: 180 },
    ],
    pdfQueryCellInfo: pdfQueryCellInfo,
    allowPdfExport: true,
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
gantt.appendTo('#GanttExport');