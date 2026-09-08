---
layout: post
title: Validation in ##Platform_Name## File Upload | Syncfusion
description: Learn how to validate selected files in the Syncfusion ##Platform_Name## File Upload by file size, extension, and HTML attributes before upload.
platform: ej2-javascript
control: Validation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Validation in ##Platform_Name## File Upload

The uploader component validates the selected files' size and extension using the [allowedExtensions](../api/uploader#allowedextensions), [minFileSize](../api/uploader#minfilesize) and [maxFileSize](../api/uploader#maxfilesize) properties. The files can be validated before uploading to the server and can be ignored during upload. Also, you can validate the files by setting the HTML attributes on the original input element. The validation process also occurs when files are dragged and dropped.

## File type

You can allow only specific files to be uploaded using the [allowedExtensions](../api/uploader#allowedextensions) property. The extensions can be specified as a comma-separated list (for example, `allowedExtensions: '.jpg,.png'`). The uploader component filters the selected or dropped files to match against the specified file types and processes the upload operation. Validation also occurs when you specify a value for the `accept` attribute on the original input element (for example, `<input type="file" accept=".jpg,.png" />`).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/type-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/type-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/type-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/type-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/type-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/type-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/type-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/type-validation-cs1" %}
{% endif %}

## File size

The uploader component allows you to validate the files based on their size. The validation helps to restrict uploading large files or empty files to the server. The size is represented in `bytes`. By default, the uploader component allows you to upload a **minimum file size** of 0 bytes and a **maximum file size** of 28.4 MB using the [minFileSize](../api/uploader#minfilesize) and [maxFileSize](../api/uploader#maxfilesize) properties (for example, `maxFileSize: 1000000`).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/size-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/size-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/size-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/size-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/size-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/size-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/size-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/size-validation-cs1" %}
{% endif %}

## Maximum files count

You can restrict the maximum number of files that can be uploaded using the **selected** event. In the selected event arguments, you can get the currently selected files' details using `getFilesData()`. You can modify the files' details and assign the modified file list to `eventArgs.modifiedFilesData`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/max-count-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/max-count-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/max-count-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/max-count-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/max-count-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/max-count-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/max-count-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/max-count-validation-cs1" %}
{% endif %}

## Duplicate files

You can validate duplicate files before uploading to the server using the `selected` event. Compare the selected files with the existing files' data (for example, by name and size) and filter the file list by removing the duplicate files.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/duplicate-file-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/duplicate-file-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/duplicate-file-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/duplicate-file-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/duplicate-file-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/duplicate-file-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/duplicate-file-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/duplicate-file-validation-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [Validate image/* on drop](./how-to/validate-image-on-drop)
* [Determine whether uploader has file input (required validation)](./how-to/determine-whether-the-uploader-has-input-file)
* [Check file size before uploading it](./how-to/check-file-size-before-uploading)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload)
