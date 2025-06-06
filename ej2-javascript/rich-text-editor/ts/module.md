---
layout: post
title: Module in ##Platform_Name## Rich Text Editor control | Syncfusion
description: Learn here all about Module in Syncfusion ##Platform_Name## Rich Text Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Module 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Module in ##Platform_Name## Rich Text Editor control

The Rich Text Editor component follows a modular architecture, enabling users to include or exclude features as needed to ensure optimal performance and customization.

## What is a module in Rich Text Editor?

In the Rich Text Editor, a module refers to a self-contained feature or functionality that can be selectively enabled or disabled. These modules are provided as part of the @syncfusion/ej2-richtexteditor package and can be injected to extend the editor's capabilities.

For example, modules such as `Toolbar`, `Link`, `Image`, `HtmlEditor`, and `QuickToolbar` enable specific tools and behavior in the Rich Text Editor interface.

## How to import and inject modules

To use a module in the Rich Text Editor, you must:

* Import the required module from the Syncfusion package.

* Inject it using the `RichTextEditor.Inject` method.

The following example demonstrates how to import and inject modules.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs2" %}

## Available modules in Rich Text Editor

| Module | Description |
|------|-------------|
| `Toolbar` | Inject this module to enable the toolbar to access text formatting and Rich Text Editor features like bold, italic, font settings, and alignment tools. |
| `Link` | Inject this module to insert, edit, and remove hyperlinks within the content. |
| `Image` | Inject this module to insert and manage images in the Rich Text Editor. |
| `Table` | Inject this module for inserting and editing HTML tables in the Rich Text Editor. |
| `Count` | Inject this module to enable live character counting capabilities in the Rich Text Editor. |
| `HtmlEditor` | Inject this module to support the HTML source editing view, allowing users to switch between preview and source code modes. |
| `MarkdownEditor` | Inject this module to enable editing support, allowing users to write and preview content using standard Markdown syntax |
| `QuickToolbar` | Inject this module to displays a floating toolbar near selected content like images or links for quick actions. |
| `Resize` | Injecting this module enables users to resize the height and width of the editor area interactively using a resizable handle in the Rich Text Editor. |
| `FileManager` | Injecting this module provides users with a dialog interface to browse, upload, and insert files (especially images) from a server or cloud storage provider directly into the Rich Text Editor. |
| `PasteCleanup` | Inject this module to keep or clean up the formatting of pasted content in Rich Text Editor. |
| `FormatPainter` | Injecting this module allows users to copy formatting (like bold, italic, font size, color, etc.) from one section of text and apply it to another in the Rich Text Editor. |
| `EmojiPicker` | Injecting this module allows users to search, and insert emojis into the Rich Text Editor. |


These modules should be injected into the richtexteditor using the `RichTextEditor.Inject` method.
