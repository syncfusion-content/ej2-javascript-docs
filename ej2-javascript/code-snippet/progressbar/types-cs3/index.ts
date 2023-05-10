


import { ProgressBar } from '@syncfusion/ej2-progressbar';

    let uploadProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        height: '60',
        value: 100,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        tooltip:{
            enable: true,
            format: "Progress: ${value}",
            textStyle: {
                fontWeight: '600',
                size: '9px',
                color: 'red',
                fontFamily: 'Roboto',
                fontStyle: 'Italic'
            }
        }
    });
    uploadProgress.appendTo('#lineardeterminate');



