---
layout: post
title: How to disable Button Group in ##Platform_Name## | Syncfusion
description: Learn how to disable a single button or the entire ##Platform_Name## Button Group by adding the disabled attribute to elements.
platform: ej2-javascript
control: Disable 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to disable Button Group in ##Platform_Name## Button Group

## Particular button

To disable a particular button in a ButtonGroup, [`disabled`](../../api/button#disabled) attribute should be added to the corresponding button element.

## Whole ButtonGroup

To disable whole ButtonGroup, [`disabled`](../../api/button#disabled) attribute should be added to all the button elements.

The following example illustrates how to disable the particular and the whole ButtonGroup.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/disable-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/disable-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/disable-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/disable-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/disable-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button-group/disable-cs1" %}
{% endif %}

> To disable radio/checkbox type ButtonGroup, the `disabled` attribute should be added to the particular input element.