---
layout: post
title: Set command customization in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about Set command customization in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set command customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set command customization in ##Platform_Name## Toolbar control

The [`htmlAttributes`](../../api/toolbar/item#htmlattributes) property of the Toolbar item is used to set the HTML attributes ('ID', 'class', 'style' ,'role') for the commands.

When style attributes are added, if the same attributes were already present, they will be replaced. This is not so in the case of `class` attribute. Classes will be added to the element instead of replacing the existing ones.

Single or multiple CSS classes can be added to the Toolbar commands using the Toolbar item [`cssClass`](../../api/toolbar/item#cssclass) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-cs1" %}
{% endif %}