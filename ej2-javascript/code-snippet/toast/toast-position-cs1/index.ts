

import {Toast, ToastClickEventArgs } from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let toast: Toast = new Toast({
    title: 'Warning !',
    content: 'There was a problem with your network connection.'
    position: { X: 'Right', Y: 'Bottom' }
    click: onClick
});
toast.appendTo('#element');
toast.show();

let toast1: Toast = new Toast({
    title: 'Success !',
    content: 'Your message has been sent successfully.'
    position: { X: 'Left', Y: 'Bottom' }
    click: onClick
});
toast1.appendTo('#element1');
toast1.show();

document.getElementById('show_toast').onclick = () => {
  toast.show();
}

document.getElementById('show_toast1').onclick = () => {
  toast1.show();
}

function onClick(e: ToastClickEventArgs ): void {
  e.clickToClose = true;
}


