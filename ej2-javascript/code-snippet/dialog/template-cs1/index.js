/**
* Dialog template sample
*/

var icontemp = '<button id="sendButton" class="e-control e-btn e-primary" data-ripple="true">' + 'Send</button>';
var headerimg = '<img class="img2" style="display: inline-block;" src="https://ej2.syncfusion.com/products/typescript/dialog/template/images/1.png" alt="header image">';
var sendbutton = new ej.buttons.Button();
var proxy = this;

// Initialize Dialog component
var dialog = new ej.popups.Dialog({
    // Enables the header with template content
    header: headerimg + '<div class="dlg-template" title="Nancy" class="e-icon-settings"> Nancy </div>',
    // Enables the footer with template content
    footerTemplate: ' <input id="inVal" class="e-input" type="text" placeholder="Enter your message here!"/>' + icontemp,
    // Dialog content
    content: document.getElementById("dlgContent"),
    // Enables the close icon button in header
    showCloseIcon: true,
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    //Dialog width
    width: '400px',
    height: '250px',
    beforeOpen: onBeforeopen
});
// Render initialized Dialog
dialog.appendTo('#dialog');
sendbutton.appendTo('#sendButton');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function () {
    // Call the show method to open the Dialog
    dialog.show();
};

document.getElementById('sendButton').onkeydown = function (e) {
    if (e.keyCode === 13) {
        updateTextValue();
    }
};

document.getElementById('inVal').onkeydown = function (e) {
    if (e.keyCode === 13) {
        updateTextValue();
    }
};

document.getElementById('sendButton').onclick = function () {
    updateTextValue();
};

function onBeforeopen() {
    document.getElementById('dlgContent').style.visibility = 'visible';
}

function updateTextValue() {
    var enteredVal = document.getElementById('inVal');
    var dialogTextElement = document.getElementsByClassName('dialogText')[0];
    var dialogTextWrap = document.getElementsByClassName('dialogContent')[0];
    if (enteredVal.value !== '') {
        dialogTextElement.innerHTML = enteredVal.value;
        enteredVal.value = '';
    }
}

