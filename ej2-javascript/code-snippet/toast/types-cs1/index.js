
ej.base.enableRipple(true);

//Initialize Toast component
var toasts = [
  { title: 'Warning !', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning' },
  { title: 'Success !', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success'},
  { title: 'Error !', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger' },
  { title: 'Information !', content: 'Please read the comments carefully.', cssClass: 'e-toast-info' } 
];

var toastFlag = 0;
var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    target: document.body,
    position: { X: 'Right', Y: 'Bottom' }
});

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


