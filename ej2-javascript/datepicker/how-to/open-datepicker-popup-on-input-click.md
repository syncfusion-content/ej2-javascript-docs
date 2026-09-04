---
layout: post
title: How to open popup on click in ##Platform_Name## DatePicker | Syncfusion
description: Open the ##Platform_Name## DatePicker popup when the input receives focus by calling the show method inside the focus event handler.
platform: ej2-javascript
control: Open datepicker popup on input click 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to open popup on click in ##Platform_Name## DatePicker

The DatePicker popup can be opened on input click by using the `show` method in the `focus` event.

The following example demonstrates how to open the DatePicker popup on focusing the input.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/open-popup-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/open-popup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/open-popup-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/open-popup-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/open-popup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/open-popup-cs1" %}
{% endif %}
