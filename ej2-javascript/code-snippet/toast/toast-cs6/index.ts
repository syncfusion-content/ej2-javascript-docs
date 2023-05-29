

import {Toast, ToastBeforeCloseArgs} from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
let toast: Toast = new Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    position: { X: "Center" },
    beforeClose: onBeforeClose,
});
toast.appendTo('#element');
toast.show();
function onBeforeClose (args: ToastBeforeCloseArgs) {
        if (args.type === "swipe") {
            args.cancel = true;
        }
    }
document.getElementById('show_toast').onclick = () => {
  toast.show();
}


