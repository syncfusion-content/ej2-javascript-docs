---
layout: post
title: How to keep Dialog centered in ##Platform_Name## Dialog | Syncfusion
description: Keep the ##Platform_Name## Dialog centered while the page scrolls by adding the e-fixed CSS class via the cssClass property.
platform: ej2-javascript
control: Position the dialog on center of the page on scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to keep Dialog fixed on page scroll in ##Platform_Name## Dialog

By default, when you scroll the page or container, the Dialog also scrolls along with it. When a user expects the Dialog to stay in the same position without scrolling, this can be achieved at the sample level as shown below. Here, the `e-fixed` class is added to the Dialog element by using the [cssClass](https://ej2.syncfusion.com/documentation/api/dialog/index-default#cssclass) property, which prevents the Dialog from scrolling with the page. Note that `e-fixed` is not a built-in class; you must define it in your page styles as `.e-fixed { position: fixed; }`. In the following sample, the `cssClass` is applied dynamically in the `#targetButton` click handler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/scrollposition-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/scrollposition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/scrollposition-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/scrollposition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs1" %}
{% endif %}