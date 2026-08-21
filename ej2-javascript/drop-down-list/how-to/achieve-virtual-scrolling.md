---
layout: post
title: How to virtual scroll in ##Platform_Name## Dropdown List | Syncfusion
description: Load large data in Syncfusion ##Platform_Name## Dropdown List incrementally via the scroll event and addItem method to simulate virtual scrolling.
platform: ej2-javascript
control: Achieve virtual scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to achieve virtual scrolling in ##Platform_Name## Dropdown List

The Virtual Scrolling is used to display a large amount of data without buffering the entire load of a huge database record in the DropDownList, that is, when scrolling, the request is sent and fetch some amount of data from the server dynamically. Using the `scroll` event, get the data and generate the list add to popup using the `addItem` method.

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
