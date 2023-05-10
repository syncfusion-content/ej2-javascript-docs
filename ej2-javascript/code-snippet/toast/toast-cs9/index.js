
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
  title: 'Matt sent you a friend request',
  content: 'You have a new friend request yet to accept',
  target: document.body,
  showCloseButton: true,
  position: { X: "Right" },
  timeOut: 0,
});
//Render initialized Toast component
toast.appendTo('#element');

document.getElementById('show_toast').onclick = function () {
    toast.show();
}


