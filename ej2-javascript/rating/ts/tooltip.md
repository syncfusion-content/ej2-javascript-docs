---
layout: post
title: Tooltip in ##Platform_Name## Rating control | Syncfusion
description: Learn here all about Tooltip in Syncfusion ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tooltip 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in ##Platform_Name## Rating control

The rating control supports tooltip to show additional information in rating items by setting the [`showTooltip`](../api/rating#showtooltip) property. If enabled, the tooltip appears when the user hovers over a rating item.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/tooltip-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/tooltip-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/tooltip-cs4/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/tooltip-cs4" %}

## Tooltip template

You can use the [`tooltipTemplate`](../api/rating#tooltiptemplate) tag directive to specify a custom template for the `tooltip` of the rating. The current value of the rating will be passed as the `value` property in the template context when building the content of the tooltip. This allows you to include dynamic information about the rating in the template.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/tooltip-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/tooltip-cs5/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/tooltip-cs5/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/tooltip-cs5" %}

## Tooltip customization

You can customize the appearance of the tooltips using the `cssClass` property of the rating control and by defining the custom styles for tooltip elements like the below example.

> You can find more information about customizing the appearance of the tooltip in the [Tooltip Customization](https://ej2.syncfusion.com/documentation/tooltip/style) documentation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/tooltip-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/tooltip-cs6/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/tooltip-cs6/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/tooltip-cs6" %}
