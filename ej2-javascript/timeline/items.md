---
layout: post
title: Items in  ##Platform_Name## Timeline control | Syncfusion
description:  Checkout and learn about Items with ##Platform_Name## Timeline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timeline
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Items in ##Platform_Name## Timeline control

The Timeline items can be added by using the [`items`](../api/timeline#items) property. Each item can be configured with options such as [`content`](../api/timeline/timelineItemModel#content), [`oppositeContent`](../api/timeline/timelineItemModel#oppositecontent), [`dotCss`](../api/timeline/timelineItemModel#dotcss), [`disabled`](../api/timeline/timelineItemModel#disabled) and [`cssClass`](../api/timeline/timelineItemModel#cssclass).

## Adding content

Define the item content using the [`content`](../api/timeline/timelineItemModel#content) property.

### String content

Define string content for Timeline items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/items/content/string-based/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/content/string-based/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/string-based/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/content/string-based" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/items/content/string-based/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/content/string-based/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/string-based/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/content/string-based" %}
{% endif %}

### Templated content

Specify template content for items by using a selector for an HTML element.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/items/content/template-based/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/content/template-based/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/template-based/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/content/template-based" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/items/content/template-based/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/content/template-based/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/template-based/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/content/template-based" %}
{% endif %}

## Adding opposite content

Add additional information to each Timeline item using the [`oppositeContent`](../api/timeline/timelineItemModel#oppositecontent) property; this content is positioned opposite the item content. Similar to the [`content`](../api/timeline/timelineItemModel#content) property,users can define `string` or `function` as contents for [`oppositeContent`](../api/timeline/timelineItemModel#oppositecontent).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/items/opposite-content/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/opposite-content/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/opposite-content/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/opposite-content" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/items/opposite-content/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/opposite-content/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/opposite-content/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/opposite-content" %}
{% endif %}

## Dot item

Define a CSS class to set icons, background colors, or images to personalize the appearance of dots associated with each Timeline item using the [`dotCss`](../api/timeline/timelineItemModel#dotcss) property.

### Adding icons

Define a CSS class to display an icon for each item using the [`dotCss`](../api/timeline/timelineItemModel#dotcss) property.

### Adding images

Include images for the Timeline items using the [`dotCss`](../api/timeline/timelineItemModel#dotcss) property by setting the CSS `background-image` property.

### Adding text

Text can be displayed for the Timeline items using the [`dotCss`](../api/timeline/timelineItemModel#dotcss) property, by adding text to the CSS [`content`](../api/timeline/timelineItemModel#content) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/items/dot-item/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/dot-item/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/dot-item/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/dot-item" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/items/dot-item/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/dot-item/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/dot-item/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/dot-item" %}
{% endif %}

## Disabling items

The [`disabled`](../api/timeline/timelineItemModel#disabled) property can be used to disable an item when set to `true`. By default, the value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/items/disabled/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/disabled/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/disabled/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/disabled" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/items/disabled/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/disabled/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/items/disabled/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/disabled" %}
{% endif %}

## cssClass

Appearance of the Timeline item can be customized by specifying a custom CSS class using the [`cssClass`](../api/timeline/timelineItemModel#cssclass) property.