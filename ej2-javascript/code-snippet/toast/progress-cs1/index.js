
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
  title: 'Matt sent you a friend request',
  content: 'You have a new friend request yet to accept',
  target: document.body,
  showProgressBar: true,
  position: { X: 'Right', Y: 'Bottom' },
  beforeOpen: onBeforeOpen
});

var listObjprogressColor = new ej.dropdowns.DropDownList({
    index: 0,
    placeholder: 'Select a animate type',
    popupHeight: '150px',
    change: () => { valueChange();  }
});
listObjprogressColor.appendTo('#Progress');

toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = function () {
    toast.show();
};

function valueChange() {
    var progressEles = toast.element.querySelectorAll('.e-toast-progress');
    for(var i =0; i< progressEles.length; i++) {
        progressEles[i].style.backgroundColor = listObjprogressColor.value;
    }
}

function onBeforeOpen(e) {
  var progress = e.element.querySelector('.e-toast-progress');
  progress.style.height = document.getElementById('progressHeight').value + 'px';
  progress.style.backgroundColor = listObjprogressColor.value;
}


