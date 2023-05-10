ej.base.enableRipple(true);

function checkFloatingLabel(id) {
    var inputElement = document.getElementById(id);
    var labelElement = inputElement.parentElement.querySelector('.e-float-text');
    if (inputElement.value !== '') {
        labelElement.classList.remove('e-label-bottom');
        labelElement.classList.add('e-label-top');
    }
    else {
        labelElement.classList.remove('e-label-top');
        labelElement.classList.add('e-label-bottom');
    }
}
var inputField = document.getElementById('myText');
document.getElementById('valuebtn').onclick = function () {
    document.getElementsByClassName('myField')[0].value = '10';
    checkFloatingLabel('myText');
};
document.getElementById('removebtn').addEventListener('click', function () {
    document.getElementsByClassName('myField')[0].value = '';
    checkFloatingLabel('myText');
});


