---
layout: post
title: How to customize points in ##Platform_Name## Chart | Syncfusion
description: Learn here all about Points customization in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize points in ##Platform_Name## Chart

You can customize the series points with patterns by using the `pointColorMapping` property.

To customize the series point colors, follow the given steps:

**Step 1**:

Define the patterns and map the pattern URL to the series point using `pointColorMapping` property in series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/pattern-point-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/pattern-point-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/chart/pattern-point-cs1" %}