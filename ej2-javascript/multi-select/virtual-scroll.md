---
layout: post
title: Virtualization in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Render large lists efficiently in the Syncfusion ##Platform_Name## MultiSelect Dropdown using enableVirtualization and incremental search.
platform: ej2-javascript
control: Virtualization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## MultiSelect Dropdown

MultiSelect virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [`enableVirtualization`](../api/multi-select#enablevirtualization) option in a MultiSelect activates this virtualization technique.

When fetching data from the data source, the [`actionBegin`](../api/multi-select#actionbegin) event is triggered before data retrieval begins. Then, the [`actionComplete`](../api/multi-select#actioncomplete) event is triggered once the data is successfully fetched.

Furthermore, incremental search is supported with virtualization in the MultiSelect component. When a key is typed, focus is moved to the respective element when the popup is open. When the popup is closed, the popup opens and focus is moved to the respective element in the popup list based on the typed key. The incremental search functionality is well-suited for scenarios involving remote data binding.

## Binding local data

The MultiSelect can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [`fields`](../api/multi-select#fields) property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server.

In the following example, the `id` and `text` columns from the data have been mapped to the `value` and `text` fields, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll" %}
{% endif %}


## Binding remote data

The MultiSelect supports the retrieval of data from remote data services with the help of the `DataManager` component, triggering the `actionBegin` and `actionComplete` events, and then updating the list data. During virtual scrolling, additional data is retrieved from the server, triggering the `actionBegin` and `actionComplete` events at that time as well.

The following sample displays the `OrderId` from the `Orders` data service.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll-remote/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-remote/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-remote" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll-remote/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-remote/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-remote" %}
{% endif %}

## Customizing the items count in virtualization

When the `enableVirtualization` property is enabled, the `take` property provided within the `Query` parameter at the initial state or during the `actionBegin` event is considered. Internally, it calculates the items that fit onto the current page (i.e., roughly twice the height of the popup). If the user-provided `take` value is less than the minimum number of items that fit into the popup, the user-provided `take` value will not be considered.

The following sample shows an example of customizing the items count in virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll-items/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-items/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll-items/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-items/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Grouping with virtualization

The MultiSelect component supports grouping with virtualization. It allows you to organize elements into groups based on different categories. Each item in the list can be classified using the [`groupBy`](../api/multi-select#fields) field in the data table. After grouping, virtualization works similarly to local data binding, providing a seamless user experience. When the data source is bound to remote data, an initial request is made to retrieve all data for the purpose of grouping. Subsequently, the grouped data works in the same way as local data binding on virtualization.

The following sample shows an example of grouping with virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll-group/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-group/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-group" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll-group/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-group/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-group" %}
{% endif %}

## Filtering with virtualization

The MultiSelect component supports filtering with virtualization. The MultiSelect includes a built-in feature that enables data filtering when the [`allowFiltering`](../api/multi-select#allowfiltering) option is enabled. In the context of virtual scrolling, the filtering process operates in response to the typed characters. Specifically, the MultiSelect sends a request to the server, utilizing the full data source, to achieve filtering. Before initiating the request, an `actionBegin` event is triggered. Upon successful retrieval of data from the server, an `actionComplete` event is triggered. The initial data is loaded when the popup is opened. The popup then closes regardless of whether the filter list has a selection.

The following sample shows an example of filtering with virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll-filter/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-filter/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-filter" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll-filter/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-filter/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-filter" %}
{% endif %}

## Checkbox with virtualization

The MultiSelect component supports CheckBox selection with virtualization. The MultiSelect comes with integrated functionality that allows for the selection of multiple values using checkboxes when the [`mode`](../api/multi-select#mode) property is configured to `CheckBox`. In the context of virtual scrolling, the checkbox renders with each list element. Based on the checkbox selection and unselection, the component's `value` property is updated with the respective values.

The following sample shows an example of checkbox with virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll-check/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-check/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-check" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll-check/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-check/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-check" %}
{% endif %}

## Custom value with virtualization

The MultiSelect component supports custom value with virtualization. When the [`allowCustomValue`](../api/multi-select#allowcustomvalue) property is enabled, the MultiSelect enables users to include a new option not currently in the component's value. Upon selecting this newly added custom value, the MultiSelect triggers the [`customValueSelection`](../api/multi-select#customvalueselection) event, and the custom value is also added to the end of the complete list.

The following sample shows an example of custom value with virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll-custom/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-custom/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-custom" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll-custom/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-custom/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-custom" %}
{% endif %}

## Preselect values with virtualization

The MultiSelect component supports preselected values with virtualization. When binding values from local or remote data to the MultiSelect component, the corresponding data value is fetched from the server and promptly updated within the component. Moreover, when binding a custom value to the component, the value is updated within the component, and the bound custom value is seamlessly appended to the end of the complete list.

The following sample shows an example of preselect value with virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-preselect" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/virtual-scroll-preselect/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/virtual-scroll-preselect" %}
{% endif %}

