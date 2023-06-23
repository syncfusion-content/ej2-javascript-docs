---
layout: post
title: Add link to toolbar item in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about Add link to toolbar item in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add link to toolbar item 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add link to toolbar item in ##Platform_Name## Toolbar control

Toolbar supports to add link by using the template configuration. The Toolbar can be rendered by item based collection and by HTML elements. Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

The template property also allows getting template content through query `selector`. Here, anchor element 'ID' attribute is specified in the template.

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