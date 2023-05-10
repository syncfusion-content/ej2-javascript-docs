---
layout: post
title: Prevent data label in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Prevent data label in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Prevent data label 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Prevent data label in ##Platform_Name## Chart control

To prevent the chart data label when the data value is 0, follow the given steps:

**Step 1**:

Get the point value and check whether the `args.point.y` value is zero or not by using the [`textRender`](../../api/chart/chartModel/#textrender) event. If the value is zero, then set the `args.cancel` to true.

The output will appear as follows,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/how-to-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/how-to-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/how-to-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs15" %}
{% endif %}