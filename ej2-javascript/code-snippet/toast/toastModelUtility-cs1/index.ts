

import { ToastUtility, Toast } from '@syncfusion/ej2-notifications';

let toastObj: Toast;
document.getElementById('show_Toast').onclick = (): void => {
    toastObj = ToastUtility.show({
        title: 'Toast Title',
        content: 'Toast shown using utility function with ToastModel',
        timeOut: 20000,
        position: { X: 'Right', Y: 'Bottom' },
        showCloseButton: true,
        click: toastClick,
        buttons:  [{
            model: { content: 'Close' }, click: toastClose
        }]
    });
};

function toastClick() {
    console.log('Toast click event triggered');
}

function toastClose() {
    toastObj.hide();
}



