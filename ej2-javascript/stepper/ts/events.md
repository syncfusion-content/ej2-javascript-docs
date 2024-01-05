---
layout: post
title: Events in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Events with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## Stepper control

This section describes the Stepper events that will be triggered when an appropriate actions are performed. The following events are available in the Stepper control.

## created

The Stepper control triggers the [created](https://ej2.syncfusion.com/documentation/api/stepper#created) event when the control rendering is completed.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/created/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/created" %}

## stepChanged

The Stepper control triggers the [stepChanged](https://ej2.syncfusion.com/documentation/api/stepper#stepchanged) event after the active step is changed.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepChanged/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepChanged/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepChanged" %}

## stepChanging

The Stepper control triggers the [stepChanging](https://ej2.syncfusion.com/documentation/api/stepper#stepchanging) event before the active step change.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepChanging/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepChanging/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepChanging" %}

## stepClick

The Stepper control triggers the [stepClick](https://ej2.syncfusion.com/documentation/api/stepper#stepclick) event when the step is clicked.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepClick/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepClick" %}

## beforeStepRender

The Stepper control triggers the [beforeStepRender](https://ej2.syncfusion.com/documentation/api/stepper#beforesteprender) event before rendering each step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/beforeStepRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/beforeStepRender/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/beforeStepRender" %}