---
layout: post
title: Frame in ##Platform_Name## Image Editor | Syncfusion
description: Add mat, bevel, line, hook, and inset frames to images in the ##Platform_Name## Image Editor with the drawFrame method, with customizable color, size, and style.
platform: ej2-javascript
control: Frame 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Frame in ##Platform_Name## Image Editor

The frame feature in an Image Editor provides users with the capability to add decorative borders or frames around their images. Frames are a visual design element that can enhance the overall appearance and appeal of an image.

## Apply a frame to the image

The [`drawFrame`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#drawframe) method is used to apply various frame options to an image. This method simplifies the process of adding decorative frames, such as mat, bevel, line, hook, and inset frames, to an image by allowing users to specify their desired frame type.

Depending on the frame type selected, users may have additional customization options, such as adjusting the frame's thickness, color, texture, or other attributes. This allows for fine-tuning the appearance of the frame to match the image's theme or the user's preferences.

The `drawFrame` method in the Image Editor control takes the following parameters to define the properties of the frame applied to the image. The method returns `void`.

* frameType - Specifies the type of frame to apply to the image (mat, bevel, line, hook, or inset).

* color - Specifies the color for the frame.

* gradientColor - Specifies the gradient color for the frame.

* size - Specifies the size of the frame.

* inset - Specifies the inset value for line, hook, and inset type frames.

* offset - Specifies the offset value for line and inset type frames.

* borderRadius - Specifies the border radius for the line type frame.

* frameLineStyle - Specifies the frame line style for the line type frame.

* lineCount - Specifies the line count for the line type frame.

In the following example, the `drawFrame` method is used in the button click event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/frame-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/frame-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/frame-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/frame-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/frame-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/frame-cs1" %}
{% endif %}

## Frame changing event

The [`frameChanging`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#framechanging) event is triggered when applying a frame on the image. The event argument provides details about the frame being applied, including the frame type (mat, bevel, line, hook, or inset) and the customization values (such as color, size, and style).

The [`FrameChangeEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/framechangeeventargs) provides the following parameters:

* [`FrameChangeEventArgs.previousFrameSetting`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/framechangeeventargs#previousframesetting) - The frame settings (including size, color, inset, offset, and gradient color) applied before changing the frame.

* [`FrameChangeEventArgs.currentFrameSetting`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/framechangeeventargs#currentframesetting) - The frame settings (including size, color, inset, offset, and gradient color) to be applied after changing the frame.

* [`FrameChangeEventArgs.cancel`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/framechangeeventargs#cancel) - Specifies a boolean value that, when set to `true`, cancels the frame changing action.