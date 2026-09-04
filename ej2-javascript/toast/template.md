---
layout: post
title: Template in ##Platform_Name## Toast | Syncfusion
description: Render ##Platform_Name## Toast with custom HTML element or selector as a template to fully control the toast content.
platform: ej2-javascript
control: Template
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Toast

The Template property in the Toast control can be defined as an `HTML element`; this can be either a `string` or a `selector`.

The HTML element tag can be given as a string for the [Template](../api/toast/#template) property.

```ts
template: "<div>Toast Content</div>"

```

The Template property allows getting the template content using the query `selector`. Here, the element 'ID' attribute is specified in the template.

```ts
template: "#Template"

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/template-cs1" %}
{% endif %}

## See Also

* [How to add dynamic template](./how-to/add-dynamic-template/)
* [How to play an audio before open the toast](./how-to/play-an-audio-before-open-the-toast/)