---
layout: post
title: Detect uploader files in ##Platform_Name## File Upload | Syncfusion
description: Learn how to determine whether the Syncfusion ##Platform_Name## File Upload has an input file selected by using the required attribute and validation message.
platform: ej2-javascript
control: Determine whether the uploader has input file 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to detect uploader files in ##Platform_Name## File Upload

By setting the `required` attribute on the Uploader input element, you can validate whether the input file has a value. The `required` attribute can be applied through the [htmlAttributes](../../api/uploader#htmlAttributes) property, and the validation is triggered when the Uploader is used within a form or with the FormValidator. In the following sample, the `required` attribute is set on the Uploader input element and the validation failure message is shown using the `data-required-message` attribute.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/required-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/required-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/required-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/required-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/required-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/required-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/required-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/required-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.