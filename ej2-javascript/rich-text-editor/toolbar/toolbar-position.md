---
layout: post
title: Toolbar position in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Toolbar position in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Toolbar position
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar position in ##Platform_Name## Rich Text Editor control

The Rich Text Editor allows you to configure the toolbar's position using the [position](../api/rich-text-editor/toolbarPosition/#toolbarposition) field in the [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property. The available positions are:

1. Top 
2. Bottom

## Configuring the toolbar position

The Rich Text Editor allows you to position the toolbar at the top or bottom of the content area, depending on your layout requirements.

By default, the toolbar is displayed at the top of the editor, making all formatting and editing tools immediately accessible above the content.

To position the toolbar at the bottom, use the [position](../api/rich-text-editor/toolbarPosition/#toolbarposition) property in the [`toolbarSettings`](../api/rich-text-editor/toolbarPosition/#toolbarposition) configuration and set its value to `Bottom`. This places the toolbar below the content area, which can help maintain a cleaner top layout and improve accessibility in certain use cases.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/toolbar-position/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-position" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/toolbar-position/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-position" %}
{% endif %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](../style#customizing-editor-toolbar)
* [Implementing Inline Editing](../inline-editing)
* [Customizing Accessibility Shortcut Keys](../accessibility#keyboard-navigation)