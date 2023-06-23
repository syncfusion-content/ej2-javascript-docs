

import {Toast, ToastClickEventArgs } from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let toast: Toast = new Toast({
    position: { X: 'Right', Y: 'Bottom' }
    click: onClick
});

let toastFlag: number = 0;
let toasts = [ { template: '2 Mail has received'},{ template: 'User Guest Logged in'},{ template: 'Logging in as Guest'},{ template: 'Ticket has reserved '},{ template: '#templateToast' }];

toast.appendTo('#element');
toast.show(toasts[toastFlag]);
++toastFlag;

document.getElementById('show_toast').onclick = () => {
  toast.show(toasts[toastFlag]);
  ++toastFlag;
  if (toastFlag === (toasts.length)) {
      toastFlag = 0;
  }
}

function onClick(e: ToastClickEventArgs ): void {
  e.clickToClose = true;
}


