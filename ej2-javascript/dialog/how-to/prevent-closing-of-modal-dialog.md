---
layout: post
title: How to prevent modal close in ##Platform_Name## Dialog | Syncfusion
description: Prevent the ##Platform_Name## modal Dialog from closing by setting args.cancel to true inside the beforeClose event handler.
platform: ej2-javascript
control: Prevent closing of modal dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent closing of modal Dialog in ##Platform_Name## Dialog

You can prevent the closing of a modal Dialog by setting the [beforeClose](https://ej2.syncfusion.com/documentation/api/dialog/index-default#beforeclose) event argument's `cancel` value to `true`. Note that the `args` parameter is of type `BeforeCloseEventArgs`, whose `cancel` property controls whether the Dialog closes; this approach works for both modal and non-modal Dialogs.
In the following sample, the Dialog is closed when you enter a username value with a minimum of 4 characters and a non-empty password. Otherwise, it will not be closed.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dlg-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-validation-cs1" %}
{% endif %}