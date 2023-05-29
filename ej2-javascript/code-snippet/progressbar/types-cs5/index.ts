



import { ProgressBar } from '@syncfusion/ej2-progressbar';

    let uploadProgress: ProgressBar = new ProgressBar({
        type: 'Circular',
        height: '60',
        value: 100,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    uploadProgress.appendTo('#lineardeterminate');
    let successProgress: ProgressBar = new ProgressBar({
        type: 'Circular',
        height: '60',
        isIndeterminate: true,
        value: 20,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
    });
    successProgress.appendTo('#linearindeterminate');
    let warningsProgress: ProgressBar = new ProgressBar({
        type: 'Circular',
        height: '60',
        value: 40,
        secondaryProgress: 60,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
    });
    warningsProgress.appendTo('#linearbuffer');
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
    errorProgress.appendTo('#linearsegment');



