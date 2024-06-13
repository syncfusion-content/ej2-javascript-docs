---
layout: post
title: Drag and drop in ##Platform_Name## Query builder control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion ##Platform_Name## Query builder control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name## Query builder control

The Query Builder provides the functionality to reposition rules or groups within the component effortlessly. This enhancement provides a more intuitive and flexible way to construct and modify queries. You can use [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/query-builder/#allowDragAndDrop) to perform drag and drop functionality. And we have events support for drag and drop features that, indicates the [`dragStart`](https://ej2.syncfusion.com/documentation/api/query-builder/#dragStart), [`drag`](https://ej2.syncfusion.com/documentation/api/query-builder/#drag) and [`drop`](https://ej2.syncfusion.com/documentation/api/query-builder/#drop) actions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/drag-and-drop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/drag-and-drop-cs1" %}
{% endif %}