---
layout: post
title: Disable auto focus in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Disable auto focus in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Disable auto focus 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disable auto focus in ##Platform_Name## Document editor control

Document Editor gets focused automatically when the page loads. If you want the Document editor not to be focused automatically it can be customized.

The following example illustrates to disable the auto focus in DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', enableAutoFocus: false});
```

>Note: Default value of [`enableAutoFocus`](../../api/document-editor-container/#enableautofocus) property is `true`.

The following example illustrates to disable the auto focus in DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', enableAutoFocus: false});
```

>Note: Default value of [`enableAutoFocus`](../../api/document-editor/#enableautofocus) property is `true`.