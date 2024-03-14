
var orderStatus = [
  { content: '#content-template'},
  { content: '#content-template'},
  { content: '#content-template'},
  { content: 'Out for Delivery'}
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: orderStatus,
});

// Render initialized Timeline.
timeline.appendTo("#timeline");