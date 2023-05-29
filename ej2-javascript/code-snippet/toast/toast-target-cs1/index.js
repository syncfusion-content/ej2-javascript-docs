
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    title: 'File Downloading',
    content: '<div class="progress"><span style="width: 80%"></span></div>',
    showCloseButton: true,
    target: '#toast_target',
    position: { X: "Center" },
    newestOnTop: true,
    showProgressBar: true
});
//Render initialized Toast component
toast.appendTo('#element');
toast.show();

document.getElementById('show_toast').onclick = function () {
  toast.show();
};