import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const dotItems: TimelineItemModel[] = [
  { content: 'Default'},
  { content: 'Icon', dotCss: 'e-icons e-check'},
  { content: 'Image', dotCss: 'custom-image'},
  { content: 'Text', dotCss: 'custom-text'}
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: dotItems,
});

// Render initialized Timeline.
timeline.appendTo("#timeline");