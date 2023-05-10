---
layout: post
title: Disable drag and drop in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Disable drag and drop in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Disable drag and drop 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disable drag and drop in ##Platform_Name## Document editor control

Document Editor provides support to drag and drop contents within the component and it can be customized(enable and disable) using [`allowDragAndDrop`](../../api/document-editor-container/documenteditorsettings/#allowDragAndDrop) property in Document editor settings.

The following example illustrates to disable the drag and drop option in DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

>Note: Default value of [`allowDragAndDrop`](../../api/document-editor-container/#documenteditorsettings/#allowDragAndDrop) property is `true`.

The following example illustrates to disable the drag and drop option in DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

>Note: Default value of [`allowDragAndDrop`](../../api/document-editor/#documenteditorsettings/#allowDragAndDrop) property is `true`.