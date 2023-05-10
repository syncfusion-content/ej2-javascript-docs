---
layout: post
title: Positions in ##Platform_Name## Speed dial control | Syncfusion
description: Learn here all about Positions in Syncfusion ##Platform_Name## Speed dial control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Positions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Positions in ##Platform_Name## Speed dial control

The Speed dial control can be positioned anywhere on the [`target`](../api/speed-dial#target) using the [`position`](../api/speed-dial#position) property. If the `target` is not defined, then Speed Dial is positioned based on the browser viewport.

The position values of Speed Dial are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/linear-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/linear-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/linear-cs2" %}

## Opens items on hover

You can open the Speed Dial action items on mouse hover by setting the [`opensOnHover`](../api/speed-dial#opensonhover) property.

```js
// Initialize action items
var items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    opensOnHover: true,
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speedDial');
```

## Programmatically show/hide SpeedDial items

You can open/close the Speed Dial action items programmatically using [`show`](../api/speed-dial#show) and [`hide`](../api/speed-dial#hide) methods.

Below example demonstrates open/close action items on button click.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/positions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/positions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/positions-cs1" %}

## Programmatically refresh the position

You can refresh the position of the Speed Dial using [`refreshPosition`](../api/speed-dial/#refreshposition) method when the `target`position is changed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/refresh-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/refresh-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/refresh-cs1" %}