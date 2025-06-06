---
layout: post
title: Set item wise custom template in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about Set item wise custom template in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set item wise custom template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set item wise custom template in ##Platform_Name## Toolbar control

The Toolbar supports adding template commands using the [`template`](../../api/toolbar/item#template) property. The template property can be specified as an `HTML element`, either as a `string` or a `query selector`.

## As a string

The HTML element tag can be specified as a string for the template property. Here, a checkbox is rendered as an HTML template.

```ts
template: "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>"

```

## As a selector

The template property also allows retrieving template content through a query `selector`. Here, the button's 'ID' attribute is specified in the template.

```ts
template: "#Template"

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-items-templateID-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-templateID-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-templateID-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-items-templateID-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-items-templateID-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-templateID-cs1" %}
{% endif %}