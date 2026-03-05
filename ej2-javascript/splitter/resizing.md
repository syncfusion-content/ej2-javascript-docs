---
layout: post
title: Resizing in ##Platform_Name## Splitter control | Syncfusion
description: Learn here all about Resizing in Syncfusion ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resizing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in ##Platform_Name## Splitter control

Resizing is enabled by default for Splitter panes. A resize gripper is added to separators to simplify resizing.

> A horizontal Splitter allows resizing horizontally.  
> A vertical Splitter allows resizing vertically.

During resizing, previous and next panes are adjusted automatically.

## Min and Max validation

Splitter allows setting the [minimum](../api/splitter/paneProperties#min) and [maximum](../api/splitter/paneProperties#max) sizes for each pane properties. Resizing will not exceed the configured minimum or maximum values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/resize-min-max-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/resize-min-max-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/resize-min-max-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/resize-min-max-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs1" %}
{% endif %}

## Prevent resizing

Disable resizing for a pane by setting `false` to the [`resizable`](../api/splitter/panePropertiesModel#resizable) API within [paneSettings](../api/splitter/paneProperties#paneproperties).

> Splitter resizing will be enabled only when the target of the adjacent pane's `resizable` api should also be in `true` state.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/fixed-pane-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/fixed-pane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/fixed-pane-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/fixed-pane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/fixed-pane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/fixed-pane-cs1" %}
{% endif %}

## Refresh content on resizing

During pane resizing, refresh pane content using the [`resizeStart`](../api/splitter#resizestart), [`resizing`](../api/splitter#resizestart) or [`resizeStop`](../api/splitter#resizestart) events.

## Customize the resize grip and cursor

Customize the resize gripper icon and cursor using CSS.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/resizeicon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/resizeicon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resizeicon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/resizeicon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/resizeicon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/resizeicon-cs1" %}
{% endif %}

## See Also

* [Collapsible panes](./expand-and-collapse)