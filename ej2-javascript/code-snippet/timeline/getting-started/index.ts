import { Timeline } from '@syncfusion/ej2-layouts';

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: [{}, {}, {}, {}]
});

// Render initialized Timeline.
timeline.appendTo("#timeline");