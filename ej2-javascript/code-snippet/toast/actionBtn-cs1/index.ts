

import {Toast} from '@syncfusion/ej2-notifications';
import { enableRipple, closest} from '@syncfusion/ej2-base';

enableRipple(true);
let toast: Toast = new Toast({
    title: 'Anjolie Stokes',
    content: 'Thanks for the update!',
    icon: 'e-laura',
    position: { X: "Right", Y: "Bottom" },
    width: 280,
    height: 120,
        buttons : [{
        model: { content: "Ignore" }, click: btnClick
    }, {
      model: { content: "reply" }
    }]
});
toast.appendTo('#elementToastTime');
toast.show();

document.getElementById('show_toast').onclick = () => {
  toast.show();
}

function btnClick(e: Event) {
 let toastEle = closest(e.target, '.e-toast');
 toast.hide(toastEle);
}



