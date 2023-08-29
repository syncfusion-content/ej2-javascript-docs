---
layout: post
title: Internationalization in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about Internationalization in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Internationalization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in ##Platform_Name## Circular gauge control

Circular Gauge provides internationalization support for below elements.

* Axis Labels
* Tooltip

For more information about number formatter, you can refer [internationalization](https://ej2.syncfusion.com/documentation/common/internationalization/).

## Globalization

Globalization is the process of designing and developing a control that works in different cultures/locales.

Internationalization library is used to globalize number in the Circular Gauge using [format](../api/circular-gauge/label/#format-string) property in [labelStyle](../api/circular-gauge/label).

**Numeric Format**

In the below example, axis labels are globalized to **EUR**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-axes-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-axes-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-axes-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-axes-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-axes-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-axes-cs18" %}
{% endif %}

## Right-to-left

Circular Gauge can render its elements from right to left, which improves the user experience for certain language users. To do so, set the [enableRtl](../api/circular-gauge/#enablertl) property to **true**. When this property is enabled, elements such as the tooltip and legend will be rendered from right to left. Meanwhile, the axis can be rendered from right to left by setting the [direction](../api/circular-gauge/axis/#direction) property to **AntiClockWise**. For more information on axis, click [here](../circular-gauge/gauge-axes/#angles-and-direction).

The following example illustrates the right to left rendering of the Circular Gauge.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-axes-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-axes-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-axes-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-axes-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-axes-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-axes-cs19" %}
{% endif %}