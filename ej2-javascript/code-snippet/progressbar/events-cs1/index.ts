


import {ProgressBar, ProgressAnnotation, IProgressValueEventArgs, ITextRenderEventArgs, IAnnotationRenderEventArgs, ILoadedEventArgs,IProgressResizeEventArgs } from '@syncfusion/ej2-progressbar';
ProgressBar.Inject(ProgressAnnotation);

let progress: ProgressBar = new ProgressBar({
  type: 'Linear',
  trackThickness: 24,
  progressThickness: 24,
  value: 50,
  labelStyle: {
    color: '#FFFFFF'
  },
  animation: {
    enable: true,
    duration: 2000,
    delay: 0
  },
  valueChanged: (args: IProgressValueEventArgs) => {
    // Here you can customize the code.
  },
  progressCompleted: (args: IProgressValueEventArgs) => {
    // Here you can customize the code.
  },
  animationComplete: (args: IProgressValueEventArgs) => {
    // Here you can customize the code.
  },
  textRender: (args: ITextRenderEventArgs) => {
    // Here you can customize the code.
  },
  annotationRender: (args: IAnnotationRenderEventArgs) => {
    // Here you can customize the code.
  },
  load: (args: ILoadedEventArgs) => {
    // Here you can customize the code.
  },
  loaded: (args: ILoadedEventArgs) => {
    // Here you can customize the code.
  },
  resized: (args: IProgressResizeEventArgs) => {
    // Here you can customize the code.
  }
});

progress.appendTo('#element');



