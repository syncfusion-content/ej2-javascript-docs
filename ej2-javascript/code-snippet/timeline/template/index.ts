import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const projectMilestones: TimelineItemModel[] = [
  { content: 'Kickoff meeting'},
  { content: 'Content approved'},
  { content: 'Design approved'},
  { content: 'Product delivered'}
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: projectMilestones,
  orientation: 'horizontal',
  template: '#timeline-template',
  cssClass: 'custom-timeline'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");