---
layout: post
title: How to set the disabled state in ##Platform_Name## Button | Syncfusion
description: Learn how to disable the ##Platform_Name## Button by setting the disabled property to true to prevent user interaction.
platform: ej2-javascript
control: Set the disabled state 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set the disabled state in ##Platform_Name## Button

Button component can be enabled/disabled by giving [`disabled`](../../api/button#disabled) property. To disable Button component, the `disabled` property can be set as `true`.

The following example demonstrates Button in `disabled` state.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/button/howto-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/howto-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button/howto-cs3/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/howto-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/button/howto-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/howto-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button/howto-cs3/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button/howto-cs3" %}
{% endif %}