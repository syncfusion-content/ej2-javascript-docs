---
layout: post
title: Period selector in ##Platform_Name## Range navigator control | Syncfusion
description: Learn here all about Period selector in Syncfusion ##Platform_Name## Range navigator control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Period selector 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Period selector in ##Platform_Name## Range navigator control

The period selector allows to select a range with specified periods.

## Periods

An array of objects that allows the users to specify pre-defined time intervals. The `interval` property specifies the count value of the button, and the `text` property specifies the text to be displayed on the button. The `intervaltype` property allows the users to customize the interval type, and it supports the following types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs1" %}
{% endif %}

>To use the period selector feature, inject the `PeriodSelector` module using the `RangeNavigator.Inject(PeriodSelector)` method.

## Positioning period selector

The `position` property allows the users to position the period selector at the **Top** or **Bottom**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs2" %}
{% endif %}

## Height

The `height` property allows the users to specify the height of the period selector. The default value of the height property is **43px**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs3" %}
{% endif %}

## Visibility of range navigator

The `disableRangeSelector` property allows the users to display only the period selector and not the Range Selector.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rangenavigator/periodselector-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/periodselector-cs4" %}
{% endif %}

## See Also

* [LightWeight](./lightweight/)