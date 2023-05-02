---
layout: post
title: Disable in ##Platform_Name## Button group control | Syncfusion
description: Learn here all about Disable in Syncfusion ##Platform_Name## Button group control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Disable 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disable in ##Platform_Name## Button group control

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
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/disable-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/disable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button-group/disable-cs1" %}
{% endif %}

> To disable radio/checkbox type ButtonGroup, the `disabled` attribute should be added to the particular input element.