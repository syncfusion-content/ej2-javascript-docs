


import { ProgressBar } from '@syncfusion/ej2-progressbar';
    let percentageProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        height: '60',
        isIndeterminate: true,
        value: 20,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
    });
    percentageProgress.appendTo('#percentage');



