---
layout: post
title: Template in ##Platform_Name## File Upload | Syncfusion
description: Learn how to customize file list, buttons, and preview layouts in the Syncfusion ##Platform_Name## File Upload using templates.
platform: ej2-javascript
control: Template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## File Upload

You can customize the default appearance of the uploader using a template along with buttons.

## File list template

The [template](../api/uploader#template) property is used to customize the default appearance of each file in the list. It can be an HTML element or a string. The selected or dropped files are displayed as per the template layout provided. The remove and progress bar actions are handled using the corresponding events (such as `removing` and `uploading`) when the template is defined.

For example, you can display a file type icon along with the default UI elements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/custom-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/custom-template-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/custom-template-cs1/index.css %}
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
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/custom-template-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs1" %}
{% endif %}

## Custom template

You can design your own template by replacing the default file list, including the buttons. The [showFileList](../api/uploader#showfilelist) property (for example, `showFileList: false`) is used to display either the default file list or your own file list. When you use a custom template to upload or remove files, pass the custom UI argument as `true` when calling the `upload`/`remove` public methods, as follows:

* UploaderObj.[upload](../api/uploader#upload)(filesData, true);
* UploaderObj.[remove](../api/uploader#remove)(filesData, true);

Refer to the following code sample.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/custom-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/custom-template-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/custom-template-cs2/index.css %}
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
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/custom-template-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs2" %}
{% endif %}

> You can also explore [##Platform_Name## File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [##Platform_Name## File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [Customize progress bar](./how-to/customize-progressbar)
* [Customize button with HTML element](./how-to/customize-button-with-html-element)
* [Customize drop area](./how-to/hide-default-drop-area)
