---
title: "Signature Customization"
component: "Signature"
description: "This section explains the details of the customization of the signature control."
---

# Customization of Signature Control

The Signature control draws stroke/path using moveTo() and lineTo() methods to connect one or more points while drawing in canvas. The stroke width can be modified by using its color and width. And the background can be modified by using its background color and background image.

## Stroke Width

The variable stroke width is based on the values of [`maxStrokeWidth`](https://ej2.syncfusion.com/documentation/api/signature/#maxstrokewidth), [`minStrokeWidth`](https://ej2.syncfusion.com/documentation/api/signature/#minstrokewidth) and [`velocity`](https://ej2.syncfusion.com/documentation/api/signature/#velocity) for smoother and realistic signature. The default value of minimum stroke width is set as 0.5, maximum stroke width is set as 2.5 and velocity is set as 0.7.

In the following example, minimum stroke width is set as 0.5, maximum stroke width is set as 3 and velocity is set as 0.7.

{% tab template="signature/customization/strokewidth", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="strokewidth-template" %}

```typescript
import { Signature } from '@syncfusion/ej2-inputs';

let signature: Signature = new Signature({maxStrokeWidth:3, minStrokeWidth: 0.5, velocity: 0.7});
signature.appendTo('#signature');

```

{% endtab %}

## Stroke Color

Color of the stroke can be specified by using [`strokeColor`](https://ej2.syncfusion.com/documentation/api/signature/#strokecolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#000000”.

{% tab template="signature/customization/strokecolor", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="strokecolor-template" %}

```typescript
import { Signature } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let button: Button = new Button({cssClass: 'e-primary'}, '#set');

button.element.onclick = function (e) {
    let color: string = document.getElementById('text').value;
    signature.strokeColor = color;
};

```

{% endtab %}

## Background Color

Background color of a signature can be specified by using [`backgroundColor`](https://ej2.syncfusion.com/documentation/api/signature/#backgroundcolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#ffffff”.

{% tab template="signature/customization/bgcolor", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="bgcolor-template" %}

```typescript
import { Signature } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let button: Button = new Button({cssClass: 'e-primary'}, '#set');

button.element.onclick = function (e) {
    let bgColor: string = document.getElementById('text').value;
    signature.backgroundColor = bgColor;
};

```

{% endtab %}

## Background Image

Background image of a signature can be specified by using [`backgroundImage`](https://ej2.syncfusion.com/documentation/api/signature/#backgroundimage) property. The background image can be set by either hosting the image in our local IIS or online image.

{% tab template="signature/customization/bgimage", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="bgimage-template" %}

```typescript
import { Signature } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let button: Button = new Button({cssClass: 'e-primary'}, '#set');

button.element.onclick = function (e) {
    let url: string = document.getElementById('text').value;
    signature.backgroundImage = url;
};

```

{% endtab %}

## See Also

* [Save With Background](./open-save#save-with-background)