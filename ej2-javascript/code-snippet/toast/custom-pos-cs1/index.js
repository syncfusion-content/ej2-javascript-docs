
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept',
    target: document.body,
    icon: 'e-laura',
    position: { X: 'Right', Y: 'Bottom' }
});
//Render initialized Toast component
toast.appendTo('#element');
toast.show();

var listObj = new ej.dropdowns.DropDownList({
    index: 5,
    // set the placeholder to DropDownList input element
    placeholder: 'Select a position',
    // set the height of the popup element
    popupHeight: '200px',
    // bind the change event
    change: valueChange
});
listObj.appendTo('#position');

var radioButton = new ej.buttons.RadioButton({ label: 'Target', name: 'toast', value: 'Target', change: checkboxChange });
radioButton.appendTo('#radio1');

var radioButton1 = new ej.buttons.RadioButton({ label: 'Global', name: 'toast', value: 'Global', checked: true, change: checkboxChange1 });
radioButton1.appendTo('#radio2');

var radioButton2 = new ej.buttons.RadioButton({ label: 'Position', name: 'toastPos', value: 'Position', checked: true, change: checkboxChange2 });
radioButton2.appendTo('#dropdownRadio');

var radioButton3 = new ej.buttons.RadioButton({ label: 'Custom', name: 'toastPos', value: 'Custom', change: checkboxChange3 });
radioButton3.appendTo('#customRedio');

function toastShow(timeOutDelay) {
    setTimeout(
        function () {
            toast.show();
        }, timeOutDelay);
}

document.getElementById('show_Toast').onclick = function () {
    if (customFlag) {
        setcustomPosValue();
    }
    toast.show();
};

document.getElementById('hideToast').onclick = function () {
    toast.hide('All');
};
var customFlag = false;

function checkboxChange(e) {
    if (this.checked) {
        toast.hide('All');
        toast.target = '#toast_pos_target';
        toastShow(1000);
    }
}

function checkboxChange1(e) {
    if (this.checked) {
        toast.hide('All');
        toast.target = document.body;
        toastShow(1000);
    }
}

function checkboxChange2(e) {
    if (this.checked) {
        toast.hide('All');
        document.getElementById('dropdownChoose').style.display = 'table-cell';
        document.getElementById('customChoose').style.display = 'none';
        setToastPosValue(listObj.value.toString()); customFlag = false; toastShow(1000);
    }
}

function checkboxChange3(e) {
    if (this.checked) {
        toast.hide('All');
        document.getElementById('dropdownChoose').style.display = 'none';
        document.getElementById('customChoose').style.display = 'table-cell';
        setcustomPosValue(); customFlag = true; toastShow(1000);
    }
}

//Setting Toast Custom Position
function setcustomPosValue() {
    toast.position.X = parseInt((document.getElementById('xPos')).value, 10);
    toast.position.Y = parseInt((document.getElementById('yPos')).value, 10);
}

//Setting Toast Position
function setToastPosValue(value) {
    switch (value) {
        case 'topleft':
            toast.position.X = 'Left'; toast.position.Y = 'Top'; break;
        case 'topright':
            toast.position.X = 'Right'; toast.position.Y = 'Top'; break;
        case 'topcenter':
            toast.position.X = 'Center'; toast.position.Y = 'Top'; break;
        case 'topfullwidth':
            toast.width = '100%'; toast.position.X = 'Center'; toast.position.Y = 'Top'; break;
        case 'bottomleft':
            toast.position.X = 'Left'; toast.position.Y = 'Bottom'; break;
        case 'bottomright':
            toast.position.X = 'Right'; toast.position.Y = 'Bottom'; break;
        case 'bottomcenter':
            toast.position.X = 'Center'; toast.position.Y = 'Bottom'; break;
        case 'bottomfullwidth':
            toast.width = '100%'; toast.position.X = 'Center'; toast.position.Y = 'Bottom'; break;
    }
}

function valueChange(e) {
    toast.hide('All'); setToastPosValue(e.value.toString()); toastShow(1000);
}
