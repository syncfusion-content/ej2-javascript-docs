---
layout: post
title: Views in ##Platform_Name## File Manager control | Syncfusion
description: Learn here all about Views in Syncfusion ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Views
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Views in ##Platform_Name## File Manager control

View is the section where the files and folders are displayed for the user to browse. The [`view`](../api/file-manager/#view) API can also be used to change the initial view of the File Manager control.

The File Manager control has two types of [`views`](../api/file-manager/#view) to display the files and folders:

* [LargeIcons View](#largeicons-view)
* [Details View](#details-view)

## LargeIcons View

By default, the File Manager control is rendered with the large icons view. The following example demonstrates this.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/view-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/view-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/view-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/view-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/view-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/view-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/view-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/view-cs2" %}
{% endif %}

## Details View

Details view is an injectable module in the File Manager control, so it should be injected before rendering the File Manager control to avail its functionality. The default appearance of the File Manager control can be changed from large icons to the details view by using the [`view`](../api/file-manager/#view) property. The following example demonstrates the File Manager control with the details view.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/view-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/view-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/view-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/view-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/view-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/view-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/view-cs3/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/view-cs3" %}
{% endif %}