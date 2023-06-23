var progressbar = new ej.progressbar.ProgressBar({
  type: 'Linear',
  trackThickness: 24,
  progressThickness: 24,
  height: '60',
  width: '100%',
  value: 50,
  labelStyle: {
    color: '#FFFFFF'
  },
  animation: {
    enable: true,
    duration: 2000,
    delay: 0
  },
  valueChanged: (args) => {
    // Here you can customize the code.
  },
  progressCompleted: (args) => {
    // Here you can customize the code.
  },
  animationComplete: (args) => {
    // Here you can customize the code.
  },
  textRender: (args) => {
    // Here you can customize the code.
  },
  annotationRender: (args) => {
    // Here you can customize the code.
  },
  load: (args) => {
    // Here you can customize the code.
  },
  loaded: (args) => {
    // Here you can customize the code.
  },
  resized: (args) => {
    // Here you can customize the code.
  }
});

progressbar.appendTo('#element');

