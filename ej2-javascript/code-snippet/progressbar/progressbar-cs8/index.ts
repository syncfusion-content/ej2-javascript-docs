


import { ProgressBar } from '@syncfusion/ej2-progressbar';

        let percentageProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        height: '60',
        width: '90%',
        trackThickness: 24,
        progressThickness: 24,
        cornerRadius: 'Round',
        progressColor: '#E3165B',
        trackColor: '#F8C7D8',
        secondaryProgressColor: 'green',
        secondaryProgress: 70,
        value: 50,
        showProgressValue: true,
        labelStyle: {
            color: '#FFFFFF'
        },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        textRender: (args: ITextRenderEventArgs) => {
            args.text = '50';
        }
    });
    percentageProgress.appendTo('#percentage');


