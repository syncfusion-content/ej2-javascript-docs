---
layout: post
title: Form Support in ##Platform_Name## File Upload | Syncfusion
description: Learn how the Syncfusion ##Platform_Name## File Upload integrates with HTML forms, submits files alongside form data, and supports native form submission.
platform: ej2-javascript
control: Form support 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Form Support in ##Platform_Name## File Upload

The Uploader component works with HTML form like default file input. The following configuration is must to make the Uploader work inside the form.

    *   `saveUrl` and `removeUrl` must be null.
    *   `autoUpload` must be disabled.
    *   `name` attribute must be added in input element.

The selected or dropped files are received as a collection in form action when the form is submitted. The form action handles the server-side operations that manage the file upload process. When you reset the form, the file list and data will be cleared.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/form-support-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/form-support-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/form-support-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/form-support-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/form-support-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/form-support-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/form-support-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/form-support-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.
