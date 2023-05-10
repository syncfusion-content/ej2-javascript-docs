---
layout: post
title: Prevent opening of the dialog in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Prevent opening of the dialog in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Prevent opening of the dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Prevent opening of the dialog in ##Platform_Name## Dialog control

You can prevent opening of  the dialog by setting the [beforeOpen](../../api/dialog/#beforeopen) event argument cancel value to true.
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