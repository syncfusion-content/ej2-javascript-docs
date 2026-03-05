---
layout: post
title: Es5 split panes in ##Platform_Name## Splitter control | Syncfusion
description: Learn here all about Es5 split panes in Syncfusion ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Es5 split panes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 split panes in ##Platform_Name## Splitter control

This section explains Splitter pane behaviors.

## Horizontal layout

By default, the Splitter renders in horizontal orientation. Splitter container will be splitted as panes in horizontal flow direction with vertical seperator.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs1" %}

## Vertical layout

Set the [orientation](../api/splitter#orientation) property to `Vertical` to render the Splitter in vertical orientation. Splitter container will be splitted as panes in vertical flow direction with horizontal seperator.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-orientation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-orientation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-orientation-cs1" %}

## Multiple panes

Multiple panes can be rendered with either `Horizontal` or `Vertical` orientation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-multiple-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-multiple-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-multiple-cs1" %}

## Separator

By default, separators are 1px thick. Use the  [separatorSize](../api/splitter#separatorsize) property to customize the separator thickness.

> For horizontal orientation, it will be considered as separator width.
> For vertical orientation, it will be considered as separator height.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs2" %}

## Nested Splitter

The Splitter supports nested panes to achieve complex layouts. A nested Splitter can be placed inside a pane using the same `<div>` element for the pane and the nested Splitter.

> Alternatively, render the nested Splitter as a direct child of the pane. For this, nested splitter should have `100%` width and height to match with the parent pane dimensions.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-nested-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-nested-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-nested-cs1" %}

## Add or remove pane

Panes can be managed programmatically using the addPane and removePane methods to add and remove the panes dynamically in the splitter.

### Add pane

Use the panes dynamically in the splitter by passing [paneProperties](../api/splitter/panePropertiesModel) along with index to the [addPane](../api/splitter#addpane) method

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/addpane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/addpane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/addpane-cs1" %}

### Remove pane

Remove panes dynamically by passing the pane index to the [removePane](../api/splitter#removepane) method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/removepane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/removepane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/removepane-cs1" %}

## See Also

* [Resizable split panes](./resizing)
* [Collapsible panes](./expand-and-collapse)
* [Define size to a panes](./pane-sizing)
* [Specify content to a panes](./es5-pane-content)