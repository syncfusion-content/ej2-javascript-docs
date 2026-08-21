---
layout: post
title: How to style Dialog in ##Platform_Name## Dialog | Syncfusion
description: Customize the ##Platform_Name## Dialog appearance by passing a template string or HTML element to the content property for an error-window look.
platform: ej2-javascript
control: Customize the dialog appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the Dialog appearance in ##Platform_Name## Dialog

You can customize the dialog appearance by providing dialog template as string or HTML element to the [content](https://ej2.syncfusion.com/documentation/api/dialog/index-default#content) property. In the following sample, dialog is customized as error window appearance.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/error-dialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/error-dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/error-dialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/error-dialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/error-dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/error-dialog-cs1" %}
{% endif %}