
ej.base.enableRipple(true);

//Initialize Toast component

var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    target: document.body,
    position: { X: 'Right', Y: 'Bottom' },
    click: onClick
});
toast.appendTo('#element');
toast.show();

var toast1 = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    target: document.body,
    position: { X: 'Left', Y: 'Bottom' },
    click: onClick
});
toast1.appendTo('#element1');
toast1.show();

document.getElementById('show_toast').onclick = function () {
  toast.show();
};

document.getElementById('show_toast1').onclick = function () {
  toast1.show();
};

function onClick(e ) {
  e.clickToClose = true;
}  

