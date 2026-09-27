---
layout: post
title: Filter List box Data Using TextBox in ##Platform_Name## List box control | Syncfusion
description: Learn here all about Filter ListBox Data in Syncfusion ##Platform_Name## List box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter ListBox
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Filter ListBox Data Using TextBox Component

This example demonstrates how to filter Syncfusion<sup style="font-size:70%">&reg;</sup> ListBox data based on input from a TextBox. Bind an input event listener to the TextBox to capture user input and filter the items in the ListBox. Within the event handler, use the [`filter`](../../api/list-box/#filter) method to update the ListBox items, ensuring that only those matching the input text are included.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/filter-listbox-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/filter-listbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/filter-listbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/filter-listbox-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/filter-listbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/filter-listbox-cs1" %}
{% endif %}