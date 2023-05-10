---
layout: post
title: Template in ##Platform_Name## Uploader control | Syncfusion
description: Learn here all about Template in Syncfusion ##Platform_Name## Uploader control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Uploader control

You can customize the default appearance of uploader using a template along with buttons.

## File list template

The [template](../api/uploader/#template) property is used to customize the default appearance of each file in the list. It can be represented as the HTML element or string. The selected or dropped files are displayed as per the template layout provided. The remove and progress bar action is handled using the corresponding events when the template is defined.

For example, you can display file type icon along with default UI elements.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/custom-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/custom-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/custom-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/custom-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs1" %}
{% endif %}

## Custom template

You can design the own template by preventing the default file list including buttons. The [showFileList](../api/uploader/#showfilelist) property used to display whether the default file list or own file list When you use custom template to upload or remove the files, pass the custom UI argument as true to call `upload`/`remove` public method as follows:

* UploaderObj.[upload](../api/uploader/#upload)(filesData, true);

* UploaderObj.[remove](../api/uploader/#remove)(filesData, true);

Refer to the following code sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/custom-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/custom-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/custom-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/custom-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs2" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [Customize progress bar](./how-to/customize-progressbar)
* [Customize button with HTML element](./how-to/customize-button-with-html-element)
* [Customize drop area](./how-to/hide-default-drop-area)
