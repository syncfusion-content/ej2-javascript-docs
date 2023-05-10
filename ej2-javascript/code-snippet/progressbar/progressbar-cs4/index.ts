


import { ProgressBar } from '@syncfusion/ej2-progressbar';

      let errorProgress: ProgressBar = new ProgressBar({
        type: 'Circular',
        height: '60',
        segmentCount: 8,
        value: 100,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
    });
    errorProgress.appendTo('#percentage');



