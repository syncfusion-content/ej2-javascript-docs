
var frameworks = [
  { content: 'ReactJs', oppositeContent: 'Owned by Facebook' },
  { content: 'Angular', oppositeContent: 'Owned by Google' },
  { content: 'VueJs', oppositeContent: 'Owned by Evan you' },
  { content: 'Svelte', oppositeContent: 'Owned by Rich Harris' }
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: frameworks,
  align: 'Alternatereverse'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");