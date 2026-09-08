---
layout: post
title: Hide default drop area in ##Platform_Name## File Upload | Syncfusion
description: Learn how to hide the default drop area in the Syncfusion ##Platform_Name## File Upload by overriding CSS so only the browse button is shown to the user.
platform: ej2-javascript
control: Hide default drop area 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to hide default drop area in ##Platform_Name## File Upload

You can hide the default drop area by overriding the corresponding Uploader styles so that only the browse button remains visible. Override the following CSS selectors (using `display: none`) to hide the default drop area:

* `.e-upload.e-control` — the overall upload control wrapper.
* `.e-upload .e-file-select` — the browse/drop text area.
* `.e-upload .e-file-drop` — the drop zone.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/hide-drop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/hide-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/hide-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/hide-drop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/hide-drop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/hide-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/hide-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/hide-drop-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.