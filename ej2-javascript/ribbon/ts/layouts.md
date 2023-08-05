---
layout: post
title: Ribbon Layouts in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Layouts with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Ribbon Layouts

The Ribbon allows to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In classic layout, the Ribbon component organizes the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/documentation/api/ribbon/#activelayout) property to [Classic](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon component renders in the `Classic` layout.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/classic-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/classic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/classic-cs1" %}

### Defining items size

You can use the [allowedSizes](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItem/#allowedsizes) property to set the allowed size for an item. The Ribbon items can be appeared in three different sizes: Large(large icon with text), Medium(small icon with text) and Small(small icon only). On resizing, the items size can be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/item-size-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/item-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/item-size-cs1" %}

### Defining items orientation

The Ribbon group [orientation](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupModel/#orientation) property allows to manage how the items are aligned either in a `Row` or `Column`. By default, the orientation is set to `Column`, in which the items are arranged vertically.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/orientation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/orientation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/orientation-cs1" %}

>  When the orientation is set to `Row` a group may have a maximum of three collections each of which may contain any number of items. When the orientation is set to `Column` a group may have any number of collections, each of which may contain one large-sized item or three medium/small-sized items. If two large-sized items are specified, it automatically converts into two medium/small-sized items.

### Defining group header

You can use the [header](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroup/#header) property to set the name for each group header.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/group-header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-header-cs1" %}

### Defining group icon

You can use the [groupIconCss](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroup/#groupiconcss) property to customize the icons in the group overflow button. When the ribbon size is adjusted, the group popup will appear.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/group-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-icon-cs1" %}

### Enabling group launcher icon

You can use the [showLauncherIcon](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroup/#showlaunchericon) property to enable or disable the launcher icon for each group. By default, the property is set to `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/launcher-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/launcher-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/launcher-icon-cs1" %}

#### Customize launcher icon

You can use the [launcherIconCss](https://ej2.syncfusion.com/documentation/api/ribbon#launchericoncss) property to customize the launcher icon by applying the custom styles.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/custom-launcher-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/custom-launcher-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/custom-launcher-icon-cs1" %}

### Defining group collapsible state

You can use the [isCollapsible](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroup/#iscollapsible) property to determine whether the group is collapsed or not during resize. By default, the property is set to `true`. To prevent the group from being collapsed, set the property to `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/collapsible-state-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/collapsible-state-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/collapsible-state-cs1" %}

#### Defining priority order for group collapse or expand

You can use the [priority](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroup/#priority) property to set the priority order for each group which should be collapsed or expanded on resizing. When collapsing, higher priority values are fetched first. When expanding, lower priority values are fetched first.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/priority-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/priority-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/priority-cs1" %}

## Simplified layout

In simplified layout, the Ribbon component organizes the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/simplified-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/simplified-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/simplified-cs1" %}

### Enabling group overflow popup

You can use the [enableGroupOverflow](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property to add a separate popup for the overflow items in the group while resizing. The overflow items will appear in the common overflow popup, located at the right end of the tab content if it is set to `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/group-overflow-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-overflow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-overflow-cs1" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon control expands to its normal state when click on the tab header.

You can use the [isMinimized](https://ej2.syncfusion.com/documentation/api/ribbon/#isminimized) property to change the Ribbon component to minimized state. By default, the value is `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/minimize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/minimize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/minimize-cs1" %}