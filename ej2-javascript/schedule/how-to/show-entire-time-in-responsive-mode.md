---
layout: post
title: Responsive Full Time Display in ##Platform_Name## Scheduler | Syncfusion
description: Learn here all about Show entire time in responsive mode in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show entire time in responsive mode in ##Platform_Name## Scheduler control

In responsive mode, time slots may not always display the full time label if the available space is limited. For example, **9 AM** is visible since it has enough space, but if the Scheduler’s start hour is set to **08:45 AM**, the time slot may truncate the label.  

To ensure that complete time labels are displayed in responsive mode, you can use the [`majorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#majorslottemplate) property. This property allows customization of the major time slots to render proper and fully visible time labels in the Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/timescale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/timescale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs1" %}
{% endif %}