---
layout: post
title: Emoji Picker in ##Platform_Name## RichTextEditor | Syncfusion
description: Learn about Emoji Picker in Syncfusion ##Platform_Name## RichTextEditor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Emoji Picker
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Emoji Picker in ##Platform_Name## Rich Text Editor control

An emoji picker is a tool designed for adding emojis or emoticons to text with ease. It usually appears as a small window or panel showcasing a variety of emojis categorized into sections such as smileys, animals, food, and more. The desired emoji can be selected by clicking on it or typing its name into a search bar.

## Configuring emoji picker tool in the toolbar

Add the `EmojiPicker` tool to the Rich Text Editor toolbar using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

By default, a predefined set of emojis is configured. However, these icons can be customized according to specific needs by using the  [emojiPickerSettings](../api/rich-text-editor/richTextEditorModel/#emojiPickerSettings) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/emoji-picker-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/emoji-picker-cs2" %}
{% endif %}

Additionally, you have the option to customize the icons of toolbar items using the [iconCss](../api/rich-text-editor/emojiIconsSet/#iconCss) and [code](../api/rich-text-editor/emojiIconsSet/#code) properties. The `iconCSS` property allows you to define a custom CSS class for the toolbar item icon, while the `code` property enables you to specify the Unicode character code for the icon.

When both `iconCSS` and `code` properties are provided, the `iconCSS` property takes precedence in determining the appearance of the toolbar item icon.

Additionally, you have the option to enhance the user experience by implementing a filtering feature for efficiently managing a large dataset of emojis. By setting the [showSearchBox](../api/rich-text-editor/emojiSettings/#showSearchBox) property to `true` (which is the default value), users will be able to utilize a search box to filter the displayed emojis according to their preferences.

The following code example shows how to add the emoji picker tool in the Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/emoji-picker-cs1" %}

{% elsif page.publishingplatform == "javascript" %}
          
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/emoji-picker-cs1" %}
{% endif %}

## Using shortcut keys to open the emoji picker

Quickly access the emoji picker by pressing the colon (:) key while typing a word prefix in an editor, allowing instant emoji selection and display. Moreover, continue typing in the editor after the colon (:) to filter and refine your search for the desired emojis.

![JavaScript Rich Text Editor Emoji Picker](../images/javascript-richtexteditor-emoji-picker-shortcut.png)

## Navigating and selecting emojis using the keyboard

The emoji picker popup offers keyboard navigation options, allowing you to move the emoji focus from one emoji to another. The following keys are used for navigation:

`Arrow keys`: Use the arrow keys (up, down, left, right) to move the emoji focus in the corresponding direction.

`Enter`: Press Enter key to select the currently focused emoji.

`Escape`: Press Escape to close the emoji picker popup without selecting an emoji.
