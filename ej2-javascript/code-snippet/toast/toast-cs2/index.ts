

import {Toast} from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
let toast: Toast = new Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    position: { X: "Center" }
});
toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = () => {
  toast.show();
}



