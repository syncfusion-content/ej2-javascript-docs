
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
  title: 'Anjolie Stokes',
  content: 'Thanks for the update!',
  icon: 'e-laura',
  position: { X: "Right", Y: "Bottom" },
  width: 280,
  height: 120,
  buttons: [{
        model: { content: "Ignore" }, click: btnClick
    }, {
        model: { content: "reply" }
    }]
});
//Render initialized Toast component
toast.appendTo('#elementToastTime');
toast.show();

document.getElementById('show_toast').onclick = function () {
  toast.show();
};

function btnClick(e) {
  var toastEle = ej.base.closest(e.target, '.e-toast');
  toast.hide(toastEle);
}

