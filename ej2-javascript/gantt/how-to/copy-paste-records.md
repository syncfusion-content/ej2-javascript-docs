---
layout: post
title: Copy and Paste Records in ##Platform_Name## Gantt Control | Syncfusion
description: Learn how to programmatically copy and paste records in the Syncfusion ##Platform_Name## Gantt Chart control using context menus for efficient task duplication.
platform: ej2-javascript
control: Copy paste records 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Copy and Paste Records in ##Platform_Name## Gantt Chart Control

The copy and paste functionality in the ##Platform_Name## Gantt Chart control enables efficient task duplication, allowing you to replicate tasks or entire task hierarchies using the [addRecord](../../api/gantt#addrecord) method and a custom context menu configured via [contextMenuItems](../../api/gantt#contextmenuitems). For example, right-clicking a parent task to copy and paste it with its child tasks at a specified position streamlines project management workflows. Inject `Edit` and enable `editSettings.allowAdding` to support adding copied records. Define valid [taskFields](../../api/gantt#taskfields) mappings (e.g., id, name, startDate) to ensure task data is correctly replicated, including hierarchical structures with child tasks. Use the [contextMenuClick](../../api/gantt#contextmenuclick) event to handle custom copy-paste actions, specifying the paste position (e.g., child, above, below) via `addRecord` parameters. This feature integrates with dependencies, critical path, and virtual scrolling, ensuring duplicated tasks align with the project structure for seamless schedule management.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/copypasterecords-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/copypasterecords-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/copypasterecords-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/copypasterecords-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/copypasterecords-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/copypasterecords-cs1" %}
{% endif %}