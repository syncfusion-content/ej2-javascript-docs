ej.base.enableRipple(true);

var initialCount = 0;
var repeatCount = 0;
var btnObj = new ej.buttons.Button({ enableRepeat: true, repeatDelay: 400, repeatInterval: 100 });
btnObj.appendTo('#repeat-btn');
btnObj.clicked = function (args) {
    if (args.isRepeat) {
        repeatCount++;
        document.getElementById('repeat-count').textContent = String(repeatCount);
    }
    else {
        initialCount++;
        document.getElementById('initial-count').textContent = String(initialCount);
    }
};
document.getElementById('delay-input').addEventListener('change', function (e) {
    var val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0) {
        btnObj.repeatDelay = val;
    }
});
document.getElementById('interval-input').addEventListener('change', function (e) {
    var val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0) {
        btnObj.repeatInterval = val;
    }
});
document.getElementById('disabled-toggle').addEventListener('change', function (e) {
    btnObj.disabled = e.target.checked;
});
document.getElementById('reset-btn').addEventListener('click', function () {
    initialCount = 0;
    repeatCount = 0;
    document.getElementById('initial-count').textContent = '0';
    document.getElementById('repeat-count').textContent = '0';
});