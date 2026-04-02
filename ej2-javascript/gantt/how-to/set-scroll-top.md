---
layout: post
title: Set Vertical Scroll Position in ##Platform_Name## Gantt Chart Control | Syncfusion
description: Learn how to programmatically set the vertical scroll position in the Syncfusion ##Platform_Name## Gantt Chart control for efficient navigation in large project datasets.
platform: ej2-javascript
control: Open add edit dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set Vertical Scroll Position in ##Platform_Name## Gantt Chart Control

The [setScrollTop](../../api/gantt#setscrolltop) method in the ##Platform_Name## Gantt Chart control enables programmatic control of the vertical scroll position, allowing efficient navigation to specific tasks in large project datasets. By specifying a numeric pixel value (e.g., `100` for 100px), you can scroll the grid portion of the Gantt (task rows) to focus on a desired task or area. For example, clicking a button to scroll to a task at row 50 enhances user experience in projects with thousands of tasks. Ensure the Gantt has a defined `dataSource` and `height` (e.g., "600px") to calculate the scrollable content area accurately. Use pixel-based scroll values to position the viewport precisely, with the maximum scroll limited by the total content height, which varies with dataset size or when [enableVirtualization](../../api/gantt#enablevirtualization) is enabled for optimized performance. This method integrates seamlessly with virtual scrolling and row selection (via [selectedRowIndex](../../api/gantt#selectedrowindex)), making it ideal for automating navigation, such as scrolling to a newly added task or a selected task, enhancing project management workflows.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/scroll-top-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/scroll-top-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/scroll-top-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/scroll-top-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/scroll-top-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/scroll-top-cs1" %}
{% endif %}