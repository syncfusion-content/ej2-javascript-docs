---
layout: post
title: How to add items in ##Platform_Name## ListBox | Syncfusion
description: Add a single item or a list of items to the Syncfusion ##Platform_Name## ListBox dynamically using the addItems method.
platform: ej2-javascript
control: Add items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Add Items in ##Platform_Name## ListBox

To add an item or multiple items, [`addItems`](../../api/list-box/#additems) method can be used. In the following example, the `Bugatti Veyron Super Sport` and `SSC Ultimate Aero` items will be added while clicking `Add Items` button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/add-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/add-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/add-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/add-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/add-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/add-items-cs1" %}
{% endif %}