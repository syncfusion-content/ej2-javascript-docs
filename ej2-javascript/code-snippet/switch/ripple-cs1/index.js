ej.base.enableRipple(true)

var switchObj = new ej.buttons.Switch({ checked: true });
switchObj.appendTo('#switch1');

// Function to handle ripple effect for Switch with label.
document.querySelector('.lSize label').addEventListener('mouseup', rippleHandler);
document.querySelector('.lSize label').addEventListener('mousedown', rippleHandler);

function rippleHandler(e) {
    var rippleSpan = this.parentElement.nextElementSibling.querySelector('.e-ripple-container');
    if (rippleSpan) {
        ejs.buttons.rippleMouseHandler(e, rippleSpan);
    }
}


