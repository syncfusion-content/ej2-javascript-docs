---
layout: post
title: Blocks in ##Platform_Name## Block Editor control | Syncfusion
description: Checkout and learn about Blocks with ##Platform_Name## Block Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Blocks in ##Platform_Name## Block Editor control

The Block Editor control enables you to create block-based content editing solution using various types of blocks. The [blocks](../api/blockeditor/#blocks) property allows you to define and manage the content structure of your editor.

## Blocks

Blocks are the fundamental building elements of the Block Editor. Each block represents a distinct content unit such as a `paragraph`, `heading`, `list`, or specialized content like `code snippets` or `images`. The Block Editor organizes content as a collection of `blocks`, allowing for better structure and formatting options.

You can configure blocks with various properties such as [id](../api/blockeditor/blockModel/#id), [type](../api/blockeditor/blockModel/#type), [content](../api/blockeditor/blockModel/#content), [children](../api/blockeditor/blockModel/#children) and more to create rich, structured editor.

## Block types

The Block Editor supports multiple block types. Each block type offers different formatting and functionality options:

| Built-in Block Types                    | Description                                       |
|-----------------------------------------|---------------------------------------------------|
| Paragraph                               | Default block type for regular text content.      |
| Heading1 to Heading4                    | Different levels of headings for document structure.|
| CheckList                               | Interactive to-do lists with checkable items.     |
| BulletList                              | Unordered lists with bullet points.               |
| NumberedList                            | Ordered lists with sequential numbering.          |
| Code                                    | Formatted code blocks with syntax highlighting.   |
| Quote                                   | Styled block for quotations.                      |
| Callout                                 | Highlighted block for important information.      |
| Divider                                 | Horizontal separator line.                        |
| ToggleParagraph and ToggleHeading1-4    | Collapsible content blocks.                       |
| Image                                   | Block for displaying images.                      |
| Template                                | Predefined custom templates.                      |

### Configure block type

The Block Editor supports several block types through the `BlockType` enum.
You can configure the type of each block using the [type](../api/blockeditor/blockModel/#type) property. The block type determines the appearance and behavior of the content. By default, the block type is set to `Paragraph`.

### Configure paragraph block

You can render Paragraph blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Paragraph`. Paragraph blocks are the most common type, used for regular text content. They provide standard text formatting options and serve as the default block type.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/paragraph-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/paragraph-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/paragraph-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/paragraph-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/paragraph-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/paragraph-block" %}
{% endif %}

### Configure heading block

You can render Heading blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Heading1`, `Heading2`, `Heading3`, or `Heading4`. Heading blocks (Heading1 to Heading4) are used to create document titles and section headers of varying importance. These blocks help structure your content hierarchically, making it easier to read and navigate.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/heading-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/heading-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/heading-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/heading-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/heading-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/heading-block" %}
{% endif %}

### Configure toggle blocks

You can render Toggle blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `ToggleParagraph` or `ToggleHeading1` to `ToggleHeading4`. Toggle blocks allow users to expand or collapse sections, providing a way to hide or show content as needed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/toggle-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/toggle-block" %}
{% endif %}

### Configure list blocks

You can render List blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `BulletList`, `NumberedList`, or `Checklist`. Bullet lists and numbered lists are ideal for unordered and ordered items, respectively, while checklist blocks enable interactive to-do lists with checkable items.

> Refer to [CheckedState](#configure-checked-state) section for more details about the checked state.

Below example illustrates how to render the different types of blocks in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/list-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/list-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/list-block" %}
{% endif %}

### Configure code block

You can render Code blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Code`. By setting the `codeSettings` property, you can configure the languages available for syntax highlighting and the default language. The default language is 'javascript'.

> Refer to the [CodeSettings](#configure-code-settings) section for more details about the code settings.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/code-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/code-block" %}
{% endif %}

### Configure quote block

You can render Quote blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Quote`. Quote blocks are specially styled for quotations or excerpts.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/quote-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/quote-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/quote-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/quote-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/quote-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/quote-block" %}
{% endif %}

### Configure callout block

You can render Callout blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Callout`. They're useful for notes, warnings, or tips that require special attention.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/callout-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/callout-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/callout-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/callout-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/callout-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/callout-block" %}
{% endif %}

### Configure divider block

Divider blocks insert horizontal lines that separate different sections of content. You can render Divider blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Divider`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/divider-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/divider-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/divider-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/divider-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/divider-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/divider-block" %}
{% endif %}

### Configure image block

You can render Image blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Image`. By setting the `imageSettings` property, you can configure the image source, allowed file types, and display dimensions etc.

> Refer to the [ImageSettings](#configure-image-settings) section for more details about the image settings.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/image-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/image-block" %}
{% endif %}

### Adding template

You can render Template blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Template`. Template blocks enable you to use predefined content structures or custom templates.

> Refer to [Template](#configure-template) section for more details about the template type block.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/template-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/template-block" %}
{% endif %}

## Configure content

Content in the Block Editor is managed through the [content](../api/blockeditor/blockModel/#content) property of blocks.

Each content can have properties like [id](../api/blockeditor/contentModel/#id), [type](../api/blockeditor/contentModel/#type), [content](../api/blockeditor/contentModel/#content), [styles](../api/blockeditor/contentModel/#styles), and more to customize the appearance and behavior of your text.

### Setting content type

You can specify the type of content using the [type](../api/blockeditor/contentModel/#type) property. The Block Editor supports several content types through the `ContentType` enum:

| Built-in Content Type  | Description                         |
|------------------------|-------------------------------------|
| Text                   | Represents plain text content.      |
| Link                   | Represents a hyperlink.             |
| Code                   | Represents a code snippet.          |
| Mention                | Represents a user mention.          |
| Label                  | Represents a label or tag.          |

By default, the content type is set to `Text`.

#### Configure text content

You can configure Text content by setting the type property to `Text`. The default content type is `Text`.

#### Configure hyperlink

You can configure hyperlink content by setting the type property to `Link` and providing the link details through the [linkSettings](../api/blockeditor/contentModel/#linksettings) property.

The [linkSettings](../api/blockeditor/contentModel/#linksettings) property allows you to specify the URL and whether the link should open in a new window.

> Refer to the [LinkSettings](#configure-link-settings) section for more details about the link settings.

#### Configure inline code

You can configure inline code content by setting the type property to `Code`. Code content is used for inline code snippets within regular text.

#### Configure mention

Mentions are references to users or entities that can be inserted into your content. You can configure mention content by setting the type property to `Mention`.

Mentions are typically triggered by the `@` character and are linked to the [users](../api/blockeditor/#users) collection defined in the Block Editor.

#### Configure Label

You can configure label content by setting the type property to `Label`.

By default, labels are triggered by the `$` character. You can customize the label settings using the [labelSettings](../api/blockeditor/#labelSettings) property to define the label items and trigger character.

> Refer to the [LabelSettings](#Configuring-label-settings) section for more details about the label settings.

Below is an example of how to configure different types of content in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/content-types/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/content-types/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/content-types" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/content-types/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/content-types/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/content-types" %}
{% endif %}

### Setting content styles

The Block Editor allows you to customize the appearance of content using the [styles](../api/blockeditor/contentModel/#styles) property. This property provides rich formatting options to style your text and content elements.

The [styles](../api/blockeditor/contentModel/#styles) property supports the following formatting options:

| Style Property | Description | Default Value |
|---------------|-------------|---------------|
| [bold](../api/blockeditor/styleModel/#bold) | Makes the text bold | false |
| [italic](../api/blockeditor/styleModel/#italic) | Makes the text italicized | false |
| [underline](../api/blockeditor/styleModel/#underline) | Adds an underline to the text | false |
| [strikethrough](../api/blockeditor/styleModel/#strikethrough) | Adds a line through the text | false |
| [color](../api/blockeditor/styleModel/#color) | Sets the text color (HEX or RGBA format) | '' |
| [bgColor](../api/blockeditor/styleModel/#bgcolor) | Sets the background color for the text | '' |
| [superscript](../api/blockeditor/styleModel/#superscript) | Displays the text as superscript | false |
| [subscript](../api/blockeditor/styleModel/#subscript) | Displays the text as subscript | false |
| [uppercase](../api/blockeditor/styleModel/#uppercase) | Converts the text to uppercase | false |
| [lowercase](../api/blockeditor/styleModel/#lowercase) | Converts the text to lowercase | false |
| [custom](../api/blockeditor/styleModel/#custom) | Adds custom CSS styles to the text | '' |

You can apply one or more of these styles to any content element for rich text formatting:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/content-styles/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/content-styles/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/content-styles" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/content-styles/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/content-styles/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/content-styles" %}
{% endif %}

### Configure link settings

Link settings control the behavior and properties of hyperlinks in your content. You can configure link settings using the [linkSettings](../api/blockeditor/contentModel/#linksettings) property.

The [linkSettings](../api/blockeditor/contentModel/#linksettings) property supports the following options:

| Option       | Description                                                                 | Default Value |
|--------------|-----------------------------------------------------------------------------|---------------|
| [url](../api/blockeditor/linkSettingsModel/#url)          | Specifies the URL of the link.                                          |       ''        |
| [openInNewWindow](../api/blockeditor/linkSettingsModel/#openinnewwindow)    | Specifies whether the link should open in a new window/tab.           | false         |

```typescript
    blocks: [{
        type: 'Paragraph',
        content: [
            {
                type: 'Link',
                content: 'hyperlinks',
                linkSettings: {
                    url: 'https://ej2.syncfusion.com/documentation/',
                    openInNewWindow: true
                }
            }
        ]
    }]
```

## Configure indent

You can specify the indentation level of a block using the [indent](../api/blockeditor/blockModel/#indent) property. This property accepts a numeric value that determines how deeply a block is nested from the left margin.

By default, the [indent](../api/blockeditor/blockModel/#indent) property is set to `0`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/indent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/indent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/indent" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/indent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/indent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/indent" %}
{% endif %}

## Configure checked state

For blocks that support selection states such as `CheckList`, you can configure the checked state using the [isChecked](../api/blockeditor/blockModel/#ischecked) property.

By default, the [isChecked](../api/blockeditor/blockModel/#ischecked) property is set to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/isChecked/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/isChecked/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/isChecked" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/isChecked/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/isChecked/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/isChecked" %}
{% endif %}

## Configure expanded state

You can control whether a block is expanded or collapsed using the [isExpanded](../api/blockeditor/blockModel/#isexpanded) property. By default, this property is set to `false`, meaning the block will be collapsed initially. This setting is only applicable to Toggle blocks.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/toggle-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/toggle-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/toggle-block" %}
{% endif %}

## Configure CSS class

You can apply custom styling to individual blocks using the [cssClass](../api/blockeditor/blockModel/#cssclass) property. This property accepts a string containing one or more CSS class names.

Custom CSS classes allow you to define specialized styling for specific blocks in your editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/cssClass/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/cssClass/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/blocks/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/cssClass" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/cssClass/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/cssClass/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/blocks/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/cssClass" %}
{% endif %}

## Configure image settings

For Image blocks, you can configure various aspects using the [imageSettings](../api/blockeditor/blockModel/#imagesettings) property. By using this property, you can set the image source, dimensions, save format, allowed file types, and more.

The [imageSettings](../api/blockeditor/blockModel/#imagesettings) property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [src](../api/blockeditor/imageSettingsModel/#src) | URL or data URI of the image | '' |
| [saveFormat](../api/blockeditor/imageSettingsModel/#saveformat) | Format to save the image ('Base64' or 'Blob') | 'Base64' |
| [allowedTypes](../api/blockeditor/imageSettingsModel/#allowedtypes) | Array of allowed file extensions | ['.jpg', '.jpeg', '.png'] |
| [width](../api/blockeditor/imageSettingsModel/#width) | Width of the image (px or %) | '' |
| [height](../api/blockeditor/imageSettingsModel/#height) | Height of the image (px or %) | '' |
| [minWidth](../api/blockeditor/imageSettingsModel/#minwidth) | Minimum width for resizing (px or string) | 40 |
| [maxWidth](../api/blockeditor/imageSettingsModel/#maxwidth) | Maximum width for resizing (px or string) | '' |
| [minHeight](../api/blockeditor/imageSettingsModel/#minheight) | Minimum height for resizing (px or string) | 40 |
| [maxHeight](../api/blockeditor/imageSettingsModel/#maxheight) | Maximum height for resizing (px or string) | '' |
| [altText](../api/blockeditor/imageSettingsModel/#alttext) | Alternative text for the image | '' |
| [cssClass](../api/blockeditor/imageSettingsModel/#cssclass) | CSS class(es) to apply to the image | '' |
| [readOnly](../api/blockeditor/imageSettingsModel/#readonly) | Prevents modification of the image | false |

These settings give you fine-grained control over how images appear and behave within your Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/image-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/image-block" %}
{% endif %}

## Configure code settings

For Code blocks, you can configure syntax highlighting and language options using the [codeSettings](../api/blockeditor/blockModel/#codesettings) property.

The [codeSettings](../api/blockeditor/blockModel/#codesettings) property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [languages](../api/blockeditor/codeSettingsModel/#languages) | Array of language options for syntax highlighting | [] |
| [defaultLanguage](../api/blockeditor/codeSettingsModel/#defaultlanguage) | The default language to use for syntax highlighting | 'javascript' |

Each language object in the `languages` array should have:
- [language](../api/blockeditor/codeLanguageModel/#language): The language value used for syntax highlighting
- [label](../api/blockeditor/codeLanguageModel/#label): The display name shown in the language selector

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/code-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/code-block" %}
{% endif %}

## Configuring label settings

The [labelSettings](../api/blockeditor/#labelsettings) property of the Block Editor provides options for configuring how labels work in your editor. It allows you to define the trigger character and available label items.

### Built-in items

The Block Editor comes with offers different built-in options. These include:

-   **Progress**: In-progress, On-hold, Done
-   **Priority**: High, Medium, Low

### Customize label

You can customize the labels by using the [labelSettings](../api/blockeditor/#labelsettings) property.

#### Trigger Character configuration

You can use the [triggerChar](../api/blockeditor/labelSettingsModel/#triggerchar) property to specify the character that will trigger the label suggestions popup while typing. The default trigger character is `$`.

#### Label items configuration

The [labelItems](../api/blockeditor/labelSettingsModel/#labelitems) array allows you to define the available labels in your editor. Each label item can have the following properties:

| Property    | Description                                 |
|-------------|---------------------------------------------|
| [id](../api/blockeditor/labelItemModel/#id)          | Unique identifier for the label             |
| [text](../api/blockeditor/labelItemModel/#text)        | Display text for the label                  |
| [groupHeader](../api/blockeditor/labelItemModel/#groupheader) | Category/group name for organizing labels   |
| [labelColor](../api/blockeditor/labelItemModel/#labelcolor)  | Background color of the label               |
| [iconCss](../api/blockeditor/labelItemModel/#iconcss)  | CSS class for an icon to display with label |


When users type the trigger character followed by text, a popup will appear showing matching label items from which they can select. The selected label will be inserted into the content as a Label content item.

#### Using labels with group headers

Labels with the same [groupHeader](../api/blockeditor/labelItemModel/#groupheader) value will be grouped together in the label selection popup:

The below sample demonstrates the customization of labels in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/label-settings/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/label-settings/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/label-settings" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/label-settings/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/label-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/label-settings" %}
{% endif %}

## Configure template

The Block Editor allows you to use custom templates for specialized content using the [template](../api/blockeditor/blockModel/#template) property. Templates can be defined as strings, functions, or HTML elements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/template-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/template-block" %}
{% endif %}

## Configure placeholder

You can configure placeholder text for block using the [placeholder](../api/blockeditor/blockModel/#placeholder) property. This text appears when the block is empty. The default placeholder for the paragraph block is `Write something or ‘/’ for commands.`.

The below sample demonstrates the configuration of placeholder in the Block Editor for the paragraph block.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/placeholder/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/placeholder" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/placeholder/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/placeholder" %}
{% endif %}

## Configure children

The Block Editor supports hierarchical content structures through the [children](../api/blockeditor/blockModel/#children) property. This property allows you to create nested blocks, which is applicable only for Callout and Toggle blocks.

Child blocks can be configured with all the same properties as top-level blocks.

### Configure parent id

For proper hierarchy, you should ensure that the [parentId](../api/blockeditor/blockModel/#parentid) of each child block matches the [id](../api/blockeditor/blockModel/#id) of its parent block. This structure helps maintain the nested relationships within the editor.

The below sample demonstrates the configuration of children in the Block Editor using parentId.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/blocks/children/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/children/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/children" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/blocks/children/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/blocks/children/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/children" %}
{% endif %}
