

import { Signature, SignatureChangeEventArgs } from '@syncfusion/ej2-inputs';
import { CheckBox, ChangeEventArgs, Button } from '@syncfusion/ej2-buttons';

let signature: Signature = new Signature({change: changeEvent});
signature.appendTo('#signature');

let undoButton: Button = new Button({cssClass: 'e-primary', disabled: true}, '#undo');
undoButton.element.onclick = function (e) {
    if (!signature.disabled && !signature.isReadOnly) {
        signature.undo();
    }
};

let redoButton: Button = new Button({cssClass: 'e-primary', disabled: true}, '#redo');
redoButton.element.onclick = function (e) {
    if (!signature.disabled && !signature.isReadOnly) {
        signature.redo();
    }
};

let clearButton: Button = new Button({cssClass: 'e-primary', disabled: true}, '#clear');
clearButton.element.onclick = function (e) {
    if (!signature.disabled && !signature.isReadOnly) {
        signature.clear();
    }
};

let checkBox1: CheckBox = new CheckBox({ label: 'Disabled', change: onChangeDisable}, '#disable');
function onChangeDisable(args: ChangeEventArgs): void {
        signature.disabled = args.checked;
    }

let checkBox2: CheckBox = new CheckBox({ label: 'ReadOnly', change: onChangeReadonly}, '#readonly');
function onChangeReadonly(args: ChangeEventArgs): void {
        signature.isReadOnly = args.checked;
    }

function changeEvent(args: SignatureChangeEventArgs) {
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



