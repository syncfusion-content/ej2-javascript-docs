---
layout: post
title: Virtualization in ##Platform_Name## MultiColumn Combobox control | Syncfusion
description: Checkout and learn about Virtualization in ##Platform_Name## MultiColumn Combobox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtualization
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## MultiColumn ComboBox control

MultiColumn ComboBox virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

Enabling the `enableVirtualization` property option in a MultiColumn ComboBox activates this virtualization technique.

## Binding local data

The MultiColumn Combobox can generate its list items through an object arrays of data. For this, the appropriate columns should be mapped to the `fields` property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/virtualization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/virtualization/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/virtualization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/virtualization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/virtualization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/virtualization" %}
{% endif %}

## Binding remote data

The MultiColumn Combobox supports retrieval of data from remote data services with the help of `DataManager` component. When using remote data, it initially fetches all the data from the server and then stores the data locally. During virtual scrolling, additional data is retrieved from the locally stored data.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/virtualization-remotedata/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/virtualization-remotedata/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/virtualization-remotedata" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/virtualization-remotedata/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/virtualization-remotedata/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/virtualization-remotedata" %}
{% endif %}