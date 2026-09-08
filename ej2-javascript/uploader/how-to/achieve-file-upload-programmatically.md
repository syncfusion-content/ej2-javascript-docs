---
layout: post
title: Upload programmatically ##Platform_Name## File Upload | Syncfusion
description: Learn to trigger upload programmatically in ##Platform_Name## File Upload using public methods without user interaction.
platform: ej2-javascript
control: Achieve file upload programmatically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to upload programmatically in ##Platform_Name## File Upload

You can upload a file programmatically using the [upload](../../api/uploader#upload) method. Use the [getFilesData](../../api/uploader#getfilesdata) public method to retrieve the selected files from the Uploader. The file list returned by `getFilesData` can be passed to the `upload` method to trigger an upload for specific files without user interaction.

The `upload` method accepts an array of file objects (as returned by `getFilesData`) and behaves differently based on its arguments:
* If this method receives any files as arguments, only those files will be uploaded.
* If no arguments are provided, all the selected files will be uploaded.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/dynamic-upload-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/dynamic-upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/dynamic-upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/dynamic-upload-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/dynamic-upload-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/dynamic-upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/dynamic-upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/dynamic-upload-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.