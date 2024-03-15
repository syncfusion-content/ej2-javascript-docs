import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const orderStatus: TimelineItemModel[] = [
  { content: 'Ordered', cssClass: 'state-completed' },
  { content: 'Shipped', cssClass: 'state-progress' },
  { content: 'Delivered' }
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: orderStatus,
  cssClass: 'dot-color'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");