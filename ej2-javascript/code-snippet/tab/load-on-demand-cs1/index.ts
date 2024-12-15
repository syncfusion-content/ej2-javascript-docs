import { Tab } from '@syncfusion/ej2-navigations';
import { Calendar } from '@syncfusion/ej2-calendars';
import { Schedule, Day } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day);

//Initialize Tab component
let tabObj: Tab = new Tab({
  items: [
    {
      header: { text: 'Calendar' },
      content: '#Calendar'
    },
    {
      header: { text: 'Schedule' },
      content: '#Schedule',
    },
  ]
});
tabObj.appendTo('#element');

let calendar: Calendar = new Calendar();
calendar.appendTo('#Calendar');

let schedule: Schedule = new Schedule({
    width: '100%',
    height: '450px'
});
schedule.appendTo('#Schedule');