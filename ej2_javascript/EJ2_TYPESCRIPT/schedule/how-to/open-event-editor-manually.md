# Open Editor Window Manually

## Open Editor Window externally

Scheduler allows the user to manually open the event editor on specific time or on certain events using `openEditor` method. To open the editor on specific range of time, user need to pass the cell details as first argument and **Add** as second argument whereas to open it on event pass that event detail and **Save** as arguments. In the following code example, on clicking the respective button will open the respective editor window manually.

{% tab template="schedule/open-editor", es5Template="open-editor", iframeHeight="616px", sourceFiles="index.ts,index.html"  %}

```typescript
import { Schedule, Day, Week, WorkWeek, Month} from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

    let button1: Button = new Button();
    button1.appendTo('#btn1');
    let button2: Button = new Button();
    button2.appendTo('#btn2');
    button1.element.onclick = (): void => {
    let cellData: Object ={
        startTime: new Date(2018, 1, 15, 10, 0),
        endTime: new Date(2018, 1, 15, 11, 0),
        };
        scheduleObj.openEditor(cellData,'Add');
    };
    button2.element.onclick = (): void => {
    let eventData: Object ={
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    };
    scheduleObj.openEditor(eventData,'Save');
    };
```

{% endtab %}

## Open editor window on single click

By default, Scheduler Editor window will open when double clicking the cells or appointments. You can also open the editor window with single click by using `openEditor` method in `eventClick` and `cellClick` events of scheduler and setting false to `showQuickInfo`. The following example shows how to open editor window on single click of cells and appointments.

{% tab template="schedule/default", es5Template="single-click-editor", iframeHeight="616px", sourceFiles="index.ts,index.html"  %}

```typescript
import { Schedule, Day, Week, WorkWeek, Month, CellClickEventArgs, EventClickArgs } from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';
import { schedulerData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2021, 7, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: schedulerData },
    showQuickInfo: false,
    cellClick: (args: CellClickEventArgs) => {
        scheduleObj.openEditor(args, 'Add');
    },
    eventClick: (args: EventClickArgs) => {
        if (!(args.event as any).RecurrenceRule) {
            scheduleObj.openEditor(args.event, 'Save');
        }
        else {
            scheduleObj.quickPopup.openRecurrenceAlert();
        }
    }
});
scheduleObj.appendTo('#Schedule');
```

{% endtab %}
