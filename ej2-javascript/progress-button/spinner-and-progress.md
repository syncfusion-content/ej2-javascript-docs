---
layout: post
title: Spinner and progress in ##Platform_Name## Progress button control | Syncfusion
description: Learn here all about Spinner and progress in Syncfusion ##Platform_Name## Progress button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spinner and progress 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD002 MD022 -->
# Spinner and progress in ##Platform_Name## Progress button control

### Change spinner position

Spinner position can be changed by modifying the [`position`](../api/progress-button/spinSettingsModel#position) property of[`spinSettingsModel`](../api/progress-button/spinSettingsModel). By default, the spinner is positioned at the left of the ProgressButton. You can position it at the `left`, `right`, `top`, `bottom`, or `center` of the text content.

### Change spinner size

Spinner size can be changed by modifying the [`width`](../api/progress-button/spinSettingsModel#width) property of [`spinSettingsModel`](../api/progress-button/spinSettingsModel). In this demo, the `width` is set to `20` to change the spinner size.

### Spinner template

You can use custom spinner by specifying the [`template`](../api/progress-button/spinSettingsModel#template) property of [`spinSettingsModel`](../api/progress-button/spinSettingsModel) with custom styles.

The following sample demonstrates the above functionalities of the spinner.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/spinner-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/spinner-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/spinner-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/spinner-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/progress-button/spinner-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/spinner-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/spinner-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-button/spinner-cs1" %}
{% endif %}

## Progress

### Content animation

The [`content`](../api/progress-button#content) of the ProgressButton can be animated during progress using the [`effect`](../api/progress-button/animationSettingsModel#effect) property of [`animationSettingsModel`](../api/progress-button/animationSettingsModel). You can also set custom duration and timing function using the [`duration`](../api/progress-button/animationSettingsModel#duration) and [`easing`](../api/progress-button/animationSettingsModel#easing) properties. The possible `effect` values are `None`, `SlideLeft`, `SlideRight`, `SlideUp`, `SlideDown`, `ZoomIn`, and `ZoomOut`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs4/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/progress-button/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs4/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs4" %}
{% endif %}

### Change step of the ProgressButton

The progress can be visualized at the specified interval by changing the [`step`](../api/progress-button/progressEventArgs#step) property in the [`begin`](../api/progress-button#begin) event of the ProgressButton. In this demo, the `step` property is set to `20` to show progress at every 20% increment.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs5/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs5/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/progress-button/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs5/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs5/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs5" %}
{% endif %}

> The class `e-hide-spinner` hides the spinner in the ProgressButton, For more information, see [hide spinner](./how-to/hide-spinner) section.

### Change progress dynamically

The progress can be changed dynamically by modifying the [`percent`](../api/progress-button/progressEventArgs#percent) property in the ProgressButton events. In this demo, on 40% completion of progress, the `percent` property is set to `90` to show dynamic change of the progress.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs6/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs6/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/progress-button/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs6/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs6/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs6" %}
{% endif %}

> The method [`dataBind`](../api/progress-button#databind) applies the property changes immediately to the component.

### Start and stop methods

You can pause and resume the progress using the [`stop`](../api/progress-button#start) and [`start`](../api/progress-button#stop) methods, respectively. In this demo, clicking the ProgressButton will pause and resume the progress.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs7/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs7/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/progress-button/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs7/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs7/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs7" %}
{% endif %}

## See Also

* [How to hide spinner](./how-to/hide-spinner)
* [Customize ProgressButton using cssClass](how-to/customize-progress-using-cssclass)