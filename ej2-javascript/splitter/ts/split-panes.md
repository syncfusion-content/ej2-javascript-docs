---
layout: post
title: Split panes in ##Platform_Name## Splitter control | Syncfusion
description: Learn here all about Split panes in Syncfusion ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Split panes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Split panes in ##Platform_Name## Splitter control

This section explains split pane behaviors.

## Horizontal layout

By default, the Splitter renders in horizontal orientation. The Splitter container is split into panes in a horizontal flow, with a vertical separator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs6" %}

## Vertical layout

Set the [orientation](../api/splitter#orientation) API to `Vertical`, splitter will render in vertical orientation.The Splitter container is split into panes in a vertical with a horizontal separator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-orientation-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-orientation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/layouts-orientation-cs3" %}

## Multiple panes

Multiple panes can be rendered with either `Horizontal` or `Vertical` orientation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-multiple-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-multiple-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/layouts-multiple-cs2" %}

## Separator

By default, the pane separator is rendered at `1px` width/height. Customize the separator size using the [separatorSize](../api/splitter#separatorsize) API.

> For horizontal orientation, separatorSize is applied as separator width.
> For vertical orientation, separatorSize is applied as separator height.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs7" %}

## Nested Splitter

Splitter supports nested panes for creating complex layouts. The same `<div>` element can serve as a Splitter pane and as a nested Splitter.

> Nested Splitter can be rendered as a direct child of a Splitter pane. In that case, set the nested Splitter to `100%` width and height so it matches the parent pane's dimensions.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-nested-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-nested-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/layouts-nested-cs3" %}

## Add or remove pane

Panes can be added or removed programmatically using the `addPane` and `removePane` methods. These APIs enable dynamic modification of panes at runtime.

### Add pane

Add panes dynamically by passing a [paneProperties](../api/splitter/panePropertiesModel) along with index to the [addPane](../api/splitter#addpane) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/addpane-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/addpane-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/addpane-cs3" %}

### Remove pane

Remove panes dynamically by passing the pane index to the [removePane](../api/splitter#removepane) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/removepane-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/removepane-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/removepane-cs3" %}

## See Also

* [Resizable split panes](./resizing)
* [Collapsible panes](./expand-and-collapse)
* [Define size to a panes](./pane-sizing)
* [Specify content to a panes](./pane-content)