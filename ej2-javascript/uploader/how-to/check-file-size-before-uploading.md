---
layout: post
title: Check file size before uploading in ##Platform_Name## Uploader control | Syncfusion
description: Learn here all about Check file size before uploading in Syncfusion ##Platform_Name## Uploader control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check file size before uploading 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check file size before uploading in ##Platform_Name## Uploader control

By using the [uploading](../../api/uploader/#uploading) event, you can get the file size before uploading it to the server.
File object contains the file size in bytes only. You can convert the size to standard formats (`KB` or `MB`) using [bytesToSize](../../api/uploader/#bytestosize) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/check-file-size-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/check-file-size-cs1/index.html %}
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
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/check-file-size-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.