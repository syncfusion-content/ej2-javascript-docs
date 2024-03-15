import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const dotVariants: TimelineItemModel[] = [
  { content: 'Filled', cssClass: 'dot-filled' },
  { content: 'Flat', cssClass: 'dot-flat' },
  { content: 'Outlined', cssClass: 'dot-outlined' }
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: dotVariants,
  cssClass: 'dot-variant'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");