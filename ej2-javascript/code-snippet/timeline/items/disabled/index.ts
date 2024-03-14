import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const disabledItem: TimelineItemModel[] = [
  { content: 'Eat'},
  { content: 'Code'},
  { content: 'Repeat', disabled: true},
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: disabledItem
});

// Render initialized Timeline.
timeline.appendTo("#timeline");