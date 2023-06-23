---
layout: post
title: Labels in ##Platform_Name## Rating control | Syncfusion
description: Learn here all about Labels in Syncfusion ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Labels 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Labels in ##Platform_Name## Rating control

You can use the [`showLabel`](../api/rating#showlabel) property to display a label that shows the current value of the rating. When the `showLabel` property is set to `true`, a label will be displayed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rating/labels-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/labels-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/labels-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/labels-cs1" %}

## Label position

The rating control allows you to place the label on the top, bottom, left, or right side of the rating using the [`labelPosition`](../api/rating#labelposition) property.

The following label positions are supported:

* Top: The label is placed on the top of the rating.
* Bottom: The label is placed on the bottom of the rating.
* Left: The label is placed on the left side of the rating.
* Right: The label is placed on the right side of the rating.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rating/label-positions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/label-positions-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/label-positions-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/label-positions-cs1" %}

## Label template

You can use the [`labelTemplate`](../api/rating#labeltemplate) tag directive to specify a custom template for the `Label` of the rating. The current value of the rating will be passed as the `value` property in the template context when building the content of the label. This allows you to include dynamic information about the rating in the template.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rating/labels-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/labels-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/labels-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/labels-cs2" %}
