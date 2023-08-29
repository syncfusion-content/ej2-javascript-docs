---
layout: post
title: Appearance in ##Platform_Name## Rating control | Syncfusion
description: Learn here all about Appearance in Syncfusion ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## Rating control

You can also customize the appearance of rating control.

## Items count

You can specify the number of rating items using the [`itemsCount`](../api/rating/#itemscount) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/appearance-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/appearance-cs8/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/appearance-cs8/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/appearance-cs8" %}

## Disabled

You can disable the rating control by using the [`disabled`](../api/rating/#disabled) property. When the `disabled` property is set to `true`, the rating control will be disabled and the user will not be able to interact with it and a disabled rating control may have a different visual appearance than an enabled one.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/appearance-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/appearance-cs9/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/appearance-cs9/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/appearance-cs9" %}

## Visible

You can use the [`visible`](../api/rating/#visible) property of the rating control to control the visibility of the control. When the `visible` property is set to `true`, the rating control will be visible on the page. When it is set to `false`, the control will be hidden.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/visible-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/visible-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/visible-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/visible-cs2" %}

## Read only

You can use the [`readOnly`](../api/rating/#readonly) property of the rating control to make the control non-interactive and prevent the user from changing the rating value.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/appearance-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/appearance-cs10/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/appearance-cs10/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/appearance-cs10" %}

## CssClass

You can customize the appearance of the rating control, such as by changing its colors, fonts, sizes, or other visual aspects by using the [`cssClass`](../api/rating/#cssclass) property.

### Changing rating symbol border color

You can change the rating icon border color in rating control, you can use the `cssClass` property and set the `text-stroke` CSS property of `.e-rating-icon` to your desired border color.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/appearance-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/appearance-cs11/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/appearance-cs11/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/appearance-cs11" %}

### Changing rated/un-rated symbol fill color

You can customize the fill colors of rated and un-rated icons in the rating control using the `cssClass` property and the `linear-gradient` color-stops in the `background` CSS property of `.e-rating-icon`. The **first** color-stop defines the rated fill color and the **second** defines the un-rated fill color.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/appearance-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/appearance-cs12/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/appearance-cs12/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/appearance-cs12" %}

This will customize the rated fill color to `#ffe814` and un-rated fill color to `#d8d7d4`. `--rating-value` in the linear-gradient provides the current value of the rating item.

### Changing the item spacing

You can change the space between the rating items in rating control, by using the `cssClass` property and setting the `margin` / `padding` CSS property of `.e-rating-item-container` to your desired size.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/appearance-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/appearance-cs13/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/appearance-cs13/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/appearance-cs13" %}

## Changing icon using CssClass

You can change the rating item icon in rating control, you can use the `cssClass` property and set the `content` CSS property of `.e-icons.e-star-filled:before` to your desired font icon.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/appearance-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/appearance-cs14/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/appearance-cs14/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/appearance-cs14" %}
