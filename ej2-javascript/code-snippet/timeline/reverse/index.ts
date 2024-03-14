import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const careerProgress: TimelineItemModel[] = [
  { content: 'June 2022', oppositeContent: 'Graduated \n Bachelors in Computer Engineering' },
  { content: 'Aug 2022', oppositeContent: 'Software Engineering Internship \n ABC Software and Technology' },
  { content: 'Feb 2023', oppositeContent: 'Associate Software Engineer \n ABC Software and Technology' },
  { content: 'Mar 2024', oppositeContent: 'Software Level 1 Engineer \n XYZ Solutions' },
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: careerProgress,
  reverse: true,
  align: 'before'
});

// Render initialized Timeline.
timeline.appendTo("#timeline");