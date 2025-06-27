---
layout: post
title: Appearance in ##Platform_Name## Block Editor control | Syncfusion
description: Checkout and learn about appearance with ##Platform_Name## Block Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## Block Editor control

The Block Editor control provides various appearance customization options to match your application's design requirements. These properties allow you to control the visual styling, layout, and overall look and feel of the editor.

## Setting width and height

You can specify the width and height for the Block Editor control using the [width](../api/blockeditor/#width) and [height](../api/blockeditor/#height) properties.

```typescript
const editor = new BlockEditor({
    width: '100%',
    height: '80vh'
});

// Or with specific pixel values
const editor = new BlockEditor({
    width: '800px',
    height: '500px'
});
```

## Setting readonly mode

You can utilize the [readonly](../api/blockeditor/#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

```typescript
const editor = new BlockEditor({
    readonly: true
});
```

## Customization using CSS Class

You can use the [cssClass](../api/blockeditor/#cssclass) property to customize the appearance of the Block Editor control.

```typescript
const editor = new BlockEditor({
    width: '600px',
    height: '400px',
    cssClass: 'custom-editor-theme'
});
```

Below example demonstrates the usage of readonly and cssClass properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/appearance/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/appearance" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/appearance/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/appearance" %}
{% endif %}