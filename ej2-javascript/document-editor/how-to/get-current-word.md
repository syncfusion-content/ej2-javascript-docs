---
layout: post
title: Get current word in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Get current word in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Get current word 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Get current word in ##Platform_Name## Document editor control

You can get the current word or paragraph content from the JavaScript Document Editor component as plain text and SFDT (rich text).

## Select and get the word in current cursor position

You can use [`selectCurrentWord`](../../api/document-editor/selection#selectcurrentword) API in selection module to select the current word at cursor position and use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the selected content as plain text from JavaScript Document Editor component.

The following example code illustrates how to select and get the current word as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select the current word in document
container.documentEditor.selection.selectCurrentWord();

// To get the selected content as text
let selectedContentText: string = container.documentEditor.selection.text;
// To get the selected content as SFDT (rich text)
let selectedContentSFDT: string = container.documentEditor.selection.sfdt;
```

> The Web API hosted link `https://services.syncfusion.com/js/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

To get the bookmark content as SFDT (rich text), please check this [`link`](../../document-editor/how-to/get-the-selected-content/#get-the-selected-content-as-sfdt-rich-text)

## Select and get the paragraph in current cursor position

You can use [`selectParagraph`](../../api/document-editor/selection/#selectparagraph) API in selection module to select the current paragraph at cursor position and use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API or [`sfdt`](../../api/document-editor/selection/#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text or SFDT from JavaScript Document Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select the current paragraph in document
container.documentEditor.selection.selectParagraph();

// To get the selected content as text
let selectedContentText: string = container.documentEditor.selection.text;
// To get the selected content as SFDT (rich text)
let selectedContentSFDT: string = container.documentEditor.selection.sfdt;
```

> The Web API hosted link `https://services.syncfusion.com/js/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.