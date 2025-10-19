import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt(
  {
    dataSource: GanttData,
    taskFields: {
      id: 'taskID',
      name: 'taskName',
      startDate: 'startDate',
      duration: 'duration',
      progress: 'progress',
      dependency: 'predecessor',
      parentID: 'parentID'
    },
    timelineSettings: {
        timelineUnitSize: 65,
        topTier: {
          unit: 'Day',
          format: 'MMM dd, yyyy'
        },
        bottomTier: {
          unit: 'Hour',
          format: 'hh:mm a'
        }
    },
    timezone: 'UTC',
    durationUnit: 'Hour',
    includeWeekend: true,
    dateFormat: 'hh:mm a',
    height:'450px',
    dayWorkingTime: [{ from: 0, to: 23 }],
  });
  
gantt.appendTo('#Gantt');