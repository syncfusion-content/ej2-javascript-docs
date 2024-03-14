
var dailyRoutine = [
  { content: 'Eat' },
  { content: 'Code' },
  { content: 'Repeat' }
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: dailyRoutine,
  cssClass: 'custom-connector'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");