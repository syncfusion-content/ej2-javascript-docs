---
layout: post
title: Hide tool bar and properties pane in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Hide tool bar and properties pane in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hide tool bar and properties pane 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hide tool bar and properties pane in ##Platform_Name## Document editor control

**Document editor container** provides the main document view area along with the built-in toolbar and properties pane.

**Document editor** provides just the main document view area. Here, the user can compose, view, and edit the Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, Document editor container has built-in properties pane which contains options for formatting text, table, image and header and footer. You can use [`showPropertiesPane`](../../api/document-editor-container/documentEditorContainerModel/#showpropertiespane) API in [`DocumentEditorContainer`](../../api/document-editor-container/documentEditorContainerModel/) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', showPropertiesPane:false });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
```

>Note: Positioning and customizing the properties pane in Document editor container is not possible. Instead, you can hide the exiting properties pane and create your own pane using public API's.

## Hide the toolbar

You can use [`enableToolbar`](../../api/document-editor-container/documentEditorContainerModel/#enabletoolbar) API in [`DocumentEditorContainer`](../../api/document-editor-container/documentEditorContainerModel/) to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: false, height: '590px' });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
```

## See Also

* [How to customize the toolbar](../../document-editor/how-to/customize-tool-bar)