ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    timeOut: 0,
    target: document.body,
    position: { X: 'Right', Y: 'Bottom' },
    click: onClick
});
//Render initialized Toast component
toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = function () {
    toast.show();
}

function onClick(e ) {
 e.clickToClose = true;
} 

