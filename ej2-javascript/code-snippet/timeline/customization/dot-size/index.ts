import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const dotSizes: TimelineItemModel[] = [
  { content: 'Extra Small', cssClass: 'x-small' },
  { content: 'Small', cssClass: 'small' },
  { content: 'Medium', cssClass: 'medium' },
  { content: 'Large', cssClass: 'large' }
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: dotSizes,
  cssClass: 'dot-size'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");