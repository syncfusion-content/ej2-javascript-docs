---
layout: post
title: Steps in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Steps with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Steps in ##Platform_Name## Stepper control

The JavaScript Stepper allows you to add steps using the [steps](https://ej2.syncfusion.com/javascript/documentation/api/stepper/#steps) property. Each step can be configured with options such as `iconCss`, `text`, `label`, `cssClass` and more.

## Adding steps

You can define the icon and text content for each step using the `iconCss`, `text` and `label` properties.

### Defining icon CSS

You can define the CSS class to show the icon for each step using the `iconCss` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/icon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/icon/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/icon/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/icon" %}

### Defining text content

You can define text instead of an icon by setting the `text` property and display label content for a step using the `label` property.

> When both label and text are defined, the label takes priority for display based on the `stepType`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/text/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/text/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/text" %}

## Optional steps

You can show whether the step is optional or not by using `optional` property. By default, the `optional` property is `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/optional/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/optional/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/optional/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/optional" %}

## Disabling steps

You can use the `disabled` property to disable a step, preventing user interaction when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/disabled/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/disabled/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/disabled/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/disabled" %}

## Setting active step

You can set the active step by specifying its index using the [activeStep](https://ej2.syncfusion.com/javascript/documentation/api/stepper#activestep) property. The default value is `0`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/activeStep/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/activeStep/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/activeStep/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/activeStep" %}

## Step status

Each step's progress state can be specified using the `status` property. The possible values are `NotStarted`, `InProgress` and `Completed`. By default, the value is `NotStarted.`

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/status/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/status/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/status/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/status" %}

## Step styling

You can use the `cssClass` property to customize the appearance of each step.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/cssClass/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/cssClass/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/cssClass/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/cssClass" %}

## Step validation

You can set the validation state for each step to displaying a success or error icon by using `isValid` property.

> To know more about Stepper validation, please refer to the [Validation](./steps-validation#validating-steps) section.