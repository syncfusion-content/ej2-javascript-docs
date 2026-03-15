---
layout: post
title: Appearance in ##Platform_Name## Sankey Chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion ##Platform_Name## Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Appearance
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## Sankey Chart component

The Sankey Chart provides comprehensive customization options to control visual appearance, dimensions, responsiveness, colors, borders, and themes. These appearance settings enable you to create diagrams that match your application's design system and user experience requirements.

This guide covers dimension configuration, responsive sizing, backgrounds, borders, margins, and theme selection.

## Dimensions

Control the size of the Sankey Chart using the `width` and `height` properties. You can specify dimensions in pixels (px) or percentages (%) to create fixed or responsive layouts.

### Width and Height Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| width | string | null | Width of the chart as a CSS value (e.g., '700px' or '100%'). |
| height | string | null | Height of the chart as a CSS value (e.g., '420px' or '100%'). |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sankey/appearance/dimensions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/dimensions-cs1" %}
{% endif %}

## Responsive Sizing

Use percentage-based dimensions for responsive layouts that adapt to container sizes. This is recommended for applications that need to work across different device sizes and screen orientations:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sankey/appearance/responsive-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/responsive-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sankey/appearance/responsive-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sankey/appearance/responsive-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/responsive-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/responsive-cs1" %}
{% endif %}

## Background Customization

Customize the background of the Sankey Chart with solid colors or background images to match your application's theme or create specific visual effects.

### Background Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| background | string | null | Background color of the chart (CSS color value). |
| backgroundImage | string | null | Background image URL. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sankey/appearance/background-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/background-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sankey/appearance/background-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sankey/appearance/background-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/background-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/background-cs1" %}
{% endif %}

## Border Customization

Customize the border of the Sankey Chart container.

### Border Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| border.color | string | '' | Border color. Accepts values in hex or RGBA as valid CSS color strings. |
| border.width | number | 1 | Border width in pixels. |
| border.dashArray | string | '' | Sets the length of dashes in the stroke of border. |


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sankey/appearance/border-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/border-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sankey/appearance/border-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sankey/appearance/border-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/border-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/border-cs1" %}
{% endif %}

## Margin Customization

Control the spacing around the chart content using margins.

### Margin Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| margin.left | number | 10 | Left margin in pixels. |
| margin.right | number | 10 | Right margin in pixels. |
| margin.top | number | 10 | Top margin in pixels. |
| margin.bottom | number | 10 | Bottom margin in pixels. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sankey/appearance/margin-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/margin-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sankey/appearance/margin-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sankey/appearance/margin-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/margin-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/margin-cs1" %}
{% endif %}

## Theme

The Sankey Chart provides multiple built-in themes to customize the visual appearance. Apply a theme using the `theme` property.

### Theme Configuration

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sankey/appearance/theme-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/theme-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sankey/appearance/theme-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sankey/appearance/theme-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sankey/appearance/theme-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/theme-cs1" %}
{% endif %}