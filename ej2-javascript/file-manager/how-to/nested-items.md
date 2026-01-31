---
layout: post
title: Nested items in ##Platform_Name## File Manager component | Syncfusion
description: Learn here all about Nested items in Syncfusion ##Platform_Name## File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: File Manager
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# c in ##Platform_Name## File Manager component

The File Manager can be rendered inside other UI components such as Dialog and more.

* [Adding File Manager inside the Dialog](#adding-file-manager-inside-the-dialog)
* [Adding File Manager inside the Tab](#adding-file-manager-inside-the-tab)

## Adding File Manager inside the Dialog

The example below shows the File Manager rendered inside a Dialog. Click the browse button in the Uploader element to open the File Manager inside the Dialog.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/file-upload-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/file-upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/file-upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/file-upload-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/file-upload-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/file-upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/file-upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/file-upload-cs1" %}
{% endif %}

## Adding File Manager inside the Tab

The example below demonstrates placing the File Manager inside the content area of a Tab.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/file-tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/file-tab-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/file-tab-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/file-tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/file-tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/file-tab-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/file-tab-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/file-tab-cs1" %}
{% endif %}