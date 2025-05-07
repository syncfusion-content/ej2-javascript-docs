---
layout: post
title: Overlapped annotations in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Overlapped annotations in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Overlapped annotations 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Overlapped annotations in ##Platform_Name## Pdfviewer control

To get the overlapped annotations on a mouse click in a Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, you can use the [**annotationCollection**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#annotationcollection) property of [**annotationSelect**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.This event is triggered when the user clicks on an annotation in the PDF document.

Here is an example of how you can use the [**annotationSelect**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event to get the overlapped annotations on a mouse click in a Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer:

```javascript

// Get overlapped annotation collections.
viewer.annotationSelect =(args) =>{
  console.log(args.annotationCollection);
}

```

Find the sample [how to get the overlapped annotations on mouse click](https://stackblitz.com/edit/a93cem-lprlap?devtoolsheight=33&file=index.js)