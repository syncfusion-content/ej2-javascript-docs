
var disabledItem = [
  { content: 'Eat'},
  { content: 'Code'},
  { content: 'Repeat', disabled: true},
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: disabledItem
});

// Render initialized Timeline.
timeline.appendTo("#timeline");