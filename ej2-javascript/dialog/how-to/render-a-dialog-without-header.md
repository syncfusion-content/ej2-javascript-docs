---
layout: post
title: How to render Dialog no header in ##Platform_Name## Dialog | Syncfusion
description: Render the ##Platform_Name## Dialog without a header by setting the header property to an empty string or null.
platform: ej2-javascript
control: Render a dialog without header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to render a Dialog without a header in ##Platform_Name## Dialog

By default, the Dialog is rendered without a header. To explicitly render the Dialog without a header, you can either omit the [header](https://ej2.syncfusion.com/documentation/api/dialog/index-default#header) property (as shown in the following sample) or set its value to an empty string or `null`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dlg-header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-header-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dlg-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-header-cs1" %}
{% endif %}