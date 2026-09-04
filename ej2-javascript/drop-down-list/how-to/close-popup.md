---
layout: post
title: How to close popup in ##Platform_Name## Dropdown List | Syncfusion
description: Close the Syncfusion ##Platform_Name## Dropdown List popup on window scroll by calling hidePopup in the scroll event handler.
platform: ej2-javascript
control: Close popup 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to close the popup in the ##Platform_Name## Dropdown List

By using the `hidePopup` method of the DropDownList, you can close the popup on scroll when the window's scroll event is triggered.

The following example demonstrates how to close the popup on scroll.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/close-on-scroll-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/close-on-scroll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/close-on-scroll-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/close-on-scroll-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/close-on-scroll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/close-on-scroll-cs1" %}
{% endif %}