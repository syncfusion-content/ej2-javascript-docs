ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    timeOut: 0,
    target: document.body,
    position: { X: 'Right', Y: 'Bottom' },
    click: onClick
});

var toastFlag = 0;
var toasts = [ { template: '2 Mail has received'},{ template: 'User Guest Logged in'},{ template: 'Logging in as Guest'},{ template: 'Ticket has reserved '},{ template: '#templateToast' }];

//Render initialized Toast component
toast.appendTo('#element');
toast.show(toasts[toastFlag]);
++toastFlag;

document.getElementById('show_toast').onclick = function () {
  toast.show(toasts[toastFlag]);
  ++toastFlag;
  if (toastFlag === (toasts.length)) {
      toastFlag = 0;
  }
};

function onClick(e ) {
 e.clickToClose = true;
} 

