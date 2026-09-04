---
layout: post
title: Template in ##Platform_Name## Message | Syncfusion
description: Render ##Platform_Name## Message with custom templates such as strings, paragraphs, or other HTML elements through the content property.
platform: ej2-javascript
control: Template
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Message

The Message supports templates that allow the content to be structured with a custom layout. The content can be a string, paragraph, or any other HTML element. The template can be rendered through the [content](../api/message/index-default#content) property or added directly to the HTML element.

In the following sample, the Message control content is customized with HTML elements and JavaScript Button controls, which are added directly to the HTML element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/message/template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/message/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/message/template-cs1" %}
{% endif %}
