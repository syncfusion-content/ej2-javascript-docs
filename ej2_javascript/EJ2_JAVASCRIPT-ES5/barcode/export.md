---
title: "Export"
component: "BarcodeGenerator"
description: "The BarcodeGenerator component is a pure JavaScript library which will convert a string to barcode and show it to the user. This supports the major 1D and 2D barcodes including the coda bar, code 128, QR Code."
---

# Export

Export barcode as an image and base64 string is common for barcode,QRcode and datamatrix. The following code samples explain how to export barcode as an image and base64 string.

## Export

Barcode provides the support to export its content as an image in the specified image type and downloads it in the browser.
The following code example shows how to export the barcode as an image

```typescript

import { BarcodeGenerator, BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

let barcode: BarcodeGenerator = new BarcodeGenerator({
    width: '200px', height: '150px',
    type: 'Code39',
    value: 'BARCODE',
    displayText: { text: 'ABCD' },
});
barcode.appendTo('#element');
let filename: string = 'Export';
barcode.exportImage(filename,'JPG');

```

The filename specifies the name of the file to be downloaded.

### Export As Base64String

Barcode provides the support to export its content as an image in the specified image type and returns it as base64 string.
The following code example shows how to export the barcode as a base64 string

```typescript

import { BarcodeGenerator, BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

let barcode: BarcodeGenerator = new BarcodeGenerator({
    width: '200px', height: '150px',
    type: 'Code39',
    value: 'BARCODE',
    displayText: { text: 'ABCD' },
});
barcode.appendTo('#element');
async function () {
// Can able to store the return base64 string in variable
var data = await barcode.exportAsBase64Image('JPG');
};

```

>**Note:**
>Format is to specify the type or format of the exported file. You can export the barcode to the following formats:
>* JPG.
>* PNG.