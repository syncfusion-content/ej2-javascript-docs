---
layout: post
title: Paste Clean-up in ##Platform_Name## Block Editor control | Syncfusion
description: Checkout and learn about Paste Clean-up with ##Platform_Name## Block Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Paste Clean-up in ##Platform_Name## Block Editor control

The Block Editor control provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains consistency with the editor's styling and structure. This helps in removing unwanted formatting, scripts, or elements often copied from external sources like web pages or word processors.

You can configure the paste settings using the [pasteSettings](../api/blockeditor/#pastesettings) property in the Block Editor control. This property allows you to define various options to control how content is pasted into the editor.

## Configuring allowed styles

The [allowedStyles](../api/blockeditor/pasteSettingsModel/#allowedstyles) property in the [pasteSettings](../api/blockeditor/#pastesettings) model allows you to define which CSS styles are permitted when content is pasted into the editor. Any style not included in this list will be stripped from the pasted content. This ensures that only desired visual attributes are preserved, maintaining a clean and consistent look.

By default, following styles are allowed:

['font-weight', 'font-style', 'text-decoration', 'text-transform'].

In the below example, only `font-weight` and `font-style` styles will be retained from the pasted content. All other inline styles will be removed.

```typescript
const editor = new BlockEditor({
    pasteSettings: {
        allowedStyles: ['font-weight', 'font-style']
    }
});
```

## Setting denied tags

The [deniedTags](../api/blockeditor/pasteSettingsModel/#deniedtags) property in [pasteSettings](../api/blockeditor/#pastesettings) enables you to specify HTML tags that should be completely removed from the pasted content. This is particularly useful for stripping out potentially problematic or irrelevant tags, such as `script` tags, `iframe`s, or any other elements you don't want to allow in the editor. By default, the `deniedTags` property is an empty array, meaning no tags are removed by default.

In the below example, any `<script>` or `<iframe>` tags found in the pasted content will be removed, preventing unwanted behavior or styling issues.

```typescript
const editor = new BlockEditor({
    pasteSettings: {
        deniedTags: ['script', 'iframe']
    }
});
```

Below example demonstrates the usage of paste settings that allows only specific styles and also removes the specific tags from the pasted content.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/allowedstyle" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/allowedstyle" %}
{% endif %}

## Disable Keep format

By default, the editor attempts to keep the formatting of the pasted content (e.g., bold, italics, links). You can disable this behavior by setting the [keepFormat](../api/blockeditor/pasteSettingsModel/#keepformat) property to `false` in [pasteSettings](../api/blockeditor/#pastesettings). When disabled, the editor will primarily paste the content as plain text regardless of `allowedStyles`.

```typescript
const editor = new BlockEditor({
    pasteSettings: {
        keepFormat: false
    }
});
```

## Allowing plain text

To paste content purely as plain text, stripping all HTML tags and inline styles, you can set the [plainText](../api/blockeditor/pasteSettingsModel/#plaintext) property to `true` in [pasteSettings](../api/blockeditor/#pastesettings). This ensures that only the raw textual content is inserted into the editor, making it ideal for maintaining strict content consistency. By default, the `plainText` property is set to `false`.

```typescript
const editor = new BlockEditor({
    pasteSettings: {
        plainText: true
    }
});
```

Below example demonstrates the usage of paste settings that disables the keep format and allows plain text.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/plaintext" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/plaintext" %}
{% endif %}

### Events

The following events are available when pasting content into the editor.

|Name|Args|Description|
|---|---|---|
|[beforePaste](../api/blockeditor/#beforepaste)|BeforePasteEventArgs|Triggers before the content is pasted into the editor.|
|[afterPaste](../api/blockeditor/#afterpaste)|AfterPasteEventArgs|Triggers after the content is pasted into the editor.|

Below example demonstrates how to configure above events in the editor.