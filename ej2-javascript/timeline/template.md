---
layout: post
title: Template in  ##Platform_Name## Timeline control | Syncfusion
description:  Checkout and learn about Template with ##Platform_Name## Timeline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timeline
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Timeline control

The Timeline control allows you to customize the look and information displayed for each item, providing a unique experience for users. This customization is achieved using the [template](../api/timeline#template) property, where you can define the content you want to show within each timeline item.

The template receives two pieces of information within its context:

| Type | Purpose |
| --- | --- |
| `item` | Represents the data specific to the particular timeline item. |
| `currentItem` | Indicates the current index of the timeline item. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/template/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/template/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/template/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/template/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/template" %}
{% endif %}