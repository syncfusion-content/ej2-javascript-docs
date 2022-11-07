---
title: "Dialog Getting Started"
component: "Dialog"
description: "Helps to get started with the dialog control along with its key features such as modal dialog, positioning, and draggable."
---

# Getting Started

The following section explains the required steps to build the Dialog component with its basic
usage in step by step procedure.

## Dependencies

The following list of dependencies are required to use Dialog component in your application.

```javascript
|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Set up your development environment

To get you started with Dialog component, you can clone the
[Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart.git) project and
install the packages by using the following commands.

```shell
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common
settings (`src/styles/styles.css`, `system.config.js` ) to start
with all Essential JS 2 components.

## Configuring system JS

[Syncfusion Dialog packages](#dependencies) have to be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',
        //Syncfusion packages mapping
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding Dialog to the project

Add the div element with id attribute `#dialog` inside the body tag in your `index.html`.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Dialog Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div>
      <!--element which is going to render the Dialog -->
        <button class="e-control e-btn" id="targetButton" role="button" e-ripple="true">Open Dialog</button>
        <div id="dialog"></div>
    </div>
</body>

</html>

```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

Now import the  Dialog component into your `app.ts` and append it to `#dialog`
`[src/app/app.ts]`

```typescript

import { Dialog } from '@syncfusion/ej2-popups';

// Initialization of Dialog component
let dialog: Dialog = new Dialog({
    // Dialog content
    content: 'This is a Dialog with content',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px'
});

// Render initialized Dialog
dialog.appendTo('#dialog');

```

> In the dialog control, max-height is calculated based on the dialog target element height. If the target property is not configured, the document.body is considered as a target. Therefore, to show a dialog in proper height, you need to add min-height to the target element.

## Run the application

The `Essential JS 2 quickstart` application project is configured to compile and run the application in browser.
Use the following command to run the application.

```shell
npm start
```

{% tab template="dialog/getting-started",sourceFiles="app.ts,index.html,styles.css",isDefaultActive=true, es5Template="basic-template" %}

```typescript

import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialization of Dialog
let dialog: Dialog = new Dialog({
    // Dialog content
    content: 'This is a Dialog with content',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px'
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
     dialog.show();
}

```

{% endtab %}

> In the dialog control, If the dialog is rendered based on the body, then the dialog will get the height based on its body element height. If the height of the dialog is larger than the body height, then the dialog's height will not be set. For this scenario, we can set the CSS style for the html and body to get the dialog height.

```css

html, body {
   height: 100%;
}

```

## Modal dialog

A [modal](../api/dialog/#ismodal) shows an overlay behind the Dialog. So, the user
should interact the Dialog compulsory before interacting with the remaining content in an
application.

While the user clicks the overlay, the action can be handled through the
[`overlayClick`](../api/dialog/#overlayclick) event. In the below sample, the
Dialog close action is performed while clicking on the overlay.

> When the modal dialog is opened, the Dialog's target scrolling will be disabled. The scrolling
will be enabled again once close the Dialog.

{% tab template="dialog/modal",sourceFiles="app.ts,index.html,styles.css", es5Template="modal-template" %}

```typescript

import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Dialog component
let dialog = new Dialog({
    // Enables modal dialog
    isModal:true,
    // overlayClick event handler
    overlayClick: onOverlayClick,
    // Dialog content
    content: 'This is a modal dialog',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px'
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
    dialog.show();
}

// Sample level code to hide the Dialog when click the Dialog overlay
function onOverlayClick() {
    dialog.hide();
}

```

{% endtab %}

## Enable header

The Dialog header can be enabled by adding the header content as text or HTML content through the
[`header`](../api/dialog/#header) property.

{% tab template="dialog/header",sourceFiles="app.ts,index.html,styles.css", es5Template="header-template" %}

```typescript
import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialization of Dialog component
let dialog = new Dialog({
            // Enables the header
            header: 'Dialog',
            // Enables the close icon button in header
            showCloseIcon: true,
            // Dialog content
            content: 'This is a dialog with header',
            // The Dialog shows within the target element
            target: document.getElementById("container"),
            // Dialog width
            width: '250px',
});

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
     dialog.show();
}
// Render initialized Dialog
dialog.appendTo('#dialog');
```

{% endtab %}

## Configure action buttons

The Dialog provides built-in support to render the action buttons on the footer (for ex: 'OK' or
'Cancel' buttons) by using [buttons](../api/dialog/#buttons) property. Each Dialog button allows the user
to perform any action while clicking on it.

The primary button will be focused automatically on open the Dialog, and add the [click](../api/dialog/buttonPropsModel/#click)
event to handle the actions

> When the Dialog initialize with more than one primary buttons, the first primary button gets focus on open the Dialog.

The below sample render with buttons and its action.

{% tab template="dialog/footer",sourceFiles="app.ts,index.html,styles.css", es5Template="footer-template" %}

```typescript

import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Dialog component
let dialog = new Dialog({
    // Enables the footer buttons
    buttons: [
        {
            // Click the footer buttons to hide the Dialog
            'click': () => { dialog.hide();},
            // Accessing button component properties by buttonModel property
            buttonModel: {
                //Enables the primary button
                isPrimary: true,
                content: 'OK'
            }
        },
        {
            'click': () => { dialog.hide(); },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat'
            }
        }
    ],
    // Enables the header
    header: 'Dialog',
    // Dialog content
    content: 'This is a Dialog with button and primary button',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px'
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
    dialog.show();
}

```

{% endtab %}

## Draggable

The Dialog supports to [drag](../api/dialog/#allowdragging) within its target
container by grabbing the Dialog header, which allows the user to reposition the
Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled.
From `16.2.x` version, enabled draggable support for modal dialog also.

{% tab template="dialog/draggable",sourceFiles="app.ts,index.html,styles.css", es5Template="draggable-template" %}

```typescript

import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let dialog = new Dialog({
    // Enables the draggable option
    allowDragging: true,
    // Enables the header
    header: 'Dialog',
    // Dialog content
    content: 'This is a Dialog with drag enabled',
    // Enables the draggable option
    allowDragging: true,
    // Enables the footer buttons,
    buttons: [
        {
            // Click the footer buttons to hide the Dialog
            'click': () => {
                dialog.hide();
            },
            // Accessing button component properties by buttonModel property
            buttonModel:{
                //Enables the primary button
                isPrimary: true,
                content:'OK'
            }
        },
        {
            'click': () => {
                dialog.hide();
            },
            buttonModel:{
                content:'Cancel',
                cssClass:'e-flat'
            }
        }
    ],
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px',
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
     dialog.show();
}
```

{% endtab %}

## Positioning

The Dialog can be positioned using the [position](../api/dialog/#position) property by providing the X and Y co-ordinates. It can be positioned inside the target of the container or `<body>` of the element based on the given X and Y values.

for X is: left, center, right (or) any offset value
for Y is: top, center, bottom (or) any offset value

The below example demonstrates the different Dialog positions.

{% tab template="dialog/positioning",sourceFiles="app.ts,index.html,styles.css", es5Template="position-template" %}

```typescript

import { Dialog } from '@syncfusion/ej2-popups';
import { RadioButton } from '@syncfusion/ej2-buttons';

let dialog: Dialog = new Dialog({
    // Set Dialog position
    position: { X: 'center', Y: 'center' },
    // Disable the Esc key option to hide the Dialog
    closeOnEscape: false,
    // Enables the close icon button in header
    showCloseIcon: true,
    // Enables the header
    header: 'Choose a Dialog Position',
    // The dialog shows within the target element
    target: document.getElementById('target'),
    // Dialog width
    width: '440px',
    open: dialogOpen,
    close: dialogClose,
    //Dialog footerTemplate
    footerTemplate: '<span id="posvalue" style="float:left;margin-left:8px;padding:10px;">Position: { X: "Center", Y: "Center" }</span>'

});

// Render initialized Dialog
dialog.appendTo('#dialog');

let onChangeHandler: any = (args: any) => {
    dialog.position.X = args.value.split(' ')[0];
    dialog.position.Y = args.value.split(' ')[1];
    let txt: string[] = args.event.target.parentElement.querySelector('.e-label').innerText.split(' ');
    document.getElementById('posvalue').innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
};

let radioButton: RadioButton = new RadioButton({label: 'Left Top', value: 'left top', change: onChangeHandler });
radioButton.appendTo('#radio1');

radioButton = new RadioButton({label: 'Center Top', value: 'center top', change: onChangeHandler});
radioButton.appendTo('#radio2');

radioButton = new RadioButton({label: 'Right Top', value: 'right top', change: onChangeHandler});
radioButton.appendTo('#radio3');

radioButton = new RadioButton({label: 'Left Center', value: 'left center', change: onChangeHandler});
radioButton.appendTo('#radio4');

radioButton = new RadioButton({label: 'Center Center', value: 'center center', change: onChangeHandler, checked: true});
radioButton.appendTo('#radio5');

radioButton = new RadioButton({label: 'Right Center', value: 'right center', change: onChangeHandler});
radioButton.appendTo('#radio6');

radioButton = new RadioButton({label: 'Left Bottom', value: 'left bottom', change: onChangeHandler});
radioButton.appendTo('#radio7');

radioButton = new RadioButton({label: 'Center Bottom', value: 'center bottom', change: onChangeHandler});
radioButton.appendTo('#radio8');

radioButton = new RadioButton({label: 'Right Bottom', value: 'right bottom', change: onChangeHandler});
radioButton.appendTo('#radio9');

document.getElementById('dialogBtn').onclick = (): void => {
    dialog.show();
};

function dialogOpen(): void {
    document.getElementById('dialogBtn').style.display = 'none';
}

function dialogClose(): void {
    document.getElementById('dialogBtn').style.display = 'block';
}

```

{% endtab %}

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./dialog-utility/)
