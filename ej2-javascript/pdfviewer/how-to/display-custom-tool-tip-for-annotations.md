---
layout: post
title: Display custom tool tip for annotations in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Display custom tool tip for annotations in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display custom tool tip for annotations 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display custom tool tip for annotations in ##Platform_Name## Pdfviewer control

To display a custom tooltip for annotations using the mouseover event in the Syncfusion PDF Viewer, you can use the **annotationMouseOver** and **annotationMouseLeave** events .

Here is an example that demonstrates how to display a custom tooltip for annotations using the mouseover event in the Syncfusion PDF Viewer:

```javascript

viewer.annotationSettings.author = "syncfusion";
var tooltip = new ej.popups.Tooltip({
    mouseTrail: true,
    opensOn: "Custom"
});
viewer.annotationMouseOver = function(args) {
    tooltip.appendTo("#pdfViewer_pageDiv_" + (viewer.currentPageNumber - 1));
    tooltip.content = args.annotation.author;
    tooltip.open();
    var ele = document.getElementsByClassName("e-tooltip-wrap")[0];
    ele.style.top = args.Y + 100 + "px";
    ele.style.left = args.X + "px";
};
viewer.annotationMouseLeave = function(args) {
    tooltip.close();
};

```

Find the Sample [how to display custom tooltip for annotations using MouseOver event](https://stackblitz.com/edit/ztmvjx-byzwvq?file=index.js)