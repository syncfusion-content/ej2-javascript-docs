ej.base.enableRipple(true);

var button = new ej.buttons.Button({cssClass: `e-small`}, '#button');
var clear = new ej.buttons.Button({cssClass: `e-small`}, '#clear');
var timeout = null;

document.getElementById('clear').onclick = () => {
    document.getElementById('eventlog').innerHTML = '';
};

document.getElementById('button').addEventListener("mousedown", mouseDownHandler);
document.getElementById('button').addEventListener("mouseup", mouseUpHandler);

function mouseUpHandler(event) {
    clearInterval(timeout);
}

function mouseDownHandler(event) {
    if (event.which === 1) {
        appendSpanElement('Button click event called<hr>');
        timeout = setInterval(clickEventHandler, 200);
    }
}
function clickEventHandler() {
    ej.base.EventHandler.trigger(button.element, "click");
    appendSpanElement('Button click event called<hr>');
}
function appendSpanElement(text) {
    var span = document.createElement('span');
    span.innerHTML = text;
    var log = document.getElementById('eventlog');
    log.insertBefore(span, log.firstChild);
}
document.getElementById('loader').style.display = "none";
document.getElementById('container').style.visibility = "visible";

