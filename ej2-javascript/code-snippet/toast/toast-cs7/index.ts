

import {Toast, ToastModel} from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let maxCount: number = 3;
let toasts: ToastModel[] = [
    { title: 'Warning !', content: 'There was a problem with your network connection.' },
    { title: 'Success !', content: 'Your message has been sent successfully.' },
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.' },
    { title: 'Information !', content: 'Please read the comments carefully.' }
];
let toastFlag: number = 0;

let toast: Toast = new Toast({
    title: 'Sample Toast Title',
    content: 'Sample Toast content'
    position: { X: 'Right', Y: 'Bottom' }
    beforeOpen: onBeforeOpen
});
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

function onBeforeOpen(e: ToastBeforeOpenArgs): void {
  if (maxCount === toast.element.childElementCount) {
   e.cancel =true;
  } else {
    e.cancel = false;
  }
}



