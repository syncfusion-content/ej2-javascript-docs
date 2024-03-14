
var productLifecycle = [
  { content: 'Planning'},
  { content: 'Developing'},
  { content: 'Testing' },
  { content: 'Launch' },
];

// Initializes the Timeline control
var timeline = new ej.layouts.Timeline({
  items: productLifecycle,
  created: function() {
    //your required action here 
  }
});

// Render initialized Timeline.
timeline.appendTo("#timeline");