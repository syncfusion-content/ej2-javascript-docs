---
layout: post
title: Identify added annotation mode in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Identify added annotation mode in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Identify added annotation mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Identify added annotation mode in ##Platform_Name## Pdfviewer control

The PDF Viewer library allows you to identify whether the added annotations in PDF document is UI drawn, imported or existing annotation. Annotation mode can be identified using the **annotationAddMode** property of **annotationSelect** event.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample.

**Step 2:** The following code snippet explains how to identify added annotation mode.

```ts

viewer.annotationSelect =(args) =>{
console.log(args.annotationAddMode);
}

```

Find the Sample [how to identify added annotation mode](https://stackblitz.com/edit/nldhsr?devtoolsheight=33&file=index.ts)
