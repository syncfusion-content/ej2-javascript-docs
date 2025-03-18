---
layout: post
title: Set different work hours in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Set different work hours in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set different work hours 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set different work hours in ##Platform_Name## Scheduler control

By default, the work hours of the Scheduler is highlighted based on the start and end values provided within the [`workHours`](https://ej2.syncfusion.com/documentation/api/schedule#workhours) property which remains same for all days. If you need to highlight different work hour ranges for specific days, you can use the [`setWorkHours`](https://ej2.syncfusion.com/documentation/api/schedule#setworkhours) method. You can pass date object/ multiple date objects collection as first argument and start and end time need to be added as work hours should be passed as second and third arguments respectively.

In the following example, when you click the button, the work hours for February 15th and 17th will be set to 11:00 AM - 8:00 PM, while the other days maintain their default work hours.

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