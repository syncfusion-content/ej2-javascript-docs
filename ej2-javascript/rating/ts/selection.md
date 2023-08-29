---
layout: post
title: Selection in ##Platform_Name## Rating control | Syncfusion
description: Learn here all about Selection in Syncfusion ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Selection in ##Platform_Name## Rating control

The rating control allows users to rate something using a visual scale, and the selection state can be changed by the user clicking or tapping on the stars in the rating scale or through code. The rating control has a minimum value and a reset button, and provides customization options for the selected rating value and selection behavior.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/selection-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/selection-cs5/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/selection-cs5/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/selection-cs5" %}

## Min value

You can use the [`min`](../api/rating/#min) property of the rating control to set the minimum possible rating value the user can select. If you set the `min` property to 2, then you will not be able to select a rating lower than 2.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/selection-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/selection-cs6/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/selection-cs6/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/selection-cs6" %}

## Single selection

You can use the [`enableSingleSelection`](../api/rating/#enablesingleselection) property of the rating control to select only one item at a time. When the `enableSingleSelection` property is set to `true`, only the selected item will be considered to be in the selected state, while all other items will be unselected.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/selection-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/selection-cs7/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/selection-cs7/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/selection-cs7" %}

## Show or hide reset button

You can reset the rating value to its default by using the [`allowReset`](../api/rating/#allowreset) property of the rating control. When the `allowReset` property is set to `true`, a reset button will be shown that allows the user to reset the rating value to its default.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/selection-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/selection-cs8/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/selection-cs8/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/selection-cs8" %}
