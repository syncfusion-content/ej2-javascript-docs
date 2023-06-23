


import { ProgressBar } from '@syncfusion/ej2-progressbar';

       let percentageProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        trackThickness: 24,
        progressThickness: 24,
        value: 100,
        showProgressValue: true,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0
        }
    });
   percentageProgress.appendTo('#percentage');



