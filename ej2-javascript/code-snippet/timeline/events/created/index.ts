import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const productLifecycle: TimelineItemModel[] = [
  { content: 'Planning'},
  { content: 'Developing'},
  { content: 'Testing' },
  { content: 'Launch' },
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: productLifecycle,
  created: () => {
    //your required action here 
  }
});

// Render initialized Timeline.
timeline.appendTo("#timeline");