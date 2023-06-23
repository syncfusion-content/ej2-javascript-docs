


import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog, OpenEventArgs } from '@syncfusion/ej2-popups';

let dialogObj: Dialog = new Dialog({
    header: "Sign In",
    buttons: [{ buttonModel: { isPrimary: true, content: 'Yes' }, click: btnClick }, { buttonModel: { content: 'No'}, click: btnClick }],
    target: document.getElementById("container"),
    height: 'auto',
    width: '300px',
    open: onOpen
});
dialogObj.appendTo('#dialog');

document.getElementById('targetButton').onclick = (): void => {
    dialogObj.show();
};

function btnClick() {
    dialogObj.hide();
}

function onOpen(args: OpenEventArgs) {
  args.preventFocus = true;
}



