---
title: "Setting maximum height to the Dialog | Syncfusion"
component: "Dialog"
description: "This section explains how to set maximum height to the Dialog."
---

# Setting maximum height to the Dialog

By default, the maxHeight for the Dialog is calculated based on the target. If the target is not specified externally, the Dialog consider the body as target and will calculate the maxHeight based on it. We have an option to set the maxHeight of the Dialog in the [beforeOpen](../../api/dialog/#beforeOpen) event.

{% tab template="dialog/max-height",sourceFiles="app.ts,index.html,styles.css", es5Template="max-height-template" %}

```typescript

import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Dialog component.
let dialog = new Dialog({
    width: '800px',
    showCloseIcon: true,
    position: { X: 'center', Y: 'center' },
    header: 'Dialog',
    created: onCreated,
    beforeOpen: onOpen,
    // The Dialog shows within the target element.
    target: document.getElementById("container"),
    visible:false,
});
// Render initialized Dialog.
dialog.appendTo('#dialog');
// Sample level code to handle the button click action.
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog.
    dialog.show();
}
function onCreated() {
    document.getElementById('dlgContent').style.display = 'block';
    dialog.refreshPosition();
}
function onOpen(args: beforeOpenEventArgs){
    // setting maxHeight to the Dialog.
    args.maxHeight = '300px';
}

```

{% endtab %}