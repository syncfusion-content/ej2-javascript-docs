---
layout: post
title: Set Different Work Hours in ##Platform_Name## Scheduler | Syncfusion
description: Learn how to set different work hours for specific days in the Syncfusion ##Platform_Name## Scheduler to match varied team schedules.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set Different Work Hours in ##Platform_Name## Scheduler

By default, the work hours in the Scheduler are highlighted based on the start and end values defined within the [`workHours`](https://ej2.syncfusion.com/documentation/api/schedule#workhours) property, which applies uniformly to all days. If you need to highlight different work hour ranges for specific days, you can use the [`setWorkHours`](https://ej2.syncfusion.com/documentation/api/schedule#setworkhours) method.  

This method accepts:  
- A single date object or a collection of date objects as the first argument.  
- The start time as the second argument.  
- The end time as the third argument.  

In the following example, clicking the button sets the work hours for **February 15th and 17th** to **11:00 AM – 8:00 PM**, while other days continue to display their default work hours.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/open-editor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/open-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/open-editor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/open-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs2" %}
{% endif %}