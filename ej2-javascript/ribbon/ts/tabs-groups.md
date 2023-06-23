---
layout: post
title: Tabs and Groups in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Tabs and Groups with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Tabs Groups
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tabs and Groups in Ribbon control

The Ribbon control consists of a series of tabs that are organized into groups to enable quick access to specific commands or tools. Each tab contains a set of groups, and each group contains collections of items that are logically related to each other.

## Adding Tabs

You can use the [tabs](https://ej2.syncfusion.com/documentation/api/ribbon#tabs) property to add tabs to the Ribbon control and define the content of the tab header by using the [header](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonTabModel/#header) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/tabs-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/tabs-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/tabs-cs1" %}

## Adding Groups

You can use the [groups](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonTabModel/#groups) property to add groups for each tab in the Ribbon and define the name of the group header by using the [header](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupModel/#header) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/groups-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/groups-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/groups-cs1" %}

## Adding Items

You can add collections of items to each group by using the [collections](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupModel/#collections) and [items](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCollectionModel/#items) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/tabs-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/tabs-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/tabs-cs2" %}