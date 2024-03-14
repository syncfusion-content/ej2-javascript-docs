
var dailyRoutine = [
  { content: 'Eat', cssClass: 'state-initial' },
  { content: 'Code', cssClass: 'state-intermediate' },
  { content: 'Repeat' }
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: dailyRoutine,
  cssClass: 'custom-connector'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");