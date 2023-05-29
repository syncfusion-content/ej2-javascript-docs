
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
  title: 'Matt sent you a friend request',
  content: 'You have a new friend request yet to accept',
  target: document.body,
  position: { X: 'Right', Y: 'Bottom' },
  beforeOpen: onBeforeOpen
});
//Render initialized Toast component
toast.appendTo('#element');

document.getElementById('show_toast').onclick = function () {
  toast.show();
}

function onBeforeOpen(e) {
  var audio = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
  audio.play();
}

