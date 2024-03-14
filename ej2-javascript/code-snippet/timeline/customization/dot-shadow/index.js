
var orderStatus = [
  { content: 'Ordered' },
  { content: 'Shipped' },
  { content: 'Delivered' }
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: orderStatus,
});

// Render initialized Timeline.
timeline.appendTo("#timeline");