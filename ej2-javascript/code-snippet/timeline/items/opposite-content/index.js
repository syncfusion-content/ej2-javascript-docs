
var mealTimes = [
  { content: 'Breakfast', oppositeContent: '8:00 AM'},
  { content: 'Lunch', oppositeContent: '1:00 PM'},
  { content: 'Dinner', oppositeContent: '8:00 PM'},
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: mealTimes
});

// Render initialized Timeline.
timeline.appendTo("#timeline");