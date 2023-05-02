---
layout: post
title: Items in ##Platform_Name## Speed dial control | Syncfusion
description: Learn here all about Items in Syncfusion ##Platform_Name## Speed dial control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Items in ##Platform_Name## Speed dial control

The JavaScript Speed Dial action items can be added by using [`items`](../api/speed-dial#items) property.

| Fields | Type | Description |
|------|------|-------------|
| [`text`](../api/speed-dial/speedDialItemModel/#text) | `string` | Defines the text content of SpeedDialItem. |
| [`iconCss`](../api/speed-dial/speedDialItemModel/#iconcss) | `string` | Defines one or more CSS classes to include an icon or image in Speed Dial item. |
| [`disabled`](../api/speed-dial/speedDialItemModel/#disabled) | `boolean` | Defines whether to enable or disable the SpeedDialItem. |
| [`id`](../api/speed-dial/speedDialItemModel/#id) | `string` | Defines a unique value for the SpeedDialItem which can be used to identify the item in event args. |
| [`title`](../api/speed-dial/speedDialItemModel/#title) | `string` | Defines the title of SpeedDialItem to display tooltip. |

## Icons in SpeedDial items

You can customize the icon and text of Speed Dial action items using [`iconCss`](../api/speed-dial/speedDialItemModel/#iconcss) and [`text`](../api/speed-dial/speedDialItemModel/#text) properties.

### Icon only

You can show icon only in SpeedDial items by setting [`iconCss`](../api/speed-dial/speedDialItemModel/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting [`title`](../api/speed-dial/speedDialItemModel/#title) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/items-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/items-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs6" %}

### Text only

You can show only text in Speed Dial items by setting [`text`](../api/speed-dial/speedDialItemModel/#text) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/items-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/items-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs7" %}

### Icon with text

You can show icon along with text in Speed Dial items by setting [`iconCss`](../api/speed-dial/speedDialItemModel/#iconcss) and [`text`](../api/speed-dial/speedDialItemModel/#text) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/items-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/items-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs8" %}

### Disabled

You can disable Speed Dial items by setting [`disabled`](../api/speed-dial/speedDialItemModel/#disabled) property as `true`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/items-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/items-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs9" %}

## Animation

The Speed Dial items can be animated during the opening and closing of the popup action items. You can customize the animation's `effect`, `delay`, and `duration` by setting [`animation`](../api/speed-dial#animation) property. By default, Speed Dial animates with a `fade` effect and supports all [`speeddialanimation`](../api/speed-dial/speedDialAnimationEffect/) effects.

Below example demonstrates the Speed Dial items with applied Zoom effect.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/items-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/items-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/items-cs10" %}

## Template

The Speed Dial supports to customize the action items and entire pop-up container by setting [`itemTemplate`](../api/speed-dial#itemtemplate) and [`popupTemplate`](../api/speed-dial#popuptemplate) properties. For more details about templates, check out the link [here](https://ej2.syncfusion.com/documentation/speed-dial/template/).
