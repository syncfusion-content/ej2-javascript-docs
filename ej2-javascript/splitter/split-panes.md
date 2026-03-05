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

This section explains Splitter pane behaviors.

## Horizontal layout

By default, Splitter renders in horizontal orientation. The Splitter container is divided into panes in a horizontal flow with vertical separators.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs4" %}
{% endif %}

## Vertical layout

Set the [orientation](../api/splitter#orientation) API to `Vertical`, to render the Splitter in vertical orientation. Splitter container is divided into panes in a vertical flow with horizontal seperator.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-orientation-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-orientation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-orientation-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-orientation-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-orientation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/layouts-orientation-cs2" %}
{% endif %}

> Multiple panes can be rendered in both `Horizontal` and `Vertical` orientations.

## Separator

By default, pane separators render with a `1px` width/height. To customize the separator size by using [separatorSize](../api/splitter#separatorsize) API.

> For horizontal orientation, separatorSize is the separator width.
> For vertical orientation, separatorSize is the separator height.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/layouts-cs5" %}
{% endif %}

## Nested Splitter

Splitter provides support to render the nested pane to achieve the complex layouts. The same <div> element can be used as a pane and as a nested Splitter.

> Alternatively, a nested Splitter can be placed as a direct child of a pane; the nested Splitter must have `100%` width and height to match the parent pane dimensions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/layouts-nested-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-nested-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/layouts-nested-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/layouts-nested-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/layouts-nested-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/layouts-nested-cs2" %}
{% endif %}

## Add or remove pane

Panes can be added programmatically but it will makes complex. For this, use the addPane/removePane methods to add and remove the panes dynamically in the splitter.

### Add pane

Panes can be added dynamically in the splitter by passing [paneProperties](../api/splitter/panePropertiesModel) along with index to the [addPane](../api/splitter#addpane) method

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/addpane-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/addpane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/addpane-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/addpane-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/addpane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/addpane-cs2" %}
{% endif %}

### Remove pane

Split panes can be removed dynamically by passing the pane index to [removePane](../api/splitter#removepane) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/removepane-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/removepane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/removepane-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/removepane-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/removepane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/splitter/removepane-cs2" %}
{% endif %}

## See Also

* [Resizable split panes](./resizing)
* [Collapsible panes](./expand-and-collapse)
* [Define size to a panes](./pane-sizing)
* [Specify content to a panes](./pane-content)