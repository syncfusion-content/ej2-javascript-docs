
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    target: document.body,
    timeOut: 0
});

//Render initialized Toast component
toast.appendTo('#element');
toast.show();

