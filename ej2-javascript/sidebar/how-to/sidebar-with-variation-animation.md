---
layout: post
title: How to add variation animation in ##Platform_Name## Sidebar | Syncfusion
description: Learn how to apply variation animations in the Syncfusion ##Platform_Name## Sidebar control for smoother transition experiences.
platform: ej2-javascript
control: Sidebar with Variation Animation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add variation animation in ##Platform_Name## Sidebar

In the following example, the Sidebar is rendered with custom animation effects. Click the buttons available in the main content area to observe how the custom animations work with the Sidebar.

The Sidebar will automatically adjust its expanding animation to match any custom size specified in `CSS` styles.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/animation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/animation-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/animation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/animation-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/animation-cs1" %}
{% endif %}