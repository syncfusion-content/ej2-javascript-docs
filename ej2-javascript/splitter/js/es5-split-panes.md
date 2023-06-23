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

This section explain about split panes behaviours.

## Horizontal layout

By default, splitter will render in horizontal orientation. Splitter container will be splitted as panes in horizontal flow direction with vertical seperator.

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

By setting [orientation](../api/splitter/#orientation) API as `Vertical`, splitter will render in vertical orientation. Splitter container will be splitted as panes in vertical flow direction with horizontal seperator.

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

You can render the multiple panes with both `Horizontal/Vertical` orientations.

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

By default, pane separator will be render with `1px` width/height. You can customize the separator size by using [separatorSize](../api/splitter/#separatorsize) API.

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

Splitter provides support to render the nested pane to achieve the complex layouts. You can use the same `<div>` element for splitter pane and nested splitter.

> Also you can render the nested splitter using direct child of the splitter pane. For this, nested splitter should have `100%` width and height to match with the parent pane dimensions.

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

You can add the panes programmatic but it will makes you complex. For this, you can use the addPane/removePane methods to add and remove the panes dynamically in the splitter.

### Add pane

You can add the panes dynamically in the splitter by passing [paneProperties](../api/splitter/panePropertiesModel) along with index to the [addPane](../api/splitter/#addpane) method

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

You can remove the split panes dynamically by passing the pane index to [removePane](../api/splitter/#removepane) method.

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

* [Resizable split panes](./resizing/)
* [Collapsible panes](./expand-and-collapse/)
* [Define size to a panes](./pane-sizing/)
* [Specify content to a panes](./es5-pane-content/)