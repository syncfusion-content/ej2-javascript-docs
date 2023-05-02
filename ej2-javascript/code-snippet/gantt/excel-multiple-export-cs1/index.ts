


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



