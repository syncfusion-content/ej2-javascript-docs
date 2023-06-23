

import {Toast, ToastClickEventArgs } from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let toast: Toast = new Toast({
  title: 'Matt sent you a friend request',
  content: 'You have a new friend request yet to accept',
  timeOut: 0,
  position: { X: 'Right', Y: 'Bottom' }
  click: onClick
});
toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = () => {
  toast.show();
}

function onClick(e: ToastClickEventArgs ): void {
  e.clickToClose = true;
}


