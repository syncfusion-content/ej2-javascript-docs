
var dotSizes = [
  { content: 'Extra Small', cssClass: 'x-small' },
  { content: 'Small', cssClass: 'small' },
  { content: 'Medium', cssClass: 'medium' },
  { content: 'Large', cssClass: 'large' }
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: dotSizes,
});

// Render initialized Timeline.
timeline.appendTo("#timeline");