

import { Toast, ToastOpenArgs, ToastCloseArgs, ToastBeforeOpenArgs } from '@syncfusion/ej2-notifications';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { compile, Browser, closest } from '@syncfusion/ej2-base';

let toast: Toast = new Toast({
  template: document.getElementById('template_toast_ele').innerHTML,
  position:  { X: 'Right', Y: 'Bottom' },
  target: document.body,
  extendedTimeout: 0,
  timeOut: 120000
});
toast.appendTo('#element');
toast.show();

let btnEle: HTMLElement = document.getElementById('toast_mail_remainder');
let snoozeFlag: boolean = false;

document.getElementById('show_toast').onclick = () => {
    toast.show();
}



