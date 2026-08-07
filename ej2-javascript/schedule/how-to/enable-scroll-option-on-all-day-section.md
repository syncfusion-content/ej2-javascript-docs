---
layout: post
title: Scroll on All-Day Section in ##Platform_Name## Scheduler | Syncfusion
description: Learn how to enable a scroll option on the all-day section in the Syncfusion ##Platform_Name## Scheduler when many appointments overflow the row.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable Scrolling in the All-Day Section of the ##Platform_Name## Scheduler

When the all-day row contains a large number of appointments, viewing all of them can become difficult due to limited space. To address this, enable an individual scroller for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/documentation/api/schedule#enablealldayscroll) property to `true` (default value is `false`).

>Note: This property is not applicable for Scheduler with height `auto`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/event-cs39/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs39/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/event-cs39/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/event-cs39" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/event-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/event-cs39" %}
{% endif %}