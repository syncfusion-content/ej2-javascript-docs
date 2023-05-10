---
layout: post
title: Customization in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Customization in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in ##Platform_Name## Tooltip control

The Tooltip can be customized by using the `cssClass` property, which accepts custom CSS class names that define specific user-defined
styles and themes to be applied on the Tooltip element.

## Tip pointer customization

Styling the tip pointer's size, background, and border colors can be done using the `cssClass` property, as given below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/custom-tip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/custom-tip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/custom-tip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/custom-tip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/custom-tip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/custom-tip-cs1" %}
{% endif %}

## Tooltip customization

The complete look and feel of the Tooltip can be customized by changing it's background color, opacity, content font, etc. The following code example shows the way to achieve it.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/custom-tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/custom-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/custom-tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/custom-tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/custom-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/custom-tooltip-cs1" %}
{% endif %}
