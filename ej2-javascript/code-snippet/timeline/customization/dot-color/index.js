
var orderStatus = [
  { content: 'Ordered', cssClass: 'state-completed' },
  { content: 'Shipped', cssClass: 'state-progress' },
  { content: 'Delivered' }
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: orderStatus,
  cssClass: 'dot-color'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");