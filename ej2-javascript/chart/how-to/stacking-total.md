---
layout: post
title: Stacking total in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Stacking total in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stacking total 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Stacking total in ##Platform_Name## Chart control

By using the `annotation`, you can show any element in desired view.

To show the total value in data points, follow the given steps:

**Step 1**:

Define annotation for each x point in chart, now change the annotation value in chart by using the [`annotationRender`](../../api/chart/chartModel/#annotationrender) event. In this event, assign the stacked value of the last series to the annotation to show the total value of the
stacking series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/how-to-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/how-to-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/how-to-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/how-to-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs17" %}
{% endif %}