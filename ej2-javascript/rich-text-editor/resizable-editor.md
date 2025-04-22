---
layout: post
title: Resizable Editor in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Resizable Editor in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resizable Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resizable Editor in the Angular Rich Text Editor control

The resizable editor feature allows dynamic resizing of the editor. Enable or disable this feature using the [enableResize](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#enableresize) property in the Rich Text Editor. When `enableResize` is set to `true`, a grip appears at the bottom right corner for diagonal resizing.

> To use the Resizable feature, inject the Resize module to the Rich Text Editor using the `RichTextEditor.Inject(Resize)` method.

The following sample demonstrates the resizable feature.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs1" %}
{% endif %}

## Restrict resize

To restrict the resizable area of the Rich Text Editor, set the `min-width`, `max-width`, `min-height`, and `max-height` CSS properties for the component's wrapper element. 

By default, the control resizes up to the current viewport size. Apply these styles using the `e-richtexteditor`  CSS class in the component's wrapper. 

```CSS

.e-richtexteditor {
  max-width: 880px;
  min-width: 250px;
  min-height: 250px;
  max-height: 400px;
}

```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/resizable-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/resizable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/resizable-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/resizable-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/resizable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/resizable-cs1" %}
{% endif %}

## See also

* [Working with IFrame Editing Mode](./iframe)
* [Using the Markdown Editor](../markdown-editor/getting-started)