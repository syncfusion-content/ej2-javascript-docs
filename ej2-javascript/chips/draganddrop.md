---
layout: post
title: Drag and drop in ##Platform_Name## Chips control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion ##Platform_Name## Chips control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name## Chips control

The Chips control enables drag and drop functionality for any chip when [`allowDragAndDrop`](../api/chips#allowdraganddrop) is set to **true**. Chips can be dragged and dropped within the same or across external ChipList containers.

When dragging a chip, an indicator line appears between chips, showing the exact position where the chip will be dropped. This visual indicator helps users place chips precisely at the desired location.

* To prevent dragging action for a specific chip, use the [`dragStart`](../api/chips#dragstart) event, which triggers when chip dragging begins. Similarly, to prevent dropping action for a specific chip, use the [`dragStop`](../api/chips#dragstop) event, which triggers when dragging ends.

* The [`dragging`](../api/chips#dragging) event triggers while a chip is being dragged. You can customize the appearance of the cloned chip element during this event.

* You can set the drag area for the chips using the [`dragArea`](../api/chips#dragarea) property which allows the dragging of cloned chip only within the specified element. It accepts an element Id or class as a string and defaults to `null`.

In the following sample, the [`allowDragAndDrop`](../api/chips#allowdraganddrop) property is enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chips/draganddrop/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chips/draganddrop/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/draganddrop" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chips/draganddrop/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chips/draganddrop/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chips/draganddrop" %}
{% endif %}