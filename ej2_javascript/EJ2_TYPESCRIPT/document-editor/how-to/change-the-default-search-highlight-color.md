---
title: "how to change the default search highlight color" 
component: "DocumentEditor" 
description: "Learn how to change the default search highlight color in Syncfusion JavaScript Document Editor component." 
---

# How to change the default search highlight color in JavaScript Document Editor component

Document editor provides an options to change the default search highlight color using [`searchHighlightColor`](../../api/document-editor/documentEditorSettingsModel/#searchhighlightcolor) in Document editor settings. The highlight color which is given in [`documentEditorSettings`](../../api/document-editor-container/#documenteditorsettings) will be highlighted on the searched text. By default, search highlight color is `yellow`.

Similarly, you can use [`documentEditorSettings`](../../api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the default search highlight color.

```typescript

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
// Add required search highlight color
  documentEditorSettings: {
    searchHighlightColor: 'Grey',
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
container.appendTo('#container');

```

Output will be like below:

![How to change the default search highlight color](../images/search-color.png)