import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const orderStatus: TimelineItemModel[] = [
  { content: 'Shipped'},
  { content: 'Departed'},
  { content: 'Arrived'},
  { content: 'Out for Delivery'}
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: orderStatus,
  cssClass: 'e-outline'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");