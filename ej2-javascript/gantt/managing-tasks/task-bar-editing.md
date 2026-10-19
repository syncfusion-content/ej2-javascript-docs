---
layout: post
title: Task bar editing in ##Platform_Name## Gantt Chart Control | Syncfusion
description: Learn how to edit tasks via taskbar interactions in the Syncfusion ##Platform_Name## Gantt Chart control for intuitive project timeline adjustments.
platform: ej2-javascript
control: Task bar editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Editing Tasks Using Taskbar Drag and Resize in ##Platform_Name## Gantt Chart

Task bar editing in the ##Platform_Name## Gantt Chart control enables intuitive project timeline adjustments by allowing to drag or resize taskbars to modify task details, such as start dates, durations, or progress, using mouse or touch interactions. Enable this feature by setting the [allowTaskbarEditing](../../api/gantt/editSettings#allowtaskbarediting) property to **true** and injecting `Edit`, ensuring task data aligns with valid [taskFields](../../api/gantt#taskfields) mappings (e.g., id, startDate, duration). Taskbars can be dragged to shift dates, resize them to adjust durations, or move progress grips to update completion percentages. The [taskbarEditing](../../gantt/events#taskbarediting) event allows preventing edits for specific tasks, while the [queryTaskbarInfo](../../gantt/events#querytaskbarinfo) event customizes taskbar visuals by hiding editing indicators like resizer or connector points.

## Edit taskbars

Enable taskbar editing by setting [allowTaskbarEditing](../../api/gantt/editSettings#allowtaskbarediting) to **true** and injecting `Edit`. Drag taskbars to adjust start and end dates, resize them to modify durations, or adjust progress grips to update completion percentages, ideal for quick timeline updates.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs13" %}
{% endif %}

## Prevent taskbar editing for specific tasks

Prevent taskbar editing for specific tasks using the [taskbarEditing](../../gantt/events#taskbarediting) event by setting its `cancel` property to **true** based on task data, such as protecting milestones. Customize taskbar visuals by hiding editing indicators (e.g., resizer, connector points) using the [queryTaskbarInfo](../../gantt/events#querytaskbarinfo) event, ensuring a tailored editing experience.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/editing-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editing-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/editing-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/editing-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editing-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/editing-cs5" %}
{% endif %}

## Enable taskbar drawing

The Gantt Chart control supports creating new tasks by dragging directly on the timeline. This feature is enabled via the [allowTaskbarDraw](../../api/gantt/editSettingsModel#allowtaskbardraw) property in the [editSettings](../../api/gantt/index-default#editsettings) configuration. Taskbar drawing is intended for scheduling unscheduled tasks and requires [allowUnscheduledTasks](../../api/gantt/index-default#allowunscheduledtasks) to be enabled.

Dragging across the timeline schedules an unscheduled task by defining its timeline range. The resulting task duration is calculated based on the configured scheduling settings.

The following example demonstrates how to enable taskbar drawing:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/taskbar-draw/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/taskbar-draw/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/taskbar-draw" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/taskbar-draw/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/taskbar-draw/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/taskbar-draw" %}
{% endif %}

## See also
- [How to configure task editing?](../../gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](../../gantt/task-dependency)
- [How to configure critical path?](../../gantt/critical-path)