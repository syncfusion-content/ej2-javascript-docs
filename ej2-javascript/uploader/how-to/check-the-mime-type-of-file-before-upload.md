---
layout: post
title: Check the mime type of file before upload in ##Platform_Name## Uploader control | Syncfusion
description: Learn here all about Check the mime type of file before upload in Syncfusion ##Platform_Name## Uploader control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check the mime type of file before upload 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check the mime type of file before upload in ##Platform_Name## Uploader control

By using the [uploading](../../api/uploader/#uploading) event, you can get the file MIME type before uploading it to the server. In the following sample, file MIME type is shown in the alert box before the file starts to upload.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/mime-type-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/mime-type-cs1/index.html %}
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
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/mime-type-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.