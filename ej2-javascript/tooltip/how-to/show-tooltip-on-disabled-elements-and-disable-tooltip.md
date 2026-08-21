---
layout: post
title: How to show on disabled in ##Platform_Name## Tooltip | Syncfusion
description: Show the ##Platform_Name## Tooltip on disabled buttons by wrapping them and setting pointer-events to none, and disable a Tooltip with the enabled property.
platform: ej2-javascript
control: Show Tooltip on disabled elements and disable Tooltip
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show tooltip on disabled elements in ##Platform_Name## Tooltip

By default, Tooltip will not be displayed on disabled elements. However, you can enable this behavior by using the following steps:

1. Add a disabled element, like a `button`, inside a div whose display style is set to `inline-block`.
2. Set the pointer-events property to `none` for the disabled element (button) through CSS.
3. Initialize the Tooltip for the outer div element that contains the disabled button element.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/disabled-elements-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/disabled-elements-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/disabled-elements-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/tooltip/disabled-elements-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/disabled-elements-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/disabled-elements-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/disabled-elements-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/tooltip/disabled-elements-cs1" %}

{% endif %}