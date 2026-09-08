---
layout: post
title: How to add html attributes in ##Platform_Name## File Upload | Syncfusion
description: Learn how to add custom HTML attributes to ##Platform_Name## File Upload input element using the htmlAttributes property.
platform: ej2-javascript
control: Add html attributes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add HTML attributes in ##Platform_Name## File Upload

You can add additional HTML attributes such as disabled, value, name, and more to the input element using the [htmlAttributes](../../api/uploader#htmlAttributes) property. This property accepts an object literal of attribute name/value pairs. If both the property and an equivalent HTML attribute are configured, the component uses the property value.

The following example demonstrates how to set attributes using the `htmlAttributes` property in the Uploader.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/html-attr-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/html-attr-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/html-attr-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/html-attr-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/html-attr-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/html-attr-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/html-attr-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/html-attr-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.