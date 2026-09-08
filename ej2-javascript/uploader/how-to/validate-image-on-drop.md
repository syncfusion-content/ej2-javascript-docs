---
layout: post
title: validate image on drop in ##Platform_Name## File Upload | Syncfusion
description: Learn how to validate image files on drop in the Syncfusion ##Platform_Name## File Upload by configuring the allowedExtensions property to accept only image types.
platform: ej2-javascript
control: Validate image on drop 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to validate image on drop in ##Platform_Name## File Upload

The Uploader component allows you to upload all types of images by setting `image/*` as the [allowedExtensions](../../api/uploader#allowedextensions) property value.

By default, this behavior works when selecting a file using the browse button. However, this behavior is not supported when dragging and dropping files. You can handle this manually using the `selected` event by filtering the file types (for example, by checking each file's extension or `type` property against an allow-list) within the application.

In the following example, image files are validated using `image/*`. You can drag and drop image files with the extensions PNG, JPG, BPG, GIF, and TIFF to upload them.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/validate-image-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/validate-image-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/validate-image-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/validate-image-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/validate-image-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/validate-image-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/validate-image-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/validate-image-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.