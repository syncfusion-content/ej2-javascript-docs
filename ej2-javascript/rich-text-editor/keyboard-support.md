---
layout: post
title: Keyboard support in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Keyboard support in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Keyboard support 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard support in ##Platform_Name## Rich text editor control

The editor has full keyboard accessibility that includes shortcuts to open and other actions with toolbar items, drop-down lists, and dialogs.

## HTML formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with `HTML` [`editMode`](../api/rich-text-editor/#editormode).

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus | <kbd>Alt</kbd> + <kbd>f10</kbd> |
| Insert link | <kbd>Ctrl</kbd> + <kbd>k</kbd> |
| Insert image | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd> |
| Insert table | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>e</kbd> |
| Undo | <kbd>Ctrl</kbd> + <kbd>z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>y</kbd> |
| Copy | <kbd>Ctrl</kbd> + <kbd>c</kbd> |
| Cut | <kbd>Ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>Ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>Ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>Ctrl</kbd> + <kbd>i</kbd> |
| Underline| <kbd>Ctrl</kbd> + <kbd>u</kbd> |
| Strikethrough| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| Indents| <kbd>Ctrl</kbd> + <kbd>]</kbd> |
| Outdents| <kbd>Ctrl</kbd> + <kbd>[</kbd> |
| HTML source | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>h</kbd> |
| Fullscreen| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>f</kbd> |
| Exit Fullscreen| <kbd>Esc</kbd> |
| Justify center| <kbd>Ctrl</kbd> + <kbd>e</kbd> |
| Justify full | <kbd>Ctrl</kbd> + <kbd>j</kbd> |
| Justify left | <kbd>Ctrl</kbd> + <kbd>l</kbd> |
| Justify right | <kbd>Ctrl</kbd> + <kbd>r</kbd> |
| Clear format | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>r</kbd> |
| Ordered list | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>o</kbd> |
| Unordered list | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>o</kbd> |
| Format Panter Copy| <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>c</kbd> |
| Format Panter Paste| <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>v</kbd> |
| Format Panter Escape | <kbd>Esc</kbd> |
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs12" %}
{% endif %}

## Markdown formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with `Markdown` [editMode](../api/rich-text-editor/#editormode).

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus| <kbd>Alt</kbd> + <kbd>f10</kbd> |
| Insert link| <kbd>Ctrl</kbd> + <kbd>k</kbd> |
| Insert image| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd> |
| Insert table| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>e</kbd> |
| Undo| <kbd>Ctrl</kbd> + <kbd>z</kbd> |
| Redo| <kbd>Ctrl</kbd> + <kbd>y</kbd> |
| Copy| <kbd>Ctrl</kbd> + <kbd>c</kbd> |
| Cut| <kbd>Ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>Ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>Ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>Ctrl</kbd> + <kbd>i</kbd> |
| Strikethrough| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| Fullscreen| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>f</kbd> |
| Ordered list| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>o</kbd> |
| Unordered list| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>o</kbd> |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/markdown-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/markdown-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/markdown-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs1" %}
{% endif %}

## Custom key config

Customize the key config for the keyboard interaction of Rich Text Editor, using the [`keyConfig`](../api/rich-text-editor/#keyconfig) property.

In the following sample, customize the cut, copy, and paste toolbar action with `Ctrl+1`, `Ctrl+2`, and `Ctrl+3`, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs13" %}
{% endif %}

## See Also

* [Globalization](./globalization/)
* [Accessibility](./accessibility/)
* [How to customize the toolbar items shortcut key](./how-to/shortcut-key/)
* [How to customize the saving operation](./how-to/save/)