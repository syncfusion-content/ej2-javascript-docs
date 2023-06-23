---
layout: post
title: Select multi page annotation in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Select multi page annotation in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Select multi page annotation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Select multi page annotation in ##Platform_Name## Pdfviewer control

To select a multi-page TextMarkup annotation as a single annotation in a Syncfusion PDF viewer, you can use by enabling the **enableMultiPageAnnotation** property. By default it is `false`.

Here is an example of how you can use the **enableMultiPageAnnotation** property to select the multi page TextMarkup annotation as a single annotation, export and import multi page annotation:

```javascript

// Enable multi-page TextMarkup Annotation.
viewer.enableMultiPageAnnotation = true;

// Export Annotation
document.getElementById('export').addEventListener('click', () => {
  viewer.exportAnnotation();
});

// Import Annotation.
document.getElementById('import').addEventListener('click', () => {
  viewer.importAnnotation("Add Export annotation file content");
});

```

Find the sample [how to select multi-page TextMarkup annotation as single annotation](https://stackblitz.com/edit/1epvap-vewcbt?file=index.js)