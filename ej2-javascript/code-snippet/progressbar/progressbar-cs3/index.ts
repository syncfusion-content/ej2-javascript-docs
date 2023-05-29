

import { ProgressBar, ITextRenderEventArgs } from "@syncfusion/ej2-progressbar";

let percentageProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        trackThickness: 24,
        progressThickness: 24,
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


