

import { Signature } from '@syncfusion/ej2-inputs';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let ddlObj: DropDownList = new DropDownList(
    {
        value: 'Arial',
        popupHeight: '200px',
    });
ddlObj.appendTo('#ddl');

let ddlObj1: DropDownList = new DropDownList(
    {
        value: '20',
        popupHeight: '200px',
    });
ddlObj1.appendTo('#ddl1');

let button: Button = new Button({cssClass: 'e-primary'}, '#draw');

button.element.onclick = function (e) {
    let text: string = document.getElementById('text').value;
    let font: string = ddlObj.value;
    let size: number = ddlObj1.value;
    signature.draw(text, font, size);
};



