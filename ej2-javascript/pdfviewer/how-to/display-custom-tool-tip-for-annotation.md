---
layout: post
title: Display custom tool tip for annotation in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Display custom tool tip for annotation in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display custom tool tip for annotation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display custom tool tip for annotation in ##Platform_Name## Pdfviewer control

To display a custom tooltip for annotations using the mouseover event in the Syncfusion PDF Viewer, you can use the **annotationMouseover** and **annotationMouseLeave** events .

Here is an example that demonstrates how to display a custom tooltip for annotations using the mouseover event in the Syncfusion PDF Viewer:

```ts

viewer.annotationSettings.author = "syncfusion";

let tooltip: Tooltip = new Tooltip({
    mouseTrail: true,
    opensOn: "Custom"
});

viewer.annotationMouseOver = args => {
    tooltip.appendTo("#pdfViewer_pageDiv_" + (viewer.currentPageNumber - 1));
    tooltip.content = args.annotation.author;
    tooltip.open();
    let ele: any = document.getElementsByClassName("e-tooltip-wrap")[0];
    ele.style.top = args.Y + 100 + "px";
    ele.style.left = args.X + "px";
};

viewer.annotationMouseLeave = args => {
    tooltip.close();
};

```

Find the sample [how to display custom tooltip for annotations using MouseOver event](https://stackblitz.com/edit/cervhy-s9fh48?file=index.ts)