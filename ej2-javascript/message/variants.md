---
layout: post
title: Variants in ##Platform_Name## Message | Syncfusion
description: Switch ##Platform_Name## Message appearance between Text, Outlined, and Filled variants to style severity with text color, border, or dark fill.
platform: ej2-javascript
control: Variants
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Variants in ##Platform_Name## Message

The Message has predefined appearance variants for different visual representations. The appearance of the message can be changed using the [variant](../api/message/index-default#variant) property.

* **Text** - The severity is differentiated using a text color and a light background color.
* **Outlined** - The severity is indicated through a text color and a border without a background.
* **Filled** - The severity is highlighted with a text color and a dark background color.

The following example demonstrates the default message with different variant types.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/message/variants-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/variants-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/message/variants-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/message/variants-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/variants-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/message/variants-cs1" %}

{% endif %}
