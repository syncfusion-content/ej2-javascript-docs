import {Toast} from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
let toast: Toast = new Toast({
    title: 'File Downloading',
    content: '<div class="progress"><span style="width: 80%"></span></div>',
    showCloseButton: true,
    target: '#toast_target',
    position: { X: "Center" }
    newestOnTop: true,
    showProgressBar: true,
    progressDirection: "Ltr"
});
toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = () => {
  toast.show();
}