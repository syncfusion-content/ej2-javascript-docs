---
title: "Signature Open and Save"
component: "Signature"
description: "This section explains the details of the open and save signature of the signature control."
---

# Open and Save Signature

The Signature control supports to open the signature by using hosted/online URL or base64. And it also supports various save options like image, base64, and blob.

## Open Signature

The signature control opens a pre-drawn signature as either base64 or hosted/ online URL using the [`load`](https://ej2.syncfusion.com/documentation/api/signature/#load) method. It supports the PNG, JPEG, and SVG image’s base64.

{% tab template="signature/open-save/open-base", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="open-base-template" %}

```typescript
import { Signature } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let button: Button = new Button({cssClass: 'e-primary'}, '#open');

button.element.onclick = function (e) {
    let sign: string = document.getElementById('text').value;
    signature.load(sign);
};

```

{% endtab %}

## Save Signature

The Signature control saves the signature as base64, blob, and image like PNG, JPEG, and SVG.

### Save as Base64

The `getSignature` method is used to get the signature as base64 with the PNG, JPEG, and SVG type. This can be loaded to signature using [`load`](https://ej2.syncfusion.com/documentation/api/signature/#load) method.

{% tab template="signature/open-save/save-base", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="save-base-template" %}

```typescript
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

```

{% endtab %}

### Save as Blob

The [`saveAsBlob`](https://ej2.syncfusion.com/documentation/api/signature/#saveasblob) method is used to saves the signature as Blob. It is defined as the chunk of binary data stored as a single entity in a database system.

### Save as Image

The [`save`](https://ej2.syncfusion.com/documentation/api/signature/#save) method is used to saves the signature as an image. And it accepts file name and file type as parameter. The file type parameter supports PNG, JPEG, and SVG and the default file type is PNG.

{% tab template="signature/open-save/save-image", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="save-image-template" %}

```typescript
import { Signature, SignatureFileType } from '@syncfusion/ej2-inputs';
import { SplitButton, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';

let signature: Signature = new Signature({});
signature.appendTo('#signature');

let items: ItemModel[] = [
    {
        text: 'Png'
    },
    {
        text: 'Jpeg'
    },
    {
        text: 'Svg'
    }];

let splitBtn: SplitButton = new SplitButton({iconCss: 'e-sign-icons e-save', items: items, content: 'Save', select: onSelect }, '#save');

function onSelect(args: MenuEventArgs): void {
    signature.save(args.item.text as SignatureFileType, 'Signature');
}

document.getElementById('save').onclick = function () {
    signature.save();
}

```

{% endtab %}

## Save with Background

The [`saveWithBackground`](https://ej2.syncfusion.com/documentation/api/signature/#savewithbackground) property is used to saves the signature with its background and its default value is true. So, by default the signature is saved with its background.

In the following sample, the background color is set as ‘rgb(103 58 183)’ and save with background as true.

{% tab template="signature/open-save/save-bg", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="save-bg-template" %}

```typescript
import { Signature, SignatureFileType } from '@syncfusion/ej2-inputs';
import { SplitButton, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';

let signature: Signature = new Signature({saveWithBackground: true, backgroundColor:"rgb(103 58 183)"});
signature.appendTo('#signature');

let items: ItemModel[] = [
    {
        text: 'Png'
    },
    {
        text: 'Jpeg'
    },
    {
        text: 'Svg'
    }];

let splitBtn: SplitButton = new SplitButton({iconCss: 'e-sign-icons e-save', items: items, content: 'Save', select: onSelect }, '#save');

function onSelect(args: MenuEventArgs): void {
    signature.save(args.item.text as SignatureFileType, 'Signature');
}

document.getElementById('save').onclick = function () {
    signature.save();
}

```

{% endtab %}