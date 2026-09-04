---
layout: post
title: Redact in ##Platform_Name## Image Editor | Syncfusion
description: Conceal sensitive information in images with blur or pixelate redactions in the ##Platform_Name## Image Editor using the drawRedact method.
platform: ej2-javascript
control: Redact
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Redact in ##Platform_Name## Image Editor

The redact feature in the Image Editor lets you conceal sensitive information by applying blur or pixelate effects to specific areas of an image. This is useful for protecting privacy and complying with data protection regulations when sharing images that contain sensitive content.

## Apply a redact to the image

The Image Editor control includes a [`drawRedact`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#drawredact) method, which allows you to draw a redaction on an image. This method takes the following parameters that define how the redaction is drawn:

* type - Specifies the type of redaction to be drawn on the image, such as blur or pixelate. If not specified, the redaction is drawn with the default blur value.

* x - Specifies the x-coordinate of the redaction. If not specified, the redaction is drawn starting at the default x position.

* y - Specifies the y-coordinate of the redaction. If not specified, the redaction is drawn from the center point of the image.

* width - Specifies the width of the redaction. The default value is 100.

* height - Specifies the height of the redaction. The default value is 50.

* value - Specifies the blur value for blur-type redaction, or the pixel size for pixelate-type redaction. Defaults to 20 because the default redaction type is blur.

## Select a redact

The Image Editor control includes a [`selectRedact`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#selectredact) method, which allows you to select a redaction based on the given redact id. Use the [`getRedacts`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#getredacts) method to get the redact id, which is then passed to perform selection. This method takes the following parameter:

* id - Specifies the redact id of the redaction to select on an image.

## Delete a redact

The Image Editor control includes a [`deleteRedact`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#deleteredact) method, which allows you to delete a redaction based on the given redact id. Use the [`getRedacts`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#getredacts) method to get the redact id, which is then passed to perform deletion. This method takes the following parameter:

* id - Specifies the redact id of the redaction to delete on an image.

## Update a redact

The Image Editor control includes an [`updateRedact`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#updateredact) method, which allows you to update existing redactions by changing their height, width, blur, and pixel size. Use the [`getRedacts`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#getredacts) method to get the redactions, which are then passed to change the options of a redaction. This method takes the following parameters:

* setting - Specifies the redact settings to be updated for the redaction on an image. The returned objects from [`getRedacts`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#getredacts) are used to identify the redact id for `selectRedact`, `deleteRedact`, and `updateRedact`.

* isSelected - Specifies whether to show the redactions in the selected state.

## Getting redacts

The Image Editor control includes a [`getRedacts`](https://ej2.syncfusion.com/documentation/api/image-editor/index-default#getRedacts) method, which allows you to get all the redact details which is drawn on an image editor.

Here's an example demonstrating how to draw, select, delete, update, and get redacts on an image using the [`drawRedact`](https://ej2.syncfusion.com/documentation/api/image-editor/index-default#drawRedact), [`selectRedact`](https://ej2.syncfusion.com/documentation/api/image-editor/index-default#selectRedact), [`deleteRedact`](https://ej2.syncfusion.com/documentation/api/image-editor/index-default#deleteRedact), [`updateRedact`](https://ej2.syncfusion.com/documentation/api/image-editor/index-default#updateRedact) and [`getRedacts`](https://ej2.syncfusion.com/documentation/api/image-editor/index-default#getRedacts) methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/redact-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/redact-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/redact-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/redact-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/redact-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/redact-cs1" %}
{% endif %}
