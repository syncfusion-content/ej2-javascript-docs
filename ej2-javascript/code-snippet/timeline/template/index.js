
var projectMilestones = [
  { content: 'Kickoff meeting'},
  { content: 'Content approved'},
  { content: 'Design approved'},
  { content: 'Product delivered'}
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: projectMilestones,
  orientation: 'horizontal',
  template: '#timeline-template',
  cssClass: 'custom-timeline'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");