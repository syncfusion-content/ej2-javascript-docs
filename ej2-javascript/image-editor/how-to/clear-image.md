---
layout: post
title: How to clear an image in ##Platform_Name## Image Editor | Syncfusion
description: Use the clearImage method in the ##Platform_Name## Image Editor to reset the canvas when reopening the editor in a dialog, ensuring no leftover image data.
platform: ej2-javascript
control: Clear an Image 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to clear an image in ##Platform_Name## Image Editor

The [`clearImage`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#clearimage) method resets the image editor canvas and removes the currently loaded image without destroying the control. This is useful when the image editor is hosted inside a dialog (or any container that is reopened), so the editor is emptied before reopening it.

## Steps to clear an image when hosting the editor in a dialog

1. Initialize the `ImageEditor` and load an image.
2. Before the dialog is closed, call `imageEditorObj.clearImage()` to clear the loaded image from the canvas.
3. Reopen the dialog and load a new image selection — the previous image data is no longer retained.

The following example loads an image on creation and clears it when the **Clear Image** button is clicked:

```javascript
// Clears the loaded image from the image editor canvas.
imageEditorObj.clearImage(); // Returns: void
``` 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/how-to-cs1" %}
{% endif %}