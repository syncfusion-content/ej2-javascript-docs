
ej.base.enableRipple(true);

//Initialize Toast component
var toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.', isOpen: false},
    { title: 'Success !', content: 'Your message has been sent successfully.', isOpen: false },
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.', isOpen: false }
];
var toastFlag = 0;

var toast = new ej.notifications.Toast({
    position: {
        X: 'Center'
    },
    beforeOpen: onBeforeOpen,
    close: onClose,
    created: onCreate
});
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

function onClose(e) {
  for (var i= 0; i < toasts.length; i++) {
    if (toasts[i].title === e.options.title) {
        toasts[i].isOpen = false;
    }
  }
}

function onCreate(e) {
    toast.show(toasts[toastFlag]);
    ++toastFlag;
}

function onBeforeOpen(e) {
    if (preventDuplicate(e)) {
        e.cancel = true;
	}
}

function preventDuplicate(e) {
    for (var i = 0; i < toasts.length; i++) {
      if (toasts[i].title === e.options.title && !toasts[i].isOpen) {
       toasts[i].isOpen = true;
        return false;
      }
    }
    return true;
}

