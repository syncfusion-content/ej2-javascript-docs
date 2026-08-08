---
layout: post
title: Manually Refresh Layout in ##Platform_Name## Scheduler | Syncfusion
description: Learn how to manually refresh specific templates and the overall layout in the Syncfusion ##Platform_Name## Scheduler without re-rendering the entire component.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically Refresh Layout in ##Platform_Name## Scheduler

In Scheduler, we can able to refresh the layout manually without re-render the DOM element by using the [`refreshLayout`](../../api/schedule#refreshlayout) public method.  The following example code explains to know how to use the refreshLayout method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/refresh-layout-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/refresh-layout-cs1" %}
{% endif %}
