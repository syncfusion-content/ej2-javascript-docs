---
layout: post
title: Virtualization in ##Platform_Name## AutoComplete | Syncfusion
description: Render large Syncfusion ##Platform_Name## AutoComplete datasets efficiently with enableVirtualization, reusing DOM nodes while scrolling.
platform: ej2-javascript
control: Virtualization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## AutoComplete

AutoComplete virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [`enableVirtualization`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#enablevirtualization) option in an AutoComplete activates this virtualization technique.

When fetching data from the data source, the [`actionBegin`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#actionbegin) event is triggered before data retrieval begins. Then, the [`actionComplete`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#actioncomplete) event is triggered once the data is successfully fetched.

When the `enableVirtualization` property is enabled, the `skip` and `take` properties provided within the `Query` at the initial state or during the `actionBegin` or `actionComplete` events will not be considered, since they are internally managed and calculated based on certain dimensions with respect to the popup height.

## Binding local data

The AutoComplete can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [`fields`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#fields) property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server. As the data is being fetched, the `actionBegin` event occurs before the data retrieval starts. Once the data retrieval is successful, the `actionComplete` event is triggered, indicating that the data fetch process is complete.

In the following example, the `text` column from the data has been mapped to the `value` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/virtual-scroll/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/virtual-scroll/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll" %}
{% endif %}


## Binding Remote data

The AutoComplete supports the retrieval of data from remote data services with the help of the `DataManager` component, triggering the `actionBegin` and `actionComplete` events, and then updating the list data. During virtual scrolling, additional data is retrieved from the server, triggering the `actionBegin` and `actionComplete` events at that time as well.

The following sample displays the `OrderId` from the `Orders` data service.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll-remote" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll-remote/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll-remote" %}
{% endif %}

## Customizing the items count in virtualization

When the `enableVirtualization` property is enabled, the `take` property provided within the `Query` parameter at the initial state or during the `actionBegin` event is considered. Internally, it calculates the items that fit onto the current page (i.e., roughly twice the height of the popup). If the user-provided `take` value is less than the minimum number of items that fit into the popup, the user-provided `take` value will not be considered.

The following sample shows an example of customizing the items count in virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-items/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll-items/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/virtual-scroll-items/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll-items/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Grouping with Virtualization

The AutoComplete component supports grouping with virtualization. It allows you to organize elements into groups based on different categories. Each item in the list can be classified using the [`groupBy`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#fields) field in the data table. After grouping, virtualization works similarly to local data binding, providing a seamless user experience. When the data source is bound to remote data, an initial request is made to retrieve all data for the purpose of grouping. Subsequently, the grouped data works in the same way as local data binding virtualization, enhancing performance and responsiveness.

The following sample shows an example of grouping with virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/virtual-scroll-group/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll-group/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll-group" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/virtual-scroll-group/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/virtual-scroll-group/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/virtual-scroll-group" %}
{% endif %}

