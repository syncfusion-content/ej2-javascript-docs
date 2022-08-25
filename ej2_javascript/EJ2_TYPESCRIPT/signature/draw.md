---
title: "Signature Draw"
component: "Signature"
description: "This section explains the details of the draw a signature of the signature control."
---

# Draw a Signature

## Draw

The [`draw`](https://ej2.syncfusion.com/documentation/api/signature/#draw) method is used to drawn a text as signature with different font families like Arial, Serif, with different font sizes. It accepts text, font family, font size as its parameters. The default font family is “Arial”, and the default font size is “30”.

{% tab template="signature/draw", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="draw-template" %}

```typescript
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

```

{% endtab %}
