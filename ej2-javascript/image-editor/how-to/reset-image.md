---
layout: post
title: How to reset an image in ##Platform_Name## Image Editor | Syncfusion
description: Revert all edits in the ##Platform_Name## Image Editor with the reset method to restore the original image, undoing annotations, transforms, and adjustments.
platform: ej2-javascript
control: Reset an image  
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to reset an image in ##Platform_Name## Image Editor

The [`reset`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#reset) method reverts the image in the Image Editor to its original state, discarding every edit applied after the image was opened — including annotations, transforms, finetune adjustments, and filters. It takes no arguments and returns `void`.

Use `reset` when you want to start over with the unmodified image rather than undoing individual steps one at a time. This differs from `undo`, which steps back a single action, and from `clearImage`, which removes the image from the canvas entirely without reloading the original.

## Steps to reset an image

1. Initialize the `ImageEditor` and open an image.
2. Apply any edits (annotations, transforms, finetune, filters).
3. Call `imageEditorObj.reset()` to discard all edits and restore the original image.

The following example loads an image on creation and resets it when the **Reset** button is clicked:

```javascript
// Discards all edits and restores the original image. Returns: void
imageEditorObj.reset();
```

> **Note:** A reset clears the current edits. Use `undo` if you only want to revert the most recent action. 