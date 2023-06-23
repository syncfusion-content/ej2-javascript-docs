
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    position: { X: "Center" },
    beforeClose: function (args) {
            if (args.type = "swipe") {
                args.cancel = true;
            }
        },
});
//Render initialized Toast component
toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = function () {
    toast.show();
}

