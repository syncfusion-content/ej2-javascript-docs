---
layout: post
title: How to open on condition in ##Platform_Name## Dialog | Syncfusion
description: Open the ##Platform_Name## Dialog only when a condition is met by setting args.cancel to true in the beforeOpen event for validation.
platform: ej2-javascript
control: Prevent opening of the dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to open a Dialog on condition in ##Platform_Name## Dialog

You can prevent opening of  the dialog by setting the [beforeOpen](https://ej2.syncfusion.com/documentation/api/dialog/index-default#beforeopen) event argument cancel value to true.
In the following sample, the success dialog is opened when you enter the username value with minimum 4 characters. Otherwise, it will not be opened.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-check-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-check-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dlg-check-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-check-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-check-cs1" %}
{% endif %}