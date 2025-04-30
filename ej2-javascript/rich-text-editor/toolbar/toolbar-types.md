---
layout: post
title: Toolbar types in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Toolbar types in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Toolbar types
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in ##Platform_Name## Rich Text Editor control

The Syncfusion ##Platform_Name## Rich Text Editor provides a powerful toolbar that enables users to format, style, and edit content efficiently. The toolbar includes essential editing tools such as bold, italic, underline, alignment, and lists, along with customization options to suit different use cases.

> To create Rich Text Editor with Toolbar feature, inject the [Toolbar](../api/rich-text-editor/toolbarSettings) module to the Rich Text Editor using the `RichTextEditor.Inject(Toolbar)` method.

The Rich Text Editor allows you to configure different types of toolbar using [type](../api/rich-text-editor/toolbarType/#toolbartype) field in [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property. The types of toolbar are:

1. Expand 
2. MultiRow
3. Scrollable

## Expanding the toolbar

The default mode of the toolbar is `Expand`, configured through [`toolbarSettings`](../api/rich-text-editor/toolbarType/#toolbartype) with `type: 'Expand'`. This mode hides any overflowing toolbar items in the next row, which can viewed by clicking the expand arrow.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/toolbar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/toolbar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs3" %}
{% endif %}

## Configuring a multi-row toolbar

Setting the `type` as `MultiRow` in [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) will arrange the toolbar items across multiple rows, displaying all configured toolbar items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/toolbar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/toolbar-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs4" %}
{% endif %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/toolbar-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/toolbar-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs5" %}
{% endif %}

## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when scrolling. You can customize the position of this sticky toolbar by setting the [floatingToolbarOffset](../api/rich-text-editor/#floatingtoolbaroffset) to adjust its offset from the top of the document.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](../api/rich-text-editor/toolbarSettings/#enablefloating) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/floating-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/floating-toolbar-cs1" %}
{% endif %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](../style#customizing-editor-toolbar)
* [Implementing Inline Editing](../editor-types/inline-editing)
* [Customizing Accessibility Shortcut Keys](../accessibility#keyboard-navigation)