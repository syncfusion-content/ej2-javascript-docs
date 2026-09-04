---
layout: post
title: Center a Dialog on Scroll in ##Platform_Name## Dialog | Syncfusion
description: Learn here all about Center the dialog based on current scroll position in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Center the dialog based on current scroll position 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Center a Dialog on Scroll in ##Platform_Name## Dialog | Syncfusion

The Dialog is always centered based on the [target](https://ej2.syncfusion.com/documentation/api/dialog/index-default#target) container. If the target is not specified, then the Dialog will be rendered in the document body and centered in the position of the current viewport.

In the following sample, the modal dialog is centered based on the current scroll position of the page.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/center-the-dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/center-the-dialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/center-the-dialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/center-the-dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/center-the-dialog-cs1" %}
{% endif %}