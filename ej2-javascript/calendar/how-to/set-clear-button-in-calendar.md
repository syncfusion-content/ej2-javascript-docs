---
layout: post
title: Set clear button in calendar in ##Platform_Name## Calendar control | Syncfusion
description: Learn here all about Set clear button in calendar in Syncfusion ##Platform_Name## Calendar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set clear button in calendar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set clear button in calendar in ##Platform_Name## Calendar control

To configure `clear` button in Calendar UI, do the following:

1. To the [`created`](../../api/calendar#created) event of the Calendar, add the required elements to make clear button visible. In the following example, Essential JS 2 button component within `div` element is used.

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
