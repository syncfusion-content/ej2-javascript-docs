---
layout: post
title: Content Import/Export in ##Platform_Name## Rich Text Editor control | Syncfusion
description: Learn here all about Content Import/Export in Syncfusion ##Platform_Name## Rich Text Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: IContent Import/Export
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Content Import/Export in ##Platform_Name## Rich Text Editor control

## Importing Content from Microsoft Word

The Rich Text Editor provides functionality to import content directly from Microsoft Word documents, preserving the original formatting and structure. This feature ensures a smooth transition of content from Word to the editor, maintaining elements such as headings, lists, tables, and text styles.

To integrate an `ImportWord` option into the Rich Text Editor toolbar, you can add it as a custom toolbar [items](../api/rich-text-editor/toolbarSettings/#items) using the items property in toolbarSettings.

The following example illustrates how to set up the `ImportWord` in the Rich Text Editor to facilitate content importation from Word documents:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/import-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/import-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/import-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/import-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/import-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/import-cs1" %}
{% endif %}

## Exporting Content to PDF and Microsoft Word

The Rich Text Editor's export functionality allows users to convert their edited content into PDF or Word documents with a single click, preserving all text styles, images, tables, and other formatting elements.

You can add `ExportWord` and `ExportPdf` tools to the Rich Text Editor toolbar using the toolbarSettings [items](../api/rich-text-editor/toolbarSettings/#items) property.

The following example demonstrates how to configure the `ExportWord` and `ExportPdf` tools in the Rich Text Editor, facilitating the export of content into Word or PDF documents:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/export-cs1" %}
{% endif %}

> To create Rich Text Editor with ImportExport feature, inject the ImportExport module to the Rich Text Editor using the `RichTextEditor.Inject(ImportExport)` method.
