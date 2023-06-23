---
layout: post
title: Overlapped annotation in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Overlapped annotation in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Overlapped annotation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Overlapped annotation in ##Platform_Name## Pdfviewer control

To get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer, you can use the **annotationCollection** property of **annotationSelect** event.This event is triggered when the user clicks on an annotation in the PDF document.

Here is an example of how you can use the **annotationSelect** event to get the overlapped annotations on a mouse click in a Syncfusion PDF Viewer:

```ts

// Get overlapped annotation collections.
viewer.annotationSelect =(args) =>{
  console.log(args.annotationCollection);
}

```

Find the sample [how to get the overlapped annotations on mouse click](https://stackblitz.com/edit/9jn6bk-kmzqr5?devtoolsheight=33&file=index.ts)