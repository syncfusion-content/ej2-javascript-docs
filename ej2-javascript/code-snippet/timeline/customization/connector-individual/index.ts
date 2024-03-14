import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const dailyRoutine: TimelineItemModel[] = [
  { content: 'Eat', cssClass: 'state-initial' },
  { content: 'Code', cssClass: 'state-intermediate' },
  { content: 'Repeat' }
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: dailyRoutine,
  cssClass: 'custom-connector'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");