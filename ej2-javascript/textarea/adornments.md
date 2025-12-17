---
layout: post
title: Adornments in ##Platform_Name## TextArea Control | Syncfusion
description: Learn how to add adornments in Syncfusion ##Platform_Name## TextArea control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in ##Platform_Name## TextArea control

Adornments allow you to add custom elements before or after the TextArea using the `prependTemplate` and `appendTemplate` properties. These elements can include icons, text labels, or action buttons for formatting and content management. With orientation support, you can arrange adornments horizontally or vertically using `adornmentFlow` and `adornmentOrientation` for flexible layouts.

## Common Use Cases

- **Visual Indicators**: Icons for context (e.g., edit, comment).
- **Formatting Tools**: Buttons for bold, italic, underline.
- **Content Actions**: Save, clear, or submit buttons.
- **Validation & Status**: Character count or error icons.
- **Flexible Layout**: Horizontal or vertical adornment flow.

## Adding Adornments with Orientation to TextArea

Use `prependTemplate` and `appendTemplate` to add custom HTML content before and after the TextArea.

- **`prependTemplate`**: Renders elements before the textarea.

- **`appendTemplate`**: Renders elements after the textarea.

You can control how adornments are positioned and arranged using the `adornmentFlow` and `adornmentOrientation` properties. Both properties accept only `Horizontal` or `Vertical` values defined in the `AdornmentsDirection` type.

- **`adornmentFlow`**: Defines where adornments appear around the TextArea.
  - **Horizontal**: Prepend on the left, append on the right.
  - **Vertical**: Prepend above, append below.

- **`adornmentOrientation`**: Defines how items inside each adornment are arranged.
  - **Horizontal**: Items displayed in a row.
  - **Vertical**: Items displayed in a column.


The following example demonstrates how to add adornments with orientation in the TextArea control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/adornments-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/adornments-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/adornments-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/adornments-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/adornments-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/adornments-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/adornments-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/adornments-cs1" %}

{% endif %}