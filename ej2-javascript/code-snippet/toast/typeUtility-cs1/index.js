//Initialize Toast component using utility
var toastObj;
document.getElementById('info_Toast').onclick = function () {
    toastObj = ej.notifications.ToastUtility.show('Please read the comments carefully', 'Information', 20000);
};
document.getElementById('success_Toast').onclick = function () {
    toastObj = ej.notifications.ToastUtility.show('Your message has been sent successfully', 'Success', 20000);
};
document.getElementById('error_Toast').onclick = function () {
    toastObj = ej.notifications.ToastUtility.show('A problem has been occurred while submitting the data', 'Error', 20000);
};
document.getElementById('warning_Toast').onclick = function () {
    toastObj = ej.notifications.ToastUtility.show('There was a problem with your network connection', 'Warning', 20000);
};
document.getElementById('hide_Toast').onclick = function () {
   toastObj.hide('All');
};



