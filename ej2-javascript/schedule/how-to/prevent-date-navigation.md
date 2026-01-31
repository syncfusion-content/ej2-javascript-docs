---
layout: post
title: Disable date navigation in ##Platform_Name## Scheduler | Syncfusion
description: Learn here all about Prevent date navigation in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Prevent date navigation in ##Platform_Name## Scheduler control

By default, clicking on date headers in the Scheduler control navigates to the corresponding date view. In certain scenarios, you may want to disable this navigation behavior to maintain a fixed view.

You can prevent date navigation by removing the `e-navigate` CSS class from the header cells. This can be achieved using the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event, as shown in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/how-to-cs1" %}
{% endif %}