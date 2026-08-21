---
layout: post
title: How to set a clear button in ##Platform_Name## Calendar | Syncfusion
description: Add a custom clear button to the ##Platform_Name## Calendar footer in the created event to let users reset the selected value with one click.
platform: ej2-javascript
control: Set clear button in calendar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set a clear button in ##Platform_Name## Calendar

To configure `clear` button in Calendar UI, do the following:

1. To the [`created`](../../api/calendar#created) event of the Calendar, add the required elements to make clear button visible. In the following example, Essential<sup style="font-size:70%">&reg;</sup> JS 2 button component within `div` element is used.

2. When the `e-footer` class is used, the div tag acts as the footer.

3. Using these button, selected date can be cleared.

4. Bind the required event handler to the button tags to update the value.

Code example is as follows:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/how-to-cs1" %}
{% endif %}
