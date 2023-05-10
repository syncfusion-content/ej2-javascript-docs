


import { ProgressBar } from '@syncfusion/ej2-progressbar';

    let uploadProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        trackThickness: 24,
        progressThickness: 24,
        value: 90,
        minimum: 10,
        maximum:90,
        showProgressValue: true,
        cornerRadius: 'Round',
        labelStyle: {
            color: '#FFFFFF'
        },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    uploadProgress.appendTo('#percentage');



