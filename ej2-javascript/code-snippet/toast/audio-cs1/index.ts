

import {Toast} from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let toast: Toast = new Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    position: { X: 'Right', Y: 'Bottom' }
    beforeOpen: onBeforeOpen
});
toast.appendTo('#element');

document.getElementById('show_toast').onclick = () => {
  toast.show();
}

function onBeforeOpen(e: ToastBeforeOpenArgs): void {
  let audio: HTMLAudioElement = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
  audio.play();
}


