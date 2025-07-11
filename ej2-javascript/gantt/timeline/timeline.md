---
layout: post
title: Timeline in ##Platform_Name## Gantt Control | Syncfusion
description: Learn here all about timeline in Syncfusion Essential ##Platform_Name## Gantt control, its elements and more.
platform: ej2-javascript
control: Timeline 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Timeline in ##Platform_Name## Gantt Control

In the Gantt control, timeline is used to represent the project duration as individual cells with defined unit and formats.

## Timeline view modes

Gantt contains the following in-built timeline view modes:

* Hour
* Day
* Week
* Month
* Year

Timescale mode in Gantt can be defined by using [`timelineViewMode`](../../api/gantt/timelineViewMode/) property and also we can define timescale mode of top tier and bottom tier by using [`topTier.unit`](../../api/gantt/timelineTierSettingsModel/#unit) and [`bottomTier.unit`](../../api/gantt/timelineTierSettingsModel/#unit) properties.

### Week timeline mode

In the `Week` timeline mode, the upper part of the schedule header displays the weeks, whereas the bottom half of the header displays the days. Refer to the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs1" %}
{% endif %}

### Month timeline mode

In the `Month` timeline mode, the upper part of the schedule header displays the months, whereas the bottom header of the schedule displays its corresponding weeks. Refer to the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs2" %}
{% endif %}

### Year timeline mode

In the `Year` timeline mode, the upper schedule header displays the years whereas, the bottom header displays its corresponding months. Refer to the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs3" %}
{% endif %}

### Day timeline mode

In the `Day` timeline mode, the upper part of the header displays the days whereas, the bottom schedule header displays its corresponding hours. Refer to the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs4" %}
{% endif %}

### Hour timeline mode

An `Hour` timeline mode tracks the tasks in minutes scale. In this mode, the upper schedule header displays hour scale and the lower schedule header displays its corresponding minutes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs5" %}
{% endif %}

## Week start day customization

In the Gantt control, you can customize the week start day using the [`weekStartDay`](../../api/gantt/timelineSettings/#weekstartday) property. By default, the [`weekStartDay`](../../api/gantt/timelineSettings/#weekstartday) is set to 0, which specifies the Sunday as a start day of the week. But, you can customize the week start day by using the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs6" %}
{% endif %}

## Customize automatic timescale update action

In the Gantt control, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [`updateTimescaleView`](../../api/gantt/timelineSettings/#updatetimescaleview) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs7" %}
{% endif %}

## Timeline cells tooltip

In the Gantt control, you can enable or disable the mouse hover tooltip of timeline cells using the [`timelineSettings.showTooltip`](../api/gantt/timelineSettings/#showtooltip) property. The default value of this property is true. The following code example shows how to enable the timeline cells tooltip in Gantt.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/gantt-tooltip-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/gantt-tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/gantt-tooltip-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/gantt-tooltip-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/gantt-tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/gantt-tooltip-cs2" %}
{% endif %}

## Show/hide weekends

The [timelineSettings.showWeekend](../../api/gantt/timelineSettings/#showWeekend) property is used to customize the timeline in the Gantt component by controlling the visibility of weekends. To exclude weekends from the timeline, set the `showWeekend` property to `false` in the `timelineSettings` configuration. This feature is particularly useful for focusing the timeline on working days, enhancing project management efficiency by hiding weekends from the view.

>Note: To customize non-working or weekend days in the Gantt chart, refer to the [workWeek](../../gantt/task-scheduling#weekendnon-working-days) documentation for detailed information.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-showweekend-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-showweekend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-showweekend-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-showweekend-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-showweekend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-showweekend-cs1" %}
{% endif %}

> Limitations
>* The `showWeekend` feature does not support baselines.
>* The `showWeekend` is not compatible with the manual task mode.
>* Non-working hours cannot be excluded when `showWeekend` is set to false.
>* Holidays are not excluded from the timeline if `showWeekend` is set to false.

## Timeline template

In the Gantt component, you can customize timeline cells using the [timelineTemplate](../../api/gantt/#timelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

* `date`: Defines the date of the timeline cells.
* `value`: Defines the formatted date value that will be displayed in the timeline cells.
* `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/gantt-tooltip-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/gantt-tooltip-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/gantt-tooltip-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/gantt-tooltip-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/gantt-tooltip-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/gantt-tooltip-cs4" %}
{% endif %}