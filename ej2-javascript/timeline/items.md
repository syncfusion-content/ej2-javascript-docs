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

The Timeline items can be added by using the [items](../api/timeline#items) property. Each item can be configured with options such as [`content`](../api/timeline#items#content), [`oppositeContent`](../api/timeline#items#oppositecontent), [`dotCss`](../api/timeline#items#dotcss), [`disabled`](../api/timeline#items#disabled) and [`cssClass`](../api/timeline#items#cssclass).

## Adding content

You can define the item content using the [`content`](../api/timeline#items#content) property.

### String content

You can define string content for the Timeline items.

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

You can specify template content for the items by using a selector for an element in HTML.

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

You can add additional information to each Timeline item using the [`oppositeContent`](../api/timeline#items#oppositecontent) property, which is positioned opposite the item content. Similar to the [`content`](../api/timeline#items#content) property, you can define `string` or `function` as contents for [`oppositeContent`](../api/timeline#items#oppositecontent).

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

Define a CSS class to set icons, background colors, or images to personalize the appearance of dots associated with each Timeline item using the [`dotCss`](../api/timeline#items#dotcss) property.

### Adding icons

You can define a CSS class to display an icon for each item using the [`dotCss`](../api/timeline#items#dotcss) property.

### Adding images

Include images for the Timeline items using the [`dotCss`](../api/timeline#items#dotcss) property by setting the CSS `background-image` property.

### Adding text

You can display text for the Timeline items using the [`dotCss`](../api/timeline#items#dotcss) property, by adding text to the CSS [`content`](../api/timeline#items#content) property.

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

You can use the [`disabled`](../api/timeline#items#disabled) property to disable an item when set to `true`. By default, the value is `false`.

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

You can customize the appearance of the Timeline item by specifying a custom CSS class using the [`cssClass`](../api/timeline#items#cssclass) property.