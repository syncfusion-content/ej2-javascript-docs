---
layout: post
title: Layouts in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Layouts with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in Ribbon control

The Ribbon offers to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#activelayout) property. The Ribbon control supports the following layouts:

## Classic layout

In classic layout, the Ribbon control organize the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#activelayout) property to [Classic](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon control renders in `Classic` layout.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/classic-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/classic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/classic-cs1" %}

### Defining items size

The [allowedSizes](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#allowedsizes) property can be used to set the allowed size for an item. The Ribbon items can be appeared in three different sizes: Large(large icon with text), Medium(small icon with text) and Small(small icon only). On resizing, the items size can be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/item-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/item-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/item-size-cs1" %}

### Defining items orientation

The Ribbon group [orientation](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#orientation) property allows to manage how the items are aligned. By default, the orientation is set to `Column`, in which the items are arranged vertically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/orientation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/orientation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/orientation-cs1" %}

>  When the orientation is set to `Row` a group may have a maximum of three collections each of which may contain any number of items. When the orientation is set to `Column` a group may have any number of collections, each of which may contain one large-sized item or three medium/small-sized items. If two large-sized items are specified, it automatically converts into two medium/small-sized items.

### Defining group header

The [header](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#header) property is used to set the name for each group header.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/group-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-header-cs1" %}

### Defining group icon

The [groupIconCss](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#groupiconcss) property is used to customize the icons in the group overflow button. When the ribbon's size is adjusted, the group popup will appear.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/group-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-icon-cs1" %}

### Enabling group launcher icon

The [showLauncherIcon](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#showlaunchericon) property can be used to enable or disable the launcher icon for each group. By default, the property is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/launcher-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/launcher-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/launcher-icon-cs1" %}

#### Customize launcher icon

The [launcherIconCss](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonModel/#launchericoncss) property is used to customize the launcher icon by applying the custom styles.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/custom-launcher-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/custom-launcher-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/custom-launcher-icon-cs1" %}

### Defining group collapsible state

The [isCollapsible](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#iscollapsible) property can determine whether a group can be collapsed or not during resize. By default, the property is set to `true`. To prevent the group from being collapsed, set the property to `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/collapsible-state-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/collapsible-state-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/collapsible-state-cs1" %}

#### Defining priority order for group collapse or expand

The [priority](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#priority) property define's the priority order for each group which should be collapsed or expanded on resizing. When collapsing, higher priority values are fetched first. When expanding, lower priority values are fetched first.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/priority-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/priority-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/priority-cs1" %}

## Simplified layout

In simplified layout, the Ribbon control organize the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#activelayout) property to [Simplified](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/simplified-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/simplified-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/simplified-cs1" %}

### Enabling group overflow popup

The [enableGroupOverflow](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#enablegroupoverflow) property defines whether to add a separate popup for the overflow items in the group while resizing. The overflow items will appear in the standard overflow popup located at the right end of the tab content if it is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/group-overflow-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-overflow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-overflow-cs1" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon control expands to its normal state when click on the tab header.

Also, you can render or programmatically change the Ribbon control to minimized state by setting the [isMinimized](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#isminimized) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/minimize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/minimize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/minimize-cs1" %}