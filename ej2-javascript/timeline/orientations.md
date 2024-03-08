---
layout: post
title: Orientations in  ##Platform_Name## Timeline control | Syncfusion
description:  Checkout and learn about Orientations with ##Platform_Name## Timeline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timeline
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Orientations in ##Platform_Name## Timeline control

The [orientation](../api/timeline#orientation) property in the Timeline control allows you to specify the layout direction of the Timeline.

## Horizontal

The Timeline items can be arranged along a horizontal axis, with each item positioned sequentially from left to right by setting the [orientation](../api/timeline#orientation) property to `Horizontal`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/orientations/horizontal/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/orientations/horizontal/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/orientations/horizontal/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/orientations/horizontal" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/orientations/horizontal/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/orientations/horizontal/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/orientations/horizontal/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/orientations/horizontal" %}
{% endif %}

## Vertical

By setting the [orientation](../api/timeline#orientation) property to `Vertical`, the timeline items can be arranged from top to bottom manner. By default, the Timeline items are displayed in `vertical` orientation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/orientations/vertical/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/orientations/vertical/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/orientations/vertical/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/orientations/vertical" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/orientations/vertical/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/orientations/vertical/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/orientations/vertical/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/orientations/vertical" %}
{% endif %}