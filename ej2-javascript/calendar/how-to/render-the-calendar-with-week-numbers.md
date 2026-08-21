---
layout: post
title: How to show week numbers in ##Platform_Name## Calendar | Syncfusion
description: Display ISO week numbers alongside each row in the ##Platform_Name## Calendar by enabling the weekNumber property on the component.
platform: ej2-javascript
control: Render the calendar with week numbers 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show week numbers in ##Platform_Name## Calendar

You can enable `weekNumbers` in the Calendar by using the [`weekNumber`](../../api/calendar#weeknumber) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs7" %}
{% endif %}