---
layout: post
title: Floating Label with ##Platform_Name## Textarea control | Syncfusion
description: Checkout and learn about Floating Label with ##Platform_Name## Textarea control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Floating Label
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Floating Label in ##Platform_Name## TextArea Control

The floating label functionality in the TextArea control allows the placeholder text to float above the TextArea while the user interacts with it, providing a more intuitive user experience. This feature can be achieved using the [floatLabelType](../api/textarea/#floatLabelType) API, which offers various options for defining the floating behavior:

| Type  | Description |
| -- | -- |
| Auto  | The label floats above the TextArea when it receives focus or input, returning to its initial position when the TextArea loses focus and contains no value. |
| Always | The label always remains floating above the TextArea, regardless of user interaction. |
| Never | The label never floats; it remains in its default position within the TextArea. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/floating-label-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/floating-label-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/floating-label-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/floating-label-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/floating-label-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/floating-label-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/floating-label-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/textarea/floating-label-cs1" %}
{% endif %}

## Placeholder with localization

Localization library allows to localize the placeholder text of the TextArea to different cultures using the `locale` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/localization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/localization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/localization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/localization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/localization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/localization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/localization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/localization-cs1" %}

{% endif %}

To load translation object in an application use `load` function of `L10n` class.
In the below sample, `German` culture is loaded to the TextArea placeholder text.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/localization-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/localization-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/localization-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/localization-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/localization-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/localization-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/localization-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/localization-cs2" %}

{% endif %}
