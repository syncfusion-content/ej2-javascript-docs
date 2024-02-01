---
layout: post
title: Iframe in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Iframe in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Iframe 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Iframe in ##Platform_Name## Rich text editor control

When the [`iframeSettings`](../api/rich-text-editor/#iframesettings) option is enabled, the Rich Text Editor creates the iframe element as the content area on control initialization; it is used to display and editing the content. In Content area, the editor displays only the body tag of a `<iframe>` document.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs1" %}
{% endif %}

## IFrame attributes

The editor allows you to pass an additional attribute to body tag of a `<iframe>` element using [`attributes`](../api/rich-text-editor/iFrameSettings/#attributes) fields of [`iframeSettings`](../api/rich-text-editor/#iframesettings) property. The property contains name/value pairs in string format. It is used to override the default appearance of the content area.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs2" %}
{% endif %}

## Adding external CSS/Script File

The editor offers you to add external CSS file to style the `<iframe>` element. Easily change the appearance of editor’s content using an external CSS file using [`styles`](../api/rich-text-editor/resources/#styles) field in [`iframeSettings`](../api/rich-text-editor/#iframesettings) property.

Likewise, add the external script file to the `<iframe>` element using [`scripts`](../api/rich-text-editor/resources/#scripts) field of [`iframeSettings`](../api/rich-text-editor/#iframesettings) to provide the additional functionalities to the Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/iframe-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-cs3" %}
{% endif %}

## See Also

* [How to change the editor mode](./editor-modes#markdown-editor)