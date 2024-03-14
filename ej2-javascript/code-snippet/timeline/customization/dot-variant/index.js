
var dotVariants = [
  { content: 'Filled', cssClass: 'dot-filled' },
  { content: 'Flat', cssClass: 'dot-flat' },
  { content: 'Outlined', cssClass: 'dot-outlined' }
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: dotVariants,
});

// Render initialized Timeline.
timeline.appendTo("#timeline");