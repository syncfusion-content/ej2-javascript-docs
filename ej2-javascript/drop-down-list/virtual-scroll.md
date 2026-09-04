---
layout: post
title: Virtualization in ##Platform_Name## Dropdown List | Syncfusion
description: Render large Syncfusion ##Platform_Name## Dropdown List datasets efficiently with enableVirtualization, reusing DOM nodes while scrolling.
platform: ej2-javascript
control: Virtualization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## Dropdown List

DropDownList virtualization is a technique used to efficiently render long lists of items while minimizing the impact on performance. It is particularly useful when dealing with large datasets, as it ensures that only a fixed number of DOM (Document Object Model) elements are created and displayed in the component. As the user scrolls through the list, the existing DOM elements are reused to display the relevant data, rather than creating new elements for each item. Enabling the [`enableVirtualization`](../api/drop-down-list#enablevirtualization) option in a DropDownList activates this virtualization technique, significantly enhancing the list's performance and user experience, especially when handling large datasets.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/virtual-scroll/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/virtual-scroll" %}
{% endif %}

## Keyboard interaction

Users can navigate through the scrollable content using keyboard actions. This feature loads the next item or set of items based on the key inputs in the popup.

| Key | Action |
|-----|-----|
| `ArrowDown` | Loads the next virtual list item if the selection is present on the last item of the current page. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `ArrowUp` | Loads the previous virtual list item if the selection is present on the first item of the current page. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `PageDown` | Loads the next page and selects the last item in it. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `PageUp` | Loads the previous page and selects the first item in it. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `Home` | Loads the initial set of items and selects the first item in it. |
| `End` | Loads the last set of items and selects the last item in it. |

## Limitations of virtualization

* Virtualization is not supported in the grouping feature.
* The selected value may or may not be present in the current viewport.
* Once filtered, close the popup. Then reopen the popup to get the initially loaded items.
* Virtualization does not work when a keyboard action is performed while the popup is closed.

