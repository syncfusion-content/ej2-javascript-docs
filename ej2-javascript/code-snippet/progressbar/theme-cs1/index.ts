


import { ProgressBar } from '@syncfusion/ej2-progressbar';

let linearThemeProgress: ProgressBar = new ProgressBar({
  type: 'Linear',
  height: '60',
  width: '100%',
  value: 40,
  secondaryProgress: 60,
  trackThickness: 20,
  progressThickness: 20,
  theme: 'HighContrast',
  animation: {
    enable: true,
    duration: 2000,
    delay: 0
  }
});

linearThemeProgress.appendTo('#linearTheme');

let circularThemeProgress: ProgressBar = new ProgressBar({
  type: 'Circular',
  height: '150',
  width: '100%',
  value: 40,
  secondaryProgress: 60,
  trackThickness: 20,
  progressThickness: 20,
  theme: 'HighContrast',
  animation: {
    enable: true,
    duration: 2000,
    delay: 0
  }
});

circularThemeProgress.appendTo('#circularTheme');



