---
layout: post
title: Preventing Cross-Site Scripting (XSS) in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Preventing Cross-Site Scripting (XSS) in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Preventing Cross-Site Scripting (XSS)
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Preventing Cross-Site Scripting (XSS)

The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

The [enableHtmlSanitize](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#enablehtmlsanitizer) property determines whether XSS prevention is active. It's set to `true` by default.

In the following sample, we removed the `script` tag and `onmouseover` attribute from the content of the Rich Text Editor. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/xss-attack-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/xss-attack-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/xss-attack-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/xss-attack-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/xss-attack-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/xss-attack-cs1" %}
{% endif %}

> The XSS prevention feature is only applicable when the [editorMode](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#editormode) is set to HTML.


## Custom Cross-Site Scripting Prevention

For more precise control over XSS prevention, you can implement custom filtering logic using the [beforeSanitizeHtml](../api/rich-text-editor/#beforesanitizehtml) event.

### Implementing Custom Cross-Site Scripting and Fililtering in Rich Text Editor

1. Use the [beforeSanitizeHtml](../api/rich-text-editor/#beforesanitizehtml) event to define custom filtering rules.
2. Utilize the `helper` function from the event argument to apply your custom filters.
3. Set the `cancel` argument to `true` if you want to override the built-in XSS prevention entirely.

The following sample demonstrates how to filter the `script` tag by value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/xss-attack-event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/xss-attack-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/xss-attack-event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/xss-attack-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/xss-attack-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/xss-attack-event-cs1" %}
{% endif %}

You can also filter out the [`e.selectors.tags`](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/sanitizeSelectors/#tags) and [`e.selector.attributs`](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/sanitizeSelectors/#attributes) in the [beforeSanitizeHtml](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#beforesanitizehtml) event to control which HTML tags and attributes are allowed to appear. 

For instance, if you want to display `<iframe>`, By manipulating the `e.selectors.tags` property in this event, you can selectively remove tags like `<iframe>`. This approach ensures that your application can safely display iframes while preventing potential security risks associated with XSS vulnerabilities.

The following sample demonstrates how to filter the `iframe` tag.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1" %}
{% endif %}