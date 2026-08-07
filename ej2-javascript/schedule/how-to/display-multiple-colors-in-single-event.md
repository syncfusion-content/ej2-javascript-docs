---
layout: post
title: Display Multi-Color Events in ##Platform_Name## Scheduler | Syncfusion
description: Learn how to render a single appointment in multiple colors in the Syncfusion ##Platform_Name## Scheduler using a custom event template.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multi-Color events in ##Platform_Name## Scheduler

The Scheduler allows rendering a single event with multiple colors by dividing its visual representation into segments of different background colors. This is achieved using the [`template`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettingsModel#template) property of [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule#eventsettings).
Here, we've used `SubCount` as an additional field. The SubCount field contains the background color and height values. Based on these values, events will be divided into different colors.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/multiple-color-event/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/multiple-color-event/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/multiple-color-event" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/multiple-color-event/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/multiple-color-event/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/multiple-color-event" %}
{% endif %}
