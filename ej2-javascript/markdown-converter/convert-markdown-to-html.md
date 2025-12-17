---
layout: post
title: Markdown to HTML ##Platform_Name## Markdown Converter | Syncfusion
description: Learn how to convert Markdown to HTML using ##Platform_Name## Markdown Converter in Syncfusion Essential JS 2 with customization options and examples.
platform: ej2-javascript
control: Markdown Converter
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Convert Markdown To HTML using Markdown Converter

The Markdown Converter is a simple and fast tool that converts Markdown text into clean HTML. This makes it easy to display well-structured content on web pages and applications with consistent formatting.

The conversion is handled by the `toHtml` method, which takes Markdown as input and returns the corresponding HTML. It supports all common Markdown elements like headings, lists, tables, links, images, and inline styles.

Here is the example code snippet of Markdown Converter:

```typescript

import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';

const markdownContent = '# Hello World\nThis is **Markdown** text.';
// Convert Markdown to HTML
const htmlOutput = MarkdownConverter.toHtml(markdownContent);
console.log(htmlOutput);

```

## Configurable Options for Markdown Converter

The `Markdown Converter` provides several options to customize the conversion process. These options are passed as part of the configuration when calling the `toHtml` method. By using these options, you can control how Markdown is parsed and rendered into HTML.

```typescript
MarkdownConverter.toHtml(markdownContent: string, options?: MarkdownConverterOptions);
```

### Markdown Converter Options

| **Option**   | **Description**                                                                                   | **Type**   | **Default** |
|--------------|---------------------------------------------------------------------------------------------------|------------|-------------|
| `async`      | Enables or disables **asynchronous conversion** for large content processing.                   | `boolean`  | `false`     |
| `gfm`        | Enables or disables support for **GitHub Flavored Markdown (GFM)**.                              | `boolean`  | `true`      |
| `lineBreak`  | Enables or disables conversion of **single line breaks** into `<br>` elements.                   | `boolean`  | `false`     |
| `silence`    | Enables or disables **error suppression**, skipping invalid Markdown instead of throwing errors. | `boolean`  | `false`     |


The below sample demonstrates how to use the [Syncfusion Markdown Editor](https://ej2.syncfusion.com/documentation/markdown-editor/getting-started) along with the Markdown Converter to convert Markdown content into HTML with configurable options. This setup allows real-time editing and preview of the converted output.

To make the experience seamless, the [Syncfusion Splitter control](https://ej2.syncfusion.com/documentation/splitter/split-panes) is used to display the editor and preview side-by-side.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/markdown-converter/markdown-converter-overview/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-converter/markdown-converter-overview/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-converter/markdown-converter-overview" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/markdown-converter/markdown-converter-overview/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-converter/markdown-converter-overview/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/markdown-converter/markdown-converter-overview" %}
{% endif %}
