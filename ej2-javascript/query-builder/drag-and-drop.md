---
layout: post
title: Drag and Drop in ##Platform_Name## Query Builder UI | Syncfusion
description: Reposition rules and groups in the ##Platform_Name## Query Builder UI by enabling allowDragAndDrop, and handle dragStart, drag, and drop events for custom logic.
platform: ej2-javascript
control: Drag and drop
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in ##Platform_Name## Query Builder UI

The Query Builder provides the functionality to reposition rules or groups within the component effortlessly. This enhancement provides a more intuitive and flexible way to construct and modify queries. Use [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#allowDragAndDrop) to enable drag and drop functionality. Events are also supported for drag and drop features that indicate the [`dragStart`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#dragStart), [`drag`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#drag) and [`drop`](https://ej2.syncfusion.com/documentation/api/query-builder/index-default#drop) actions.

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