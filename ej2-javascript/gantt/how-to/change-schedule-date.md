---
layout: post
title: Change schedule date in ##Platform_Name## Gantt control | Syncfusion
description: Learn how to programmatically update project schedule dates in the Syncfusion ##Platform_Name## Gantt Chart control to adjust timelines and task schedules efficiently.
platform: ej2-javascript
control: Schedule dates
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Update Project Schedule Dates in ##Platform_Name## Gantt Chart Control

The [updateProjectDates](../../api/gantt#updateprojectdates) method in the ##Platform_Name## Gantt Chart control enables programmatic adjustment of the project's start and end dates, seamlessly updating the timeline and task positions for efficient schedule management. By passing valid `Date` objects for the start and end dates, you can shift the entire project timeline, such as moving a project forward by a month to accommodate delays. An optional Boolean `roundOff` parameter, when set to **true**, aligns dates to the timeline's unit (e.g., days or weeks), ensuring a clean and consistent display. Ensure the Gantt has a defined `dataSource` and [timelineSettings](../../api/gantt#timelinesettings) to render the updated schedule accurately. Use valid date formats and leverage the `roundOff` option to optimize timeline rendering for clarity.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/how-to-changescheduledates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-changescheduledates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-changescheduledates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/how-to-changescheduledates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-changescheduledates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/how-to-changescheduledates-cs1" %}
{% endif %}