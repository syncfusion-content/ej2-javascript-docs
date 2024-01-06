---
layout: post
title: Step Types in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Step Types with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Step types in ##Platform_Name## Stepper control

The Stepper control provides support for displaying steps with the following step types.

## Default type

In default type, the Stepper displays steps with a combination of both indicators and labels by setting the [stepType](https://ej2.syncfusion.com/documentation/api/stepper#steptype) property as `Default`. By default, the Stepper displays steps in the `Default` type.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/defaultStepper/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/defaultStepper/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/defaultStepper/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/defaultStepper" %}

## Label type

In label type, the Stepper displays the steps with only the step labels by setting the [stepType](https://ej2.syncfusion.com/documentation/api/stepper#steptype) property as `Label`.

> When both label and text are defined, the label takes priority in displaying the steps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/labelOnly/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/labelOnly/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/labelOnly/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/labelOnly" %}

### Label positions

You can display the label on the top, bottom, left, or right side of the steps using the [labelPosition](https://ej2.syncfusion.com/documentation/api/stepper#labelposition) property. 

The following label positions are supported in Stepper:

| Value | Description |
|-----|-----|
| `Top` | Positions the label at the top of each step. |
| `Bottom` | Positions the label at the bottom of each step. |
| `Start` | Positions the label to the left side of each step. |
| `End` | Positions the label to the right side of each step. |

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/labelPosition/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/labelPosition/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/labelPosition/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/labelPosition" %}

## Indicator type

In indicator type, the Stepper displays steps with only the step indicators by setting the [stepType](https://ej2.syncfusion.com/documentation/api/stepper#steptype) property as `Indicator`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/indicatorOnly/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/indicatorOnly/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/indicatorOnly" %}