

import { Signature } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let dialogObj: Dialog = new Dialog({
    header: 'Base64 of the signature',
    height: 'auto',
    animationSettings: { effect: 'Zoom', duration: 400 },
    showCloseIcon: true,
    width: '80%',
    visible: false
});
dialogObj.appendTo('#defaultdialog');

let button: Button = new Button({cssClass: `e-primary`, content:'Save As Base64'}, '#save');

document.getElementById('save').onclick = (): void => {
    dialogObj.content = signature.getSignature();
    dialogObj.show();
}



