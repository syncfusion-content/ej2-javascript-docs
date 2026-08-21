---
layout: post
title: How to select a sequence in ##Platform_Name## Calendar | Syncfusion
description: Auto-select an entire week of dates in ##Platform_Name## Calendar using the values property with isMultiSelection and Moment.js week math.
platform: ej2-javascript
control: Select a sequence of dates in calendar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to select a sequence in ##Platform_Name## Calendar

The following example demonstrates how to select the week dates of chosen date in the Calendar using [`values`](../../api/calendar#values) property, when [`multiSelection`](../../api/calendar#ismultiselection) property is enabled. Methods of Moment.js is used in this sample for calculating the start and end of week from the selected date.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/how-to-multiselect-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/how-to-multiselect-cs1" %}
{% endif %}
