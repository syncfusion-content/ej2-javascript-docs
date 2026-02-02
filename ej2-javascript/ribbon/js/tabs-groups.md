---
layout: post
title: Tabs and Groups in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Tabs and Groups with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tabs and Groups

The Ribbon control structure is a hierarchy of tabs, groups, and items that provides organized access to commands. Each tab contains one or more groups, and each group holds collections of related items.

## Adding Tabs

You can use the [tabs](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#tabs) property to add tabs to the Ribbon control and define the content of the tab header by using the [header](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonTabModel/#header) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/tabs-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/tabs-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/tabs-cs1" %}

## Adding Groups

You can use the [groups](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonTabModel/#groups) property to add groups for each tab in the Ribbon and define the name of the group header by using the [header](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#header) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/groups-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/groups-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/groups-cs1" %}

## Adding Items

You can add collections of items to each group by using the [collections](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#collections) and [items](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCollectionModel/#items) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/items-cs1" %}

> For more information on configuring built-in items and creating custom items, refer to the [Ribbon Items](./items) documentation.