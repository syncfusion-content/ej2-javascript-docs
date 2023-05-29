
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    target: document.body,
    position: { X: 'Right', Y: 'Bottom' },
    animation: { show: { effect: "FadeIn" }, hide: { effect: "FadeOut" } },
});

//Render initialized Toast component
toast.appendTo('#element');

var listObjExpand = new ej.dropdowns.DropDownList({
    index: 0,
    placeholder: 'Select a animate type',
    change: () => { valueChange();  }
});
listObjExpand.appendTo('#showAnimation');

var listObjCollapse = new ej.dropdowns.DropDownList({
    placeholder: 'Select a animate type',
    change: () => { valueChange1();  }
});
listObjCollapse.appendTo('#hideAnimation');

document.getElementById('show_toast').onclick = function () {
    toast.show();
}

function valueChange() {
  toast.animation.show.effect = (listObjExpand.value);
}

function valueChange1() {
  toast.animation.hide.effect = (listObjCollapse.value);
}
toast.show();

