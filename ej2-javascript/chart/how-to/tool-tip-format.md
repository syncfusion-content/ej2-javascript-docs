---
layout: post
title: Tool tip format in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Tool tip format in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tool tip format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip format in ##Platform_Name## Chart control

Using [`tooltipRender`](../../api/chart/chartModel/#tooltiprender) event, you can able to format the datetime value instead of rendered value.

To format the datetime value,please follow the steps below

**Step 1**:

By using [`tooltipRender`](../../api/chart/chartModel/#tooltiprender) event we can able to get the current point x value. Using this value to format the tooltip by using `formatDate` method.

The output will appear as follows,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/how-to-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/how-to-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/how-to-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs19" %}
{% endif %}