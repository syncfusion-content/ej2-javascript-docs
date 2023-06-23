
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
  template: document.getElementById('template_toast_ele').innerHTML,
  position:  { X: 'Right', Y: 'Bottom' },
  target: document.body,
  extendedTimeout: 0,
  timeOut: 120000,
});
//Render initialized Toast component
toast.appendTo('#element');
toast.show();

var btnEle = document.getElementById('toast_mail_remainder');
var snoozeFlag = false;

document.getElementById('show_toast').onclick = function () {
  toast.show();
};


