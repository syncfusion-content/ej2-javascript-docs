---
title: "Accessibility"
component: "Dialog"
description: "Describes the accessibility standard of the modal dialog box control such as WAI-ARIA attributes, keyboard interaction, and theming."
---

# Accessibility

The Dialog characterized with complete ARIA Accessibility support which helps to accessible
by on-screen readers and other assistive technology devices. This component designed with the
reference of the guidelines document given in [WAI ARAI Accessibility Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

The Dialog component uses the `Dialog` role and following ARIA properties to its element based on its state.

| **Property** | **Functionalities** |
| --- | --- |
| aria-describedby | It indicates the Dialog content description is notified to the user through assistive technologies. |
| aria-labelledby | The Dialog title is notified to the user through assistive technologies. |
| aria-modal | For modal dialog it's value is true and non-modal dialog its value is false |
| aria-grabbed | Enable the draggable Dialog and starts dragging it is value is true and stopping the drag its value is false |

## Keyboard interaction

Keyboard interaction of Dialog component has designed based on
[WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) described for Dialog.
User can use the following shortcut keys to interact with the Dialog.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Esc</kbd></td><td>
Closes the Dialog. This functionality can be controlled by using
<a href="https://ej2.syncfusion.com/javascript/documentation/api/dialog/#closeonescape" target="_blank"> `closeOnEscape`</a> </td></tr>
<tr>
<td>
<kbd>Enter</kbd></td><td>
When the Dialog button or any input (except text area) is in focus state, when
pressing the Enter key, the click event associated with the primary button or button will
trigger. Enter key is not working when the Dialog content contains any text area with
initial focus</td></tr>
<tr>
<td>
<kbd>Ctrl + Enter</kbd></td><td>
When the Dialog content contains text area and it is in focus state, and press the Ctrl + Enter
key to call the click event
function associated with primary button</td></tr>
<tr>
<td>
<kbd>Tab</kbd></td><td>
Focus will be changed within the Dialog elements</td></tr>
<tr>
<td>
<kbd>Shift + Tab</kbd></td><td>
The Focus will be changed previous focusable element within the Dialog elements. When focusing a
first focusable element in the Dialog, then press the shift + tab key, it will change the focus
to last focusable element</td></tr>
</table>

{% tab template="dialog/access",sourceFiles="app.ts,index.html,styles.css", es5Template="access-template" %}

```typescript

import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Dialog component
let dialog: Dialog = new Dialog({
    // Enables the header
    header: 'Feedback',
    // Dialog content
    content: document.getElementById("dlgContent"),
    // Enables the close icon in header
    showCloseIcon: true,
    // Enables the footer buttons
    buttons: [{
        // Accessing button component properties by buttonModel property
        buttonModel: {
            //Enables the primary button
            isPrimary: true,
            content: 'Submit',
            cssClass: 'e-flat',
        },
        // Click the footer buttons to hide the Dialog
        click: function () {
            this.hide();
        }
    }],
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '400px',
    // Dialog height
    height: '330px',
    beforeOpen: onBeforeopen
});
// Render initialized Dialog
dialog.appendTo('#dialog');
// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
    dialog.show();
};

function onBeforeopen(): void {
    document.getElementById('dlgContent').style.visibility = 'visible';
}

```

{% endtab %}

## See Also

* [Show dialog with fullscreen](./how-to/show-dialog-with-full-screen/)
