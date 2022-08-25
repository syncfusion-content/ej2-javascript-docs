---
title: "Print"
component: "DocumentEditor"
description: "Learn how to print the document in JavaScript document editor and customize page size, margins, and more during print."
---

# Print

To print the document, use the `print` method from Document Editor instance.

Refer to the following example for showing a document and print it.

{% tab template="document-editor/print",es5Template="print" %}

```typescript
import { DocumentEditor, Print } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';

DocumentEditor.Inject(Print);

let documenteditor: DocumentEditor = new DocumentEditor({
    enablePrint: true, height: '370px'
});
documenteditor.appendTo('#DocumentEditor');

let sfdt: string =`{
    "sections": [
        {
            "blocks": [
                {
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": true
                            },
                            "text": "Hello World"
                        }
                    ]
                }
            ],
            "headersFooters": {
            }
        }
    ]
}`;

documenteditor.open(sfdt);
let printButton: Button = new Button();
printButton.appendTo('#print');
document.getElementById('print').addEventListener('click', () => {
    documenteditor.print();
});
```

{% endtab %}

Refer to the following example for creating a document and print it.

{% tab template="document-editor/print",es5Template="base", sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, Print, Editor, Selection, EditorHistory} from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';

DocumentEditor.Inject(Print, Editor, Selection, EditorHistory);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    height: '370px'
});
documenteditor.appendTo('#DocumentEditor');
let printButton: Button = new Button();
printButton.appendTo('#print');

document.getElementById('print').addEventListener('click', () => {
    documenteditor.print();
});
```

{% endtab %}

## Improve print quality

Document editor provides an option to improve the print quality using [`printDevicePixelRatio`](../api/document-editor/documentEditorSettingsModel/#printdevicepixelratio) in Document editor settings. Document editor using canvas approach to render content. Then, canvas are converted to image and it process for print. Using printDevicePixelRatio API, you can increase the image quality based on your requirement.

The following example code illustrates how to improve the print quality in Document editor container.

```typescript
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
   documentEditorSettings: {
     printDevicePixelRatio: 2
   }
 });
 DocumentEditorContainer.Inject(Toolbar);
 container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
 container.appendTo('#container');
```

>Note: By default, printDevicePixelRatio value is 1

## Print using window object

You can print the document in Document Editor by passing the window instance. This is useful to implement print in third party frameworks such as electron, where the window instance will not be available. Refer to the following example.

```typescript
import { DocumentEditor, Print } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Print);

let documenteditor: DocumentEditor = new DocumentEditor({
    enablePrint: true, height: '370px'
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.print(window);
```

## Page setup

Some of the print options cannot be configured using JavaScript. Refer to the following links to learn more about the browser page setup:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1/)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox/)

However, you can customize margins, paper, and layout options by modifying the section format properties using page setup dialog

```typescript
import { DocumentEditor,Print, PageSetupDialog, Editor, Selection, EditorHistory} from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Print, PageSetupDialog, Editor, Selection, EditorHistory);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enablePageSetupDialog: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    height: '370px'
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.showPageSetupDialog();
```

By customizing margins, papers, and layouts, the layout of the document will be changed in Document Editor. To modify these options during print operation, serialize the document as SFDT using the `serialize` method in Document Editor instance and open the SFDT data in another instance of Document Editor in separate window.

The following example shows how to customize layout options only for printing.

{% tab template="document-editor/print",es5Template="print-window", sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, Print, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';

//Inject require modules.
DocumentEditor.Inject(Print, Editor, Selection, EditorHistory, SfdtExport);

let documenteditor1: DocumentEditor = new DocumentEditor({
      isReadOnly: false,
      enablePrint: true,
      enableEditor: true,
      enableSelection: true,
      enableEditorHistory: true,
      enableSfdtExport: true,
      height: '370px'
});
documenteditor1.appendTo('#DocumentEditor');
let printButton: Button = new Button();
printButton.appendTo('#print');

let documenteditor2: DocumentEditor = new DocumentEditor({
      enablePrint: true, enableSelection: true, isReadOnly: false, enableEditor: true, height: '370px'
});
documenteditor2.appendTo('#DocumentEditor2');
//Print the document
document.getElementById('print').addEventListener('click', () => {
    let sfdtData = documenteditor1.serialize();
    documenteditor2.open(sfdtData);
    //Set A5 paper size
    documenteditor2.selection.sectionFormat.pageWidth = 419.55;
    documenteditor2.selection.sectionFormat.pageHeight = 595.30;
    documenteditor2.print();
});
```

{% endtab %}

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Page Setup dialog](../document-editor/dialog#page-setup-dialog/)
