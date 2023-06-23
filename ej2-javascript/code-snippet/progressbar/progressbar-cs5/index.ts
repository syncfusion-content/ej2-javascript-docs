


import { ProgressBar } from '@syncfusion/ej2-progressbar';

    let percentageProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        height: '60',
        width: '90%',
        trackThickness: 24,
        progressThickness: 24,
        secondaryProgressThickness: 20,
        value: 100,
        showProgressValue: true,
        labelStyle: {
            color: '#FFFFFF'
        },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    percentageProgress.appendTo('#percentage');



