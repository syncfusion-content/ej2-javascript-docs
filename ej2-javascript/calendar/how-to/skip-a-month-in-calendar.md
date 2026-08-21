---
layout: post
title: How to skip a month in ##Platform_Name## Calendar | Syncfusion
description: Skip a month when the user clicks the previous or next icon in ##Platform_Name## Calendar using the navigated event and navigateTo method.
platform: ej2-javascript
control: Skip a month in calendar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to skip a month in ##Platform_Name## Calendar

The following example demonstrates how to skip a month in the Calendar while clicking the previous and next icons. In the example below,  the [`navigated`](../../api/calendar#navigated) event is used to skip a month with [`navigateTo`](../../api/calendar#navigateto) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs8" %}
{% endif %}
