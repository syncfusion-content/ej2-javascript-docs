---
title: "Move the selection to specific position in JavaScript DocumentEditor | Syncfusion " 
component: "DocumentEditor" 
description: "Learn how to move the selection to specific position in Document from the Syncfusion JavaScript Document Editor component." 
---

# How to move the selection to specific position in JavaScript Document Editor component

Using [`select`](../../api/document-editor/selection/#select) API in selection module, You can set cursor position to anywhere in the document.

## Selects content based on start and end hierarchical index

Hierarchical index will be in below format.

`sectionIndex;blockIndex;offset`

The following code snippet illustrate how to select using hierarchical index.

```typescript
// Selection will occur between provided start and end offset
documentEdContainerIns.documentEditor.editor.insertText("Welcome");
// The below code will select the letters “We” from inserted text “Welcome”
documentEdContainerIns.documentEditor.selection.select("0;0;0", "0;0;2");
```

The following table illustrates about Hierarchical index in detail.

| Element |Hierarchical Format | Explanation |
|-----------------|-------------|----|
|Move selection to Paragraph |sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0|It moves the cursor to the start of paragraph.|
|Move selection to Table|sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0|It moves the cursor to the second paragraph which is inside first row and cell of table.|
|Move selection to header|pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0|It moves cursor to the header in second page.|
|Move selection to Footer|pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0|It moves cursor to the footer in second page.|

## Get the selection start and end hierarchical index

Using [`startOffset`](../../api/document-editor/selection/#startOffset), you can get start hierarchical index which denotes the start index of current selection.
Similarly, using [`endOffset`](../../api/document-editor/selection/#endOffset), you can get end hierarchical index which denotes the end index of current selection.

The following code snippet illustrate how to get the selection start and end offset on selection changes in document.

```typescript

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = hostUrl + 'api/documenteditor/';
container.appendTo('#container');
// Event gets triggered on selection change in document
container.selectionChange = (): void => {
//Get the start index of current selection
let startOffset:string = container.documentEditor.selection.startOffset;
//Get the end index of current selection
let endOffset:string = container.documentEditor.selection.endOffset;
};
```

Document editor have [`selectionChange`](../../api/document-editor/#selectionchange) event which is triggered whenever the selection changes in Document.

## Selects the content based on left and top position

Here, you can specify the [`selection settings`](../../api/document-editor/selectionSettings/) to select the content based on left and top position.

x denotes the left position and y denotes the top position and extend denotes whether to extend or update selection.

Please check below code sample for reference.

```typescript
Container.documentEditor.selection.select({ x: 188.4814208984375 , y: 662.00005, extend: true });
```