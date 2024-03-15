---
layout: post
title: Customization in  ##Platform_Name## Timeline control | Syncfusion
description:  Checkout and learn about Customization with ##Platform_Name## Timeline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timeline
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in ##Platform_Name## Timeline control

You can customize the Timeline items dot size, connectors, dot borders, dot outer space and more to personalize its appearance. This section explains the different ways for styling the items.

## Connector styling

### Common styling

You can define the styles applicable to the all the Timeline item connectors.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/customization/connector-common/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/connector-common/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/connector-common/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/connector-common" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/customization/connector-common/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/connector-common/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/connector-common/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/connector-common" %}
{% endif %}

### Individual styling

You can also apply unique styles to individual connectors, to differentiate specific items within the Timeline.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/customization/connector-individual/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/connector-individual/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/connector-individual/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/connector-individual" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/customization/connector-individual/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/connector-individual/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/connector-individual/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/connector-individual" %}
{% endif %}


## Dot styling

### Dot color

You can modify the color of the dots to highlight the specific Timeline items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/customization/dot-color/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-color/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-color/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-color" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/customization/dot-color/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-color/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-color/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-color" %}
{% endif %}


### Dot size

You can adjust the size of the dot to make it larger or smaller by using the `--dot-size` variable.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/customization/dot-size/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-size/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-size/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-size" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/customization/dot-size/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-size/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-size/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-size" %}
{% endif %}

### Dot shadow

You can add shadow effects to the Timeline dots to make it feel visually engaging by using the `--dot-outer-space` & `--dot-border` variables.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/customization/dot-shadow/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-shadow/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-shadow/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-shadow" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/customization/dot-shadow/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-shadow/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-shadow/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-shadow" %}
{% endif %}

### Dot variant

You can achieve the desired dot variant by customizing the border, outline and background colors of the Timeline dots.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/customization/dot-variant/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-variant/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-variant/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-variant" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/customization/dot-variant/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-variant/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-variant/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-variant" %}
{% endif %}

### Dot outline

By adding the `e-outline` class to the Timeline `cssClass` property, it enables the dots to have an outline state.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/customization/dot-outline/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-outline/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-outline/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-outline" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/customization/dot-outline/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-outline/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/customization/dot-outline/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-outline" %}
{% endif %}