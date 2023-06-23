


import { DialogUtility } from '@syncfusion/ej2-popups';
import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

let promptBtn: Button = new Button({isPrimary: true});
promptBtn.appendTo('#promptBtn');
document.getElementById('promptBtn').onclick = (): void => {
        dialogObj = DialogUtility.confirm({
            title: 'Join Chat Group',
            content: '<p>Enter your name: </p><input id="name" />',
            width: '350px'
        });
        let inputobj1: TextBox = new TextBox({
            placeholder: 'Type here..'
        });
        inputobj1.appendTo('#name');
    };



