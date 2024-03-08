import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const frameworks: TimelineItemModel[] = [
  { content: 'ReactJs', oppositeContent: 'Owned by Facebook' },
  { content: 'Angular', oppositeContent: 'Owned by Google' },
  { content: 'VueJs', oppositeContent: 'Owned by Evan you' },
  { content: 'Svelte', oppositeContent: 'Owned by Rich Harris' }
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: frameworks,
  align: 'Alternate'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");