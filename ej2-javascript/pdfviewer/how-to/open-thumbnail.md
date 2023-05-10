---
layout: post
title: Open thumbnail in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Open thumbnail in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open thumbnail 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open thumbnail in ##Platform_Name## Pdfviewer control

The PDF Viewer library allows you to open the thumbnail pane programmatically using the [**openThumbnailPane()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method.

The following steps are used to open the thumbnail.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to open thumbnail.

```
<button id="openThumbnail">Open Thumbnail Pane</button>
```

```ts
document.getElementById('openThumbnail').addEventListener('click', () => {
  // Open Thumbnail pane
  viewer.thumbnailViewModule.openThumbnailPane();
});
```

Find the sample, [how to open the thumbnail pane programmatically](https://stackblitz.com/edit/hjoij3?file=index.ts)