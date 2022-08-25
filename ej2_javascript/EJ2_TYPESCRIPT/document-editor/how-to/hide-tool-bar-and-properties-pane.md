---
title: "Hide the default tool bar and properties pane in JavaScript DocumentEditor | Syncfusion " 
component: "DocumentEditor" 
description: "Learn how to hide the default tool bar properties pane from the Syncfusion JavaScript Document Editor component." 
---

# How to hide the default tool bar and properties pane in JavaScript Document Editor component

**Document editor container** provides the main document view area along with the built-in toolbar and properties pane.

**Document editor** provides just the main document view area. Here, the user can compose, view, and edit the Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, Document editor container has built-in properties pane which contains options for formatting text, table, image and header and footer. You can use [`showPropertiesPane`](../../api/document-editor-container/documentEditorContainerModel/#showpropertiespane) API in `DocumentEditorContainer` to hide the properties pane.

The following example code illustrates how to hide the properties pane.

```typescript
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', showPropertiesPane:false });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
```

>Note: Positioning and customizing the properties pane in Document editor container is not possible. Instead, you can hide the exiting properties pane and create your own pane using public API's.

## Hide the toolbar

You can use [`enableToolbar`](../../api/document-editor-container/documentEditorContainerModel/#enabletoolbar) API in `DocumentEditorContainer` to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

```typescript
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: false, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
```

## See Also

* [How to customize the toolbar](../../document-editor/how-to/customize-tool-bar)