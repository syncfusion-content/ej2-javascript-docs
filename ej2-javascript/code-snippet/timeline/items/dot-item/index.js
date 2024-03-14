
var dotItems = [
  { content: 'Default'},
  { content: 'Icon', dotCss: 'e-icons e-check'},
  { content: 'Image', dotCss: 'custom-image'},
  { content: 'Text', dotCss: 'custom-text'}
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: dotItems,
});

// Render initialized Timeline.
timeline.appendTo("#timeline");