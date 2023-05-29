import {Toast} from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButton, ChangeEventArgs as CheckBoxChange, CheckBox, ChangeEventArgs} from '@syncfusion/ej2-buttons';

enableRipple(true);
let toast: Toast = new Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    position: { X: "Center", Y: "Bottom" },
    width: 400,
    height: 150,
});
toast.appendTo('#element');
toast.show();

let timeDelay = 500;
let radioButton: RadioButton = new RadioButton({ label: 'Top', name: 'toast', value: 'Target', change: checkboxChange });
radioButton.appendTo('#topAlign');

let radioButton2 = new RadioButton({ label: 'Bottom', name: 'toast', value: 'Global', checked: true, change: checkboxChange1 });
radioButton2.appendTo('#bottomAlign');

let checkBoxObj: CheckBox = new CheckBox({ label: '100% Width', change: onChange });
checkBoxObj.appendTo('#fullWidth');

function onChange(e: ChangeEventArgs): void {
  if (e.checked) {
    toast.hide();
    toast.width = "100%";
    toast.title="";
    toast.content="<div class='e-custom'>Take a look at our next generation <b>Javascript</b> <a href='https://ej2.syncfusion.com/home/index.html' target='_blank'>LEARN MORE</a></div>";
    toastShow(timeDelay);
  } else {
    toast.hide();
    toast.width= 300;
    toast.title= 'Matt sent you a friend request',
    toast.content='You have a new friend request yet to accept',
    toastShow(timeDelay);
  }
}

function checkboxChange(e: CheckBoxChange): void {
    if (e.event.target.checked) {
      toast.position.Y = "Top";
      toast.hide();
      toastShow(timeDelay);
    }
}

function checkboxChange1(e: CheckBoxChange): void {
    if (e.event.target.checked) {
      toast.position.Y = "Bottom";
      toast.hide();
      toastShow(timeDelay);
    }
}

function toastShow(timeOutDelay: number): void {
  setTimeout(
    () => {
        toast.show();
    }, timeOutDelay);
}

document.getElementById('show_toast').onclick = () => {
  toast.show();
}