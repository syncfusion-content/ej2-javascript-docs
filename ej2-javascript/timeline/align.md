---
layout: post
title: Alignment in  ##Platform_Name## Timeline control | Syncfusion
description:  Checkout and learn about Alignment with ##Platform_Name## Timeline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timeline
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Alignment in ##Platform_Name## Timeline control

You can display the Timeline content as `Before`, `After`, `Alternate`, and `AlternateReverse` using the [align](../api/timeline/#align) property. The [`oppositeContent`](../api/timeline/timelineItemModel/#oppositecontent) will be displayed parallel to the content when configured in the [TimelineItemModel](../api/timeline/timelineItemModel/).

## Before

In [`Before`](../api/timeline/timelineAlign/) alignment, for `horizontal` orientation, the item content is placed at the top and [`oppositeContent`](../api/timeline/timelineItemModel/#oppositecontent) at the bottom. For `vertical` orientation, the content is on the left and [`oppositeContent`](../api/timeline/timelineItemModel/#oppositecontent) on the right.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/align/before/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/before/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/before/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/before" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/align/before/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/before/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/before/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/before" %}
{% endif %}

## After

In [`After`](../api/timeline/timelineAlign/) alignment, for `horizontal` orientation, the item content is placed at the bottom and [`oppositeContent`](../api/timeline/timelineItemModel/#oppositecontent) at the top. For `vertical` orientation, the content is on the right and [`oppositeContent`](../api/timeline/timelineItemModel/#oppositecontent) on the left.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/align/after/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/after/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/after/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/after" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/align/after/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/after/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/after/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/after" %}
{% endif %}

## Alternate

In [`Alternate`](../api/timeline/timelineAlign/) alignment, the item content is arranged alternately, regardless of the Timeline orientation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/align/alternate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/alternate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/alternate/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/alternate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/align/alternate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/alternate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/alternate/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/alternate" %}
{% endif %}

## Alternate reverse

In [`AlternateReverse`](../api/timeline/timelineAlign/) alignment, the item content is arranged in reverse order of alternate alignment, regardless of the Timeline orientation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/align/alternate-reverse/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/alternate-reverse/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/alternate-reverse/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/alternate-reverse" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/align/alternate-reverse/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/align/alternate-reverse/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/align/alternate-reverse/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/align/alternate-reverse" %}
{% endif %}