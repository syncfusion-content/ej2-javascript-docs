---
layout: post
title: Adaptive in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Adaptive in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Adaptive 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adaptive in ##Platform_Name## Tab control

The following section explains how to render the Tab when its width exceeds the viewable area, or for a specified [`width`](../api/tab#width). The available modes are as follows:

* Scrollable
* Popup
* MultiRow
* Extended

## Scrollable

The default [`overflowMode`](../api/tab#overflowmode) is Scrollable. The Scrollable display mode supports displaying the Tab header items in a single line with horizontal scrolling enabled when the items overflow the available space.

* The right and left navigation arrows are added at the start and end of the Tab header, allowing the user to navigate towards overflowed items in the Tab header.
* You can also view the overflowed items using touch and swipe actions on the header and content section.
* By default, the navigation icon in the left direction is disabled, but you can view the overflowed items by moving in the right direction.
* By clicking or holding the arrow continuously, you can view the overflowed items.

![Scrollable tab](./images/tabscroll.gif)

* In devices the navigation icons are not available. You can touch and swipe to see the overflowed items of the Tab header.

![Touch scroll](./images/touchscroll.gif)

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/adaptive-scroll-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-scroll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/adaptive-scroll-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/adaptive-scroll-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-scroll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/adaptive-scroll-cs1" %}
{% endif %}

## Popup

The Popup is another type of [`overflowMode`](../api/tab#overflowmode) in which the Tab container holds items that can be accommodated within the available space. The rest of the overflowing items, for which there is no space to fit within the viewing area, are moved to an overflow popup container.

* The items placed in the popup can be viewed by opening the popup using the drop-down icon at the end of the Tab header.
* If the popup height exceeds the visible area height, you can scroll through the popup items and select one.

![Tab with popup](./images/popup.gif)

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/adaptive-popup-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-popup-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/adaptive-popup-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/adaptive-popup-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-popup-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/adaptive-popup-cs2" %}
{% endif %}

## MultiRow

The `MultiRow` display mode allows the Tabs to wrap the toolbar items to the next line when the available space is exhausted. This mode is ideal for scenarios where space is limited, but all commands need to be visible at once.

* The Tabs automatically arranges the items into multiple lines without the need for scrolling.
* This ensures that users have immediate access to all Tab items without additional interaction such as scrolling or clicking a popup.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/adaptive-multirow/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-multirow/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/adaptive-multirow" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/adaptive-multirow/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-multirow/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/adaptive-multirow" %}
{% endif %}

![Tab multirow](./images/tab-multirow.png)

## Extended

`Extended` mode hides the overflowing Tab items in a subsequent row. Users can access these items by clicking on expand icons provided at the end of the Tab.

* In this mode, the Tab maintains a clean top row and allows extra items to be rendered into additional rows.
* Clicking the expand icons will dynamically adjust the Tab to reveal hidden toolbar items.
* If the popup content overflows the height of the page, remaining elements will be hidden.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/adaptive-extended/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-extended/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/adaptive-extended" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/adaptive-extended/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-extended/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/adaptive-extended" %}
{% endif %}

![Tab extended](./images/tab-extended.gif)

## See Also

* [How to prevent content swipe selection](./how-to/prevent-content-swipe-selection/)
* [Collapsible Tab](./how-to/create-collapsible-tabs/)