ej.base.enableRipple = true;

var signature = new ej.inputs.Signature({change: changeEvent}, '#signature');

var undoButton = new ej.buttons.Button({cssClass: 'e-primary', disabled: true}, '#undo');
undoButton.element.onclick = function (e) {
    if (!signature.disabled && !signature.isReadOnly) {
        signature.undo();
    }
};

var redoButton = new ej.buttons.Button({cssClass: 'e-primary', disabled: true}, '#redo');
redoButton.element.onclick = function (e) {
    if (!signature.disabled && !signature.isReadOnly) {
        signature.redo();   
    }
};

var clearButton = new ej.buttons.Button({cssClass: 'e-primary', disabled: true}, '#clear');
clearButton.element.onclick = function (e) {
    if (!signature.disabled && !signature.isReadOnly) {
        signature.clear();   
    }
};

var checkBox1 = new ej.buttons.CheckBox({ label: 'Disabled', change: onChangeDisable}, '#disable');
function onChangeDisable(args) {
    signature.disabled = args.checked;
}

var checkBox2 = new ej.buttons.CheckBox({ label: 'ReadOnly', change: onChangeReadonly}, '#readonly');
function onChangeReadonly(args) {
    signature.isReadOnly = args.checked;
}

function changeEvent(args) {
    if (!signature.disabled && !signature.isReadOnly) {
        if (signature.canUndo()) {
            undoButton.disabled = false;
        } else {
            undoButton.disabled = true;
        }
        if (signature.canRedo()) {
            redoButton.disabled = false;
        } else {
            redoButton.disabled = true;
        }
        if (!signature.isEmpty()) {
            clearButton.disabled = false;
        } else {
            clearButton.disabled = true;
        }
    }
}

