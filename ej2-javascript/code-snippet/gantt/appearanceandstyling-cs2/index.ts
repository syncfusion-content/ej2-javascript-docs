import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
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
    queryTaskbarInfo: function (args: any) {
        if (args.data.Progress == 50) {
            args.progressBarBgColor = "red";
        } else if (args.data.Progress == 70) {
            args.progressBarBgColor = "yellow";
        } else if (args.data.Progress == 80) {
            args.progressBarBgColor = "lightgreen";
        }
    }
});
gantt.appendTo('#Gantt');