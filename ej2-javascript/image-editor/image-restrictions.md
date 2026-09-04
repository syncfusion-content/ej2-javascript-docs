---
layout: post
title: Image Restrictions in ##Platform_Name## Image Editor | Syncfusion
description: Restrict uploaded images in the ##Platform_Name## Image Editor by file extension, minimum size, and maximum size using the uploadSettings property.
platform: ej2-javascript
control: Image Restrictions
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Image Restrictions in ##Platform_Name## Image Editor

The Image Editor allows users to specify image extensions, as well as the minimum and maximum image sizes for uploaded or loaded images using the [`uploadSettings`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#uploadsettings) property. When an uploaded image does not meet the defined criteria, end users are notified through an alert message indicating the validation failure.

> **Note:** File restrictions apply when uploading images to the Image Editor, whether through the `open` method or the built-in uploader. If `uploadSettings` is not defined for the control, the Image Editor by default allows files with `.jpg`, `.png`, `.svg`, `.webp`, and `.bmp` extensions, without any file size restrictions.

## Allowed image extensions

The Image Editor allows users to specify acceptable file extensions for uploaded images using the [`uploadSettings.allowedExtensions`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/uploadsettingsmodel#allowedextensions) property, ensuring that only supported formats, such as `.jpg`, `.png`, `.svg`, `.webp`, and `.bmp` are allowed. This helps maintain compatibility and prevents errors caused by unsupported file types.

> **Note:** To specify allowed extensions in the upload settings, use the format `'.png, .svg'`, listing the permitted file types as a comma-separated string.

Here is an example of configuring allowed file extensions using the `uploadSettings` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/image-restrictions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/image-restrictions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/image-restrictions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/image-restrictions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/image-restrictions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/image-restrictions-cs1" %}
{% endif %}

## Minimum and maximum image size

The Image Editor allows users to specify the minimum and maximum size limits (in bytes) for uploaded image files by using the [uploadSettings.minFileSize](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/uploadsettingsmodel#minfilesize) and [uploadSettings.maxFileSize](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/uploadsettingsmodel#maxfilesize) properties. This ensures that images meet specific requirements, maintaining consistency and preventing oversized or undersized files from being processed. When these properties are not set, no file size restrictions are applied.

> **Note:** Users can also upload images as base64 strings, in which case file extension validation is bypassed, but file size restrictions still apply.

Here is an example of configuring minimum and maximum file size limits using the `uploadSettings` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/image-restrictions-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/image-restrictions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/image-restrictions-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/image-restrictions-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/image-restrictions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/image-restrictions-cs2" %}
{% endif %}