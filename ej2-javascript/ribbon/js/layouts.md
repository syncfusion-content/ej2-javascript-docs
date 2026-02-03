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

# Ribbon Layouts

The Ribbon layout can be customized using the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/#activelayout) property. The Ribbon control supports the following layouts:

## Classic layout

In the Classic layout, the Ribbon control organizes items and groups in a traditional multi-row format. This is the default layout and can be explicitly set by assigning [classic](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonLayout/) to the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/#activelayout) property.

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

The [allowedSizes](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#allowedsizes) property sets the permitted sizes for a ribbon item. Ribbon items can be displayed in three sizes: Large (large icon with text), Medium (small icon with text), and Small (small icon only). During resizing, item sizes automatically adjust based on the available tab content width, transitioning from Large to Medium and then to Small.

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

The group's [orientation](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#orientation) property manages how items are aligned, either in a `Row` or `Column`. By default, the orientation is `Column`, which arranges items vertically.

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

The [header](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroup/#header) property sets the title for each group.

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

The [groupIconCss](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroup/#groupiconcss) property customizes the icon for the group's overflow button. When the ribbon's width is reduced, groups collapse into this button, which reveals a popup menu with the group's items when clicked.

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

The [showLauncherIcon](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroup/#showlaunchericon) property enables or disables the launcher icon for a group. This property is `false` by default.

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

The [launcherIconCss](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#launchericoncss) property customizes the group's launcher icon with a custom CSS class.

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

The [isCollapsible](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroup/#iscollapsible) property determines whether a group collapses during resizing. By default, this property is `true`. Set it to `false` to prevent the group from collapsing.

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

The [priority](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroup/#priority) property sets the order in which groups collapse or expand on resize. When collapsing, groups with higher priority values are processed first. When expanding, groups with lower priority values are processed first.

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

In the Simplified layout, the Ribbon organizes items and groups into a single row, creating a more compact interface. This layout is enabled by setting the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonLayout/).

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

The [enableGroupOverflow](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property creates a dedicated popup menu for a group's overflow items during resizing. If this is `false`, overflow items are moved to a common overflow popup at the right end of the tab content area.

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

The Ribbon can be minimized to hide its contents and display only the tab headers. To toggle this state, double-click a tab header or click the collapse/expand icon. When minimized, clicking a tab header temporarily expands the content.

The [isMinimized](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/#isminimized) property programmatically sets the Ribbon's minimized state. The `minimized` event is triggered when this state changes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/minimize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/minimize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/minimize-cs1" %}

## Show or hide the layout switcher

The [hideLayoutSwitcher](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/#hidelayoutswitcher) property shows or hides the layout switcher button. By default, this property is `false`, and the button is visible.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/hidelayoutswitcher-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/hidelayoutswitcher-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/hidelayoutswitcher-cs1" %}
