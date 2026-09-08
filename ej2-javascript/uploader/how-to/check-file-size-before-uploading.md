---
layout: post
title: How to check file size in ##Platform_Name## File Upload | Syncfusion
description: Learn how to check the file size in the Syncfusion ##Platform_Name## File Upload using the uploading event and convert the byte value to KB or MB before upload.
platform: ej2-javascript
control: Check file size before uploading 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to check file size in ##Platform_Name## File Upload

By handling the [uploading](../../api/uploader#uploading) event, you can get the file size before uploading it to the server. The file size is available in the event arguments (for example, `args.filesData[0].size`) and is expressed in bytes.

The File object exposes the file size in bytes. You can convert the size to a human-readable format (`KB` or `MB`) using the [bytesToSize](../../api/uploader#bytestosize) method, which returns a formatted string such as `1.5 MB`. To cancel an upload based on the file size, set `args.cancel` to `true` within the `uploading` event handler.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/check-file-size-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/check-file-size-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/check-file-size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/check-file-size-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/check-file-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/check-file-size-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/check-file-size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/check-file-size-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.