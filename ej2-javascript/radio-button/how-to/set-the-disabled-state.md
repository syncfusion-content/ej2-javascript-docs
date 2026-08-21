---
layout: post
title: How to set the disabled state in ##Platform_Name## Radio Button | Syncfusion
description: Learn how to disable the ##Platform_Name## Radio Button by setting the disabled property to true to block user selection.
platform: ej2-javascript
control: Set the disabled state 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set the disabled state in ##Platform_Name## Radio Button

RadioButton component can be enabled/disabled by giving [`disabled`](../../api/radio-button#disabled) property. To disable RadioButton component, the `disabled` property can be set as `true`.

The following example illustrates how to disable a radio button and the selected one is displayed using [`change`](../../api/radio-button#change) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/radio-button/disabled-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/disabled-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/disabled-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/disabled-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/radio-button/disabled-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/disabled-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/disabled-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/radio-button/disabled-cs1" %}
{% endif %}