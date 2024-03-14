import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const mealTimes: TimelineItemModel[] = [
  { content: 'Breakfast', oppositeContent: '8:00 AM'},
  { content: 'Lunch', oppositeContent: '1:00 PM'},
  { content: 'Dinner', oppositeContent: '8:00 PM'},
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: mealTimes
});

// Render initialized Timeline.
timeline.appendTo("#timeline");