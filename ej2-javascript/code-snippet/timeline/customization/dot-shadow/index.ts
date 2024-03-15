import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const orderStatus: TimelineItemModel[] = [
  { content: 'Ordered' },
  { content: 'Shipped' },
  { content: 'Delivered' }
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: orderStatus,
  cssClass: 'dot-shadow'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");