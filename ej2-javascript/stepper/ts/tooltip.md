---
layout: post
title: Tooltip in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Tooltip with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in ##Platform_Name## Stepper control

The Stepper control supports tooltip to show additional information in the steps by setting the [showTooltip](https://ej2.syncfusion.com/documentation/api/stepper/#showtooltip) property to `true`. 

The tooltip appears when the user hovers over the step, providing the information such as the label or text. By default, the `showTooltip` property is `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/tooltip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/tooltip/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/tooltip/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltip" %}

## Tooltip template

You can use the [tooltipTemplate](https://ej2.syncfusion.com/documentation/api/stepper#tooltiptemplate) property to specify a custom template for the tooltips, providing detailed information about the steps.

When hovering over the step, the current step model is passed in the template context, allowing you to include dynamic information about the step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/tooltipTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/tooltipTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/tooltipTemplate/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltipTemplate" %}