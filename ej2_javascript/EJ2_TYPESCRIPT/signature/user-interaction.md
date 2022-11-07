---
title: "Signature User Interactions"
component: "Signature"
description: "This section explains the details of the user interactions of the signature control."
---

# User Interactions

The below interactions were available in Signature, and we can walk through one by one.

* Undo and Redo
* Clear
* Disabled
* ReadOnly

## Undo and Redo

In the Signature, every action can be maintained as a snap for undo and redo operations. And maintained SnapIndex for indexing the snap collection.

The [`undo`](https://ej2.syncfusion.com/documentation/api/signature/#undo) method reverts the last action of signature by decreasing SnapIndex value to  index previous snap. Here, [`canUndo`](https://ej2.syncfusion.com/documentation/api/signature/#canundo) method is used to ensure whether undo can be performed or not.

The [`redo`](https://ej2.syncfusion.com/documentation/api/signature/#redo) method reverts the last undo action of the signature by increasing the SnapIndex to  get the next snap. Here, [`canRedo`](https://ej2.syncfusion.com/documentation/api/signature/#canredo) method is used to ensure whether redo can be performed or not.

## Clear

The [`clear`](https://ej2.syncfusion.com/documentation/api/signature/#clear) method is used to clears the signature and makes the canvas empty. This is also considered in Undo/ Redo. Here, [`isEmpty`](https://ej2.syncfusion.com/documentation/api/signature/#isempty) method is used to ensure whether the signature is empty or not.

## Disabled

The [`disabled`](https://ej2.syncfusion.com/documentation/api/signature/#disabled) property is used to enables/disables the signature control. In the disabled state, the user is not allowed to draw signature. And it can’t be focused until the user enabled the signature.

## ReadOnly

The [`isReadOnly`](https://ej2.syncfusion.com/documentation/api/signature/#isreadonly) property is used to enables/disables the ReadOnly Signature. It can be focused but it prevents drawing in Signature.

The following sample explains about user interactions available in signature.

{% tab template="signature/user-interaction", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="user-template" %}

```typescript
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

```

{% endtab %}