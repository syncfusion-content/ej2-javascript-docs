

import { Signature } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let button: Button = new Button({cssClass: 'e-primary'}, '#open');

button.element.onclick = function (e) {
    let sign: string = document.getElementById('text').value;
    signature.load(sign);
};



