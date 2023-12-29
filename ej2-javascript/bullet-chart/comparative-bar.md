---
layout: post
title: Comparative bar in ##Platform_Name## Bullet chart control | Syncfusion
description: Learn here all about Comparative bar in Syncfusion ##Platform_Name## Bullet chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Comparative bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Comparative bar in ##Platform_Name## Bullet chart control

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the [`targetField`](../api/bullet-chart#targetfield) should be mapped to the appropriate field from the datasource.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/targetbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/targetbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/targetbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/targetbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/targetbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/targetbar-cs1" %}
{% endif %}

## Types of target bar

The shape of the target bar can be customized using the [`targetTypes`](../api/bullet-chart#targettypes) property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/targetbar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/targetbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/targetbar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/targetbar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/targetbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/targetbar-cs2" %}
{% endif %}

## Target bar customization

The following properties can be used to customize the target bar. Also, you can bind the color for the target bar from [`dataSource`](../api/bullet-chart/#datasource) for the bullet chart.

* [`targetColor`](../api/bullet-chart#targetcolor) - Specifies the fill color of target bar.
* [`targetWidth`](../api/bullet-chart#targetwidth) - Specifies the width of target bar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/targetbar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/targetbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/targetbar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/targetbar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/targetbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/targetbar-cs3" %}
{% endif %}