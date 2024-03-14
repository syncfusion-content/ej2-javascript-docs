import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const orderStatus: TimelineItemModel[] = [
  { content: '#content-template'},
  { content: '#content-template'},
  { content: '#content-template'},
  { content: 'Out for Delivery'}
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: orderStatus,
});

// Render initialized Timeline.
timeline.appendTo("#timeline");