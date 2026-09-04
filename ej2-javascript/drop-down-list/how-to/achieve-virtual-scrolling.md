---
layout: post
title: Virtual Scrolling in ##Platform_Name## Dropdown List | Syncfusion
description: Load large data in Syncfusion ##Platform_Name## Dropdown List incrementally via the scroll event and addItem method to simulate virtual scrolling.
platform: ej2-javascript
control: Achieve virtual scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to achieve virtual scrolling in ##Platform_Name## Dropdown List

Virtual scrolling is used to display a large amount of data in the DropDownList without buffering the entire dataset. As you scroll, a request is sent to fetch a subset of records from the server dynamically. Use the `scroll` event to retrieve the data and append new items to the popup by using the `addItem` method.

Refer to the following code sample for virtual scrolling.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/virtual-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/virtual-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/virtual-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/virtual-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-cs1" %}
{% endif %}
