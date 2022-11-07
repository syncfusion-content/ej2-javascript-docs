---
title: "Insert Page number and Navigate to specific page in JavaScript DocumentEditor | Syncfusion " 
component: "DocumentEditor" 
description: "Learn how to Insert Page number and Navigate to specific page from the Syncfusion JavaScript Document Editor component." 
---

# How to insert page number and navigate to specific page in JavaScript Document Editor component

You can insert page number and navigate to specific page in JavaScript Document Editor component by following ways.

## Insert page number

You can use [`insertPageNumber`](../../api/document-editor/editor/#insertpagenumber) API in editor module to insert the page number in current cursor position. By default, Page number will insert in Arabic number style. You can change it, by providing the number style in parameter.

>Note: Currently, Documenteditor have options to insert page number at current cursor position.

The following example code illustrates how to insert page number in header.

```typescript
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To move the selection to header
container.documentEditor.selection.goToHeader();
// Insert page number in the current cursor position
container.documentEditor.editor.insertPageNumber();

```

Also, you use [`insertField`](../../api/document-editor/editor/#insertField) API in Editor module to insert the Page number in current position

```typescript
//Current page number
container.documentEditor.editor.insertField('PAGE \* MERGEFORMAT', '1');

```

## Get page count

You can use [`pageCount`](../../api/documenteditor/selection/#selectparagraph) API to gets the total number of pages in Document.

The following example code illustrates how to get the number of pages in Document.

```typescript
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To get the total number of pages
let pageCount : number=container.documentEditor.pageCount;

```

## Navigate to specific page

You can use [`goToPage`](../../api/document-editor/selection/#gotopage) API in Selection module to move selection to the start of the specified page number.

The following example code illustrates how to move selection to specific page.

```typescript
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');

// To move selection to page number 2
container.documentEditor.selection.goToPage(2);
```