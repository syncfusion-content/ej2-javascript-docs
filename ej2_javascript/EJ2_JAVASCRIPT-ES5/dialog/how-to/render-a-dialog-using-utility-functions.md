---
title: "Dialog utility"
component: "Dialog"
description: "Covers customization features such as load content to the dialog from external sources, built-in alert, and confirmation model dialog."
---

# Render a dialog using utility functions

The dialog component provides built-in utility functions to render the alert and confirm dialogs with the minimal code.
The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [header](../../api/dialog/#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [content](../../api/dialog/#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [isModal](../../api/dialog/#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [position](../../api/dialog/#position) property { X: 'center', Y: 'center'}|
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for OK button click', text: 'Yes' // <-- Default value is 'OK'}`|
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for ‘Cancel’ button click', text: 'No' // <-- Default value is 'Cancel'}`|
| isDraggable |Specifies the value whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
| closeOnEscape |When set to true, you can close the dialog by pressing ESC key. |
| animationSettings |Specifies the animation settings of the dialog component. |
| cssClass | Specifies the CSS class name that can be appended to the dialog. |
| zIndex | Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open | Event which is triggered after the dialog is opened. |
| Close | Event which is triggered after the dialog is closed. |

## Alert dialog

An alert dialog box is used to display warning like messages to the users. Use the following code to render a simple alert dialog in an application.

{% tab template="dialog/dialog-utility-alert",sourceFiles="app.ts,index.html", es5Template="dialog-utility-alert-template" %}

```typescript
import { DialogUtility } from '@syncfusion/ej2-popups';

document.getElementById('targetButton').onclick = (): void => {
    // Initialize and render alert dialog
    DialogUtility.alert('This is an Alert Dialog!');
};

```

{% endtab %}

### Render an alert dialog with options

{% tab template="dialog/dialog-utility-alert1",sourceFiles="app.ts,index.html", es5Template="dialog-utility-alert1-template" %}

```typescript
import { DialogUtility } from '@syncfusion/ej2-popups';

document.getElementById('targetButton').onclick = (): void => {
    // Initialize and render alert dialog with options
    DialogUtility.alert({
        title: 'Alert Dialog',
        content: "This is an Alert Dialog!",
        okButton: {  text: 'OK', click: okClick.bind(this) },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
};

function okClick(): void {
    alert('you clicked OK button');
}

```

{% endtab %}

## Confirm dialog

A confirm dialog displays a specified message along with ‘OK’ and ‘Cancel’ button.

{% tab template="dialog/dialog-utility-confirm",sourceFiles="app.ts,index.html", es5Template="dialog-utility-confirm-template" %}

```typescript
import { DialogUtility } from '@syncfusion/ej2-popups';

document.getElementById('targetButton').onclick = (): void => {
    // Initialize and render Confirm dialog
    DialogUtility.confirm('This is a Confirmation Dialog!');
};

```

{% endtab %}

### Render a confirmation dialog with options

{% tab template="dialog/dialog-utility-confirm1",sourceFiles="app.ts,index.html", es5Template="dialog-utility-confirm1-template" %}

```typescript
import { DialogUtility } from '@syncfusion/ej2-popups';

//  Initialize and render Confirm dialog with options
document.getElementById('targetButton').onclick = (): void => {
    DialogUtility.confirm({
        title: ' Confirmation Dialog',
        content: "This is a Confirmation Dialog!",
        okButton: {  text: 'OK', click: okClick.bind(this) },
        cancelButton: {  text: 'Cancel', click: cancelClick.bind(this)},
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
};

function okClick(): void {
    alert('you clicked OK button');
}

function cancelClick(): void {
  alert('you clicked Cancel button');
}

```

{% endtab %}