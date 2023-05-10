


import {Toast} from '@syncfusion/ej2-notifications';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { enableRipple, Effect } from '@syncfusion/ej2-base';

enableRipple(true);
let toast: Toast = new Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    position: { X: 'Right', Y: 'Bottom' },
    animation: { show: { effect: "FadeIn" }, hide: { effect: "FadeOut" } },
});
toast.appendTo('#element');
toast.show();

let listObjExpand: DropDownList = new DropDownList({
    index: 0,
    placeholder: 'Select a animate type',
    change: () => { valueChange();  }
});
listObjExpand.appendTo('#showAnimation');

let listObjCollapse: DropDownList = new DropDownList({
    placeholder: 'Select a animate type',
    change: () => { valueChange1();  }
});
listObjCollapse.appendTo('#hideAnimation');

document.getElementById('show_toast').onclick = () => {
    toast.show();
}

function valueChange(): void {
  toast.animation.show.effect = <Effect>(listObjExpand.value);
}

function valueChange1(): void {
  toast.animation.hide.effect = <Effect>(listObjCollapse.value);
}



