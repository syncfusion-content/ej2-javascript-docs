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

You can prevent the opening of the Dialog by setting the [beforeOpen](https://ej2.syncfusion.com/documentation/api/dialog/index-default#beforeopen) event argument's `cancel` value to `true`. Note that `args` is of type `BeforeOpenEventArgs`, whose `cancel` property controls whether the Dialog opens.
In the following sample, the success Dialog is opened when you enter a username value with a minimum of 4 characters and a non-empty password. Otherwise, it will not be opened.

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