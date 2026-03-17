---
layout: post
title: Template customization in ##Platform_Name## Inline AI Assist control | Syncfusion
description: Checkout and learn about templates with ##Platform_Name## Inline AI Assist control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Inline AI Assist
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template customization in ##Platform_Name## Inline AI Assist control

The Inline AI Assist provides the template options to customize the response and footer items.

## Editor template

You can use the [editorTemplate](../api/inline-ai-assist#editortemplate) property to customize the default footer area and manage prompt request actions in the Inline AI Assist. This allows users to create unique footers that meet their specific needs.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/templates/editor-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/templates/editor-template" %}
{% endif %}

## Response template

You can use the [responseTemplate](../api/inline-ai-assist#responsetemplate) property to customize response items within the Inline AI Assist. The template context includes the `response` and `toolbarItems` values.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/templates/response-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/templates/response-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/templates/response-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/templates/response-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/templates/response-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/templates/response-template" %}
{% endif %}
