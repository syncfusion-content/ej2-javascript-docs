---
layout: post
title: Work Breakdown Structure (WBS) in ##Platform_Name## Gantt component | Syncfusion
description: Learn how to integrate and manage WBS codes in the Syncfusion ##Platform_Name## Gantt component to improve task hierarchy visualization and project tracking.
platform: ej2-javascript
control: WBS Column
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Work Breakdown Structure (WBS) in ##Platform_Name## Gantt Component

The Work Breakdown Structure (WBS) organizes project tasks hierarchically in the Gantt component by assigning unique codes to each task. This system enhances visualization and management by clearly reflecting task relationships and levels. It is especially useful in complex environments like construction projects or enterprise-scale software development.

---

## Configuration and implementation

- **Enable WBS Codes**: Set the [`enableWBS`](https://ej2.syncfusion.com/documentation/api/gantt/#enablewbs) property to `true` to automatically generate unique task codes and their predecessors.
- **Auto-Update Codes**: Set the [`enableAutoWbsUpdate`](https://ej2.syncfusion.com/documentation/api/gantt/#enableautowbsupdate) property to `true` to maintain WBS code accuracy during operations like sorting, filtering, editing, or drag-and-drop.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/wbscolumn-cs1/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/gantt/wbscolumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/wbscolumn-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/wbscolumn-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/wbscolumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/wbscolumn-cs1" %}

{% endif %}

---

## Managing WBS code updates

For better performance, you can control when WBS codes are updated by using the [`actionBegin`](https://ej2.syncfusion.com/documentation/api/gantt/#actionbegin) and [`dataBound`](https://ej2.syncfusion.com/documentation/api/gantt/#databound) events. This is particularly useful during actions like dragging and dropping rows.

In the following example, WBS auto-update is enabled only during the **row drag and drop** action using these events.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/wbscolumn-cs2/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/gantt/wbscolumn-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/wbscolumn-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/wbscolumn-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/wbscolumn-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/wbscolumn-cs2" %}

{% endif %}

## Limitations

The WBS feature has a few limitations in the Gantt component:

* Editing of the WBS code and WBS predecessor columns is not supported.
* Load on demand is not supported with the WBS feature.
* WBS Code and WBS Predecessor fields cannot be mapped directly from the data source.
