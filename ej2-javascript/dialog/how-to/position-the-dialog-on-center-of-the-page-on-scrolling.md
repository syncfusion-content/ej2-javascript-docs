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

# How to keep Dialog centered on page scroll in ##Platform_Name## Dialog

By default, when scroll the page/container Dialog also scrolled along with the page/container. When a user expects to display the Dialog in the same position without scrolling achieving this in sample level as like below. Here added 'e-fixed' class to Dialog element by using [cssClass](https://ej2.syncfusion.com/documentation/api/dialog/index-default#cssclass) property and prevent the scrolling.

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