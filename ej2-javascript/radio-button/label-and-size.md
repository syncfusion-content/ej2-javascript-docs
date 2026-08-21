---
layout: post
title: Label and Size in ##Platform_Name## Radio Button | Syncfusion
description: Learn how to set a label and its position on the ##Platform_Name## Radio Button, and switch between the default and small sizes.
platform: ej2-javascript
control: Label and size 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Label and Size in ##Platform_Name## Radio Button

This section explains the different sizes and labels.

## Label

RadioButton caption can be defined by using the [`label`](../api/radio-button/#label) property. This reduces the manual addition of label for RadioButton. You can customize the label position before or after the RadioButton through the [`labelPosition`](../api/radio-button/#labelposition) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/radio-button/label-and-size-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/label-and-size-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/label-and-size-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/radio-button/label-and-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/label-and-size-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/label-and-size-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs1" %}
{% endif %}

## Size

The different RadioButton sizes available are default and small. To reduce the size of the default RadioButton to small, set the [`cssClass`](../api/radio-button/#cssclass) property to `e-small`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/radio-button/label-and-size-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/label-and-size-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/label-and-size-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/radio-button/label-and-size-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/label-and-size-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/label-and-size-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs2" %}
{% endif %}

## See Also

* [How to customize the RadioButton appearance](./how-to/customize-radiobutton-appearance)
