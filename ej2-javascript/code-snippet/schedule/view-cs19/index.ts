

import { Schedule, Month } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '380px',
    selectedDate: new Date(2023, 11, 15),
    views: [{ option: 'Month', maxEventsPerRow: 3 }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


