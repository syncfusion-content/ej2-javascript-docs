
var orderStatus = [
  { content: 'Shipped'},
  { content: 'Departed'},
  { content: 'Arrived'},
  { content: 'Out for Delivery'}
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: orderStatus,
  cssClass: 'e-outline'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");