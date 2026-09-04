---
layout: post
title: How to add link to Toolbar item in ##Platform_Name## Toolbar | Syncfusion
description: Learn how to use the Syncfusion ##Platform_Name## Toolbar control to add links and improve command actions.
platform: ej2-javascript
control: Add link to toolbar item
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add link to Toolbar item in ##Platform_Name## Toolbar

Toolbar supports adding links using the template configuration. The Toolbar can be rendered by item-based collection and and HTML elements. Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

The template property also allows getting template content through query `selector`. Here, anchor element 'ID' attribute is specified in the template.

The Toolbar supports adding links using the [`template`](../../api/toolbar/item#template) configuration. It can be rendered by either item-based collections or HTML elements.The template property can be specified as an `HTML element`, either as a `string` or a `query selector`. The template property also allows obtaining template content through a query `selector`. Here, the anchor element's 'ID' attribute is specified in the template.

```ts
template: "#AnchorTemplate"

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-how-link-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-how-link-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-how-link-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-how-link-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-how-link-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-how-link-cs1" %}
{% endif %}