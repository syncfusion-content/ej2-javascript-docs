
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    position: { X: "Center", Y: "Bottom" },
    width: 400,
    height: 150,
});

var radioButton = new ej.buttons.RadioButton({ label: 'Top', name: 'toast', value: 'Target', change: checkboxChange });
radioButton.appendTo('#topAlign');

var radioButton2 = new ej.buttons.RadioButton({ label: 'Bottom', name: 'toast', value: 'Global', checked: true, change: checkboxChange1 });
radioButton2.appendTo('#bottomAlign');

var checkBoxObj = new ej.buttons.CheckBox({ label: '100% Width', change: onChange });
checkBoxObj.appendTo('#fullWidth');
toast.appendTo('#element');

let timeDelay = 500;

function onChange(e) {
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

function toastShow(timeOutDelay) {
    setTimeout(
        function () {
            toast.show();
        }, timeOutDelay);
}

function checkboxChange(e) {
    if (e.event.target.checked) {
      toast.position.Y = "Top";
      toast.hide();
      toastShow(timeDelay);
    }
}

function checkboxChange1(e) {
    if (e.event.target.checked) {
      toast.position.Y = "Bottom";
      toast.hide();
      toastShow(timeDelay);
    }
}

document.getElementById('show_toast').onclick = function () {
    toast.show();
};