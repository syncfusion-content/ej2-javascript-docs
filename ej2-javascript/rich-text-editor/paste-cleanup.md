---
layout: post
title: Paste cleanup in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Paste cleanup in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Paste cleanup 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Paste Cleanup in ##Platform_Name## Rich Text Editor control

The Rich Text Editor simplifies the conversion of Microsoft Word content to HTML format, preserving formatting and styles. The `pasteCleanup` settings property allows you to control the formatting and styles when pasting content into the editor. The following settings are available to clean up the content:

| API | Description | Default Value | Type |
|:----------------:|:---------:|:-----------------------------:|:---------:|
| [prompt](#prompt) | Invokes a prompt dialog with paste options when pasting content into the editor| false | boolean |
| [plainText](#plain-text) | Paste the content as plain text| false | boolean |
| [keepFormat](#keep-format) | Maintains the same format as the copied content| true | boolean |
| [deniedTags](#denied-tags) | Ignores specified tags when pasting HTML content| null | string[] |
| [deniedAttrs](#denied-attributes) |  Filters out specified attributes from the pasted content| null | string[] |
| [allowedStyleProps](#allowed-style-properties) |  Accepts specified style attributes and removes others from the pasted content| ['background', 'background-color', 'border', 'border-bottom', 'border-left', 'border-radius', 'border-right', 'border-style', 'border-top', 'border-width', 'clear', 'color', 'cursor', 'direction', 'display', 'float', 'font', 'font-family', 'font-size', 'font-weight', 'font-style', 'height', 'left', 'line-height', 'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom', 'max-height', 'max-width', 'min-height', 'min-width', 'overflow', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'position', 'right', 'table-layout', 'text-align', 'text-decoration', 'text-indent', 'top', 'vertical-align', 'visibility', 'white-space', 'width'] | string[] |

> Rich Text Editor features are segregated into individual feature-wise modules. To use paste cleanup, inject PasteCleanup module using the `RichTextEditor.Inject(PasteCleanup)`.

## Paste options in the prompt dialog

When `prompt` is set to true, pasting the content in the editor will open a dialog box that contains three options `Keep`, `Clean`, and `Plain Text` as radio buttons:
1. `Keep`: Maintains the same format as the copied content.
2. `Clean`: Clears all style formats from the copied content.
3. `Plain Text`: Pastes the copied content as plain text without any formatting or style. (including the removal of all tags).

> When `prompt` value is set true, the API properties [plainText](#plain-text) and [keepFormat](#keep-format) will not be considered for processing when pasting the content.

## How to paste as plain text

Setting `plainText` to true converts the copied content to plain text by removing all HTML tags and styles. Only the plain text is pasted into the editor.

>When `plainText` is set to true, set `prompt` to false. The `keepFormat` property will not be considered.

## Keep format option

When `keepFormat` is set to true, the copied content maintains all style formatting allowed in the `allowedStyleProps` when pasted into the editor.

If `keepFormat` is set to false, all styles in the copied content are removed, regardless of the `allowedStyleProps` settings.

>When `keepFormat` is set to true, set both `prompt` and `plainText` to false.

## Cleaning formatting during paste

Setting `cleanFormat` to true removes all applied styles from the pasted content while retaining all other HTML tags in the editor.

>When `cleanFormat` is set to true, set `prompt`, `plainText`, and `keepFormat` to false.

## Denied tags during paste

When `deniedTags` values are set, the specified tags will be removed from the pasted content. For example,

* `'a'`:  Removes all anchor tags.
* `'a[!href]'`: Removes anchor tags without the 'href' attribute.
* `'a[href, target]'`: Removes anchor tags with both 'href' and 'target' attributes.

## Denied attributes during paste

When `deniedAttrs` values are set, the specified attributes will be removed from all tags in the pasted content. For example,

`'id', 'title'`: Removes 'id' and 'title' attributes from all tags.

## Allowing specific style properties

By default, the following basic styles are allowed on pasting the content to the editor.

['background', 'background-color', 'border', 'border-bottom', 'border-left', 'border-radius', 'border-right', 'border-style', 'border-top', 'border-width', 'clear', 'color', 'cursor', 'direction', 'display', 'float', 'font', 'font-family', 'font-size', 'font-weight', 'font-style', 'height', 'left', 'line-height', 'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom', 'max-height', 'max-width', 'min-height', 'min-width', 'overflow', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'position', 'right', 'table-layout', 'text-align', 'text-decoration', 'text-indent', 'top', 'vertical-align', 'visibility', 'white-space', 'width']

When you configure allowedStyleProps, the styles, which matches the ‘allowed style properties’ list are allowed, all other style properties will be removed on pasting the content in the editor.

For Example,

`allowedStyleProps: ['color', 'margin']'`: This will allow only the style properties ‘color’ and ‘margin’ in each pasted element.

In the following example, the paste cleanup related settings are explained with its module configuration: 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/toolbar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/toolbar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/toolbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs2" %}
{% endif %}

## Get pasted content

You can get the pasted text as HTML using the [afterPasteCleanup](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#afterpastecleanup) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/get-pasted-content-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/get-pasted-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/get-pasted-content-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/get-pasted-content-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/get-pasted-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/get-pasted-content-cs1" %}
{% endif %}

## Customization of pasted content

The Rich Text Editor enables the customization of copied content prior to pasting it into the editor. By configuring the [afterPasteCleanUp](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#afterpastecleanup) event, users can exercise precise control over formatting and content modifications after the paste action is executed.

In the following example, the `afterPasteCleanUp` event is configured to remove images from the copied content. To understand this feature better, try pasting content that includes an image into the editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/paste-cleanup-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/paste-cleanup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/paste-cleanup-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/paste-cleanup-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/paste-cleanup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/paste-cleanup-cs1" %}
{% endif %}