---
layout: post
title: How to trigger input in ##Platform_Name## File Upload | Syncfusion
description: Learn how to trigger the input file click event in the Syncfusion ##Platform_Name## File Upload from an external button so the file dialog opens programmatically.
platform: ej2-javascript
control: Trigger click event of input file from external button 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to trigger input in ##Platform_Name## File Upload

The click event of the Uploader's input file can be triggered from an external button using the button's `click` event, which programmatically invokes the Uploader's internal file input click to open the file dialog. This requires the **Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Button** component (from the `@syncfusion/ej2-buttons` package). In the following sample, the input file click is triggered from the Button.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/external-click-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/external-click-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/external-click-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/external-click-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/external-click-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/external-click-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/external-click-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/external-click-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.