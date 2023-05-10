

import {Toast, ToastModel} from '@syncfusion/ej2-notifications';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let toast: Toast = new Toast({
  title: 'Matt sent you a friend request',
  content: 'You have a new friend request yet to accept',
  showProgressBar: true,
  position: { X: 'Right', Y: 'Bottom' }
  beforeOpen: onBeforeOpen
});

let listObjprogressColor: DropDownList = new DropDownList({
  index: 0,
  placeholder: 'Select a animate type',
  popupHeight: '150px',
  change: () => { valueChange();  }
});
listObjprogressColor.appendTo('#Progress');

toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = () => {
  toast.show();
}

function valueChange() {
    let progressEles: NodeList = toast.element.querySelectorAll('.e-toast-progress');
    progressEles.forEach((ele: HTMLElement)=> {
      ele.style.backgroundColor = listObjprogressColor.value;
    })
}

function onBeforeOpen(e: ToastBeforeOpenArgs): void {
  let progress = e.element.querySelector('.e-toast-progress');
  progress.style.height = document.getElementById('progressHeight').value + 'px';
  progress.style.backgroundColor = listObjprogressColor.value;
}


