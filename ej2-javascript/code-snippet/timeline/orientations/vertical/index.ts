import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const tripItenerary: TimelineItemModel[] = [
  { content: 'Day 1, 4:00 PM', oppositeContent: 'Check-in and campsite visit' },
  { content: 'Day 1, 7:00 PM', oppositeContent: 'Dinner with music' },
  { content: 'Day 2, 5:30 AM', oppositeContent: 'Sunrise between mountains' },
  { content: 'Day 2, 8:00 AM', oppositeContent: 'Breakfast and check-out' },
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: tripItenerary,
  orientation: 'Vertical'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");