---
layout: post
title: How to check mime type in ##Platform_Name## File Upload | Syncfusion
description: Learn how to check the MIME type of a file in ##Platform_Name## File Upload using the uploading event to inspect files.
platform: ej2-javascript
control: Check the mime type of file before upload 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to check MIME type in ##Platform_Name## File Upload

By handling the [uploading](../../api/uploader#uploading) event, you can inspect the file's MIME type before it is uploaded to the server. The MIME type is available in the event arguments (for example, `args.filesData[0].type`). To reject a file based on its MIME type, set `args.cancel` to `true` within the `uploading` event handler. In the following sample, the file's MIME type is displayed in an alert box before the file is uploaded.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/mime-type-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/mime-type-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/mime-type-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/mime-type-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/mime-type-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/mime-type-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/mime-type-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/mime-type-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.