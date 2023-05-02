---
layout: post
title: Radial menu in ##Platform_Name## Speed dial control | Syncfusion
description: Learn here all about Radial menu in Syncfusion ##Platform_Name## Speed dial control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Radial menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Radial menu in ##Platform_Name## Speed dial control

The JavaScript(ES5) Speed Dial action items can be displayed in a circular patter like a radial menu by setting [`mode`](../api/speed-dial/#mode) property. You can customize the `direction`, `startAngle`, `endAngle` and `offset` by setting [`radialSettings`](../api/speed-dial#radialsettings) property.

## Radial menu direction

You can open the action items in either clockwise or anticlockwise by setting [`direction`](../api/speed-dial/radialSettingsModel/#direction) property. The default value is [`Auto`](../api/speed-dial/radialDirection/) where the action items are displayed based on the `position` property of the Speed Dial.

```js
// Initialize action items
var items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control in anticlockwise direction
var radialSettings = { direction: 'AntiClockwise' };

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speedDial');
```

## Radial menu start and end angle

You can modify the start and end angle of action items by setting [`startAngle`](../api/speed-dial/radialSettingsModel/#startangle) and [`endAngle`](../api/speed-dial/radialSettingsModel/#endangle) properties. If the angle is not defined, the action items are displayed based on the `position` property of the Speed Dial.

```js
// Initialize action items
var items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
];

// Initialize radial direction with start and end angles
var radialSettings = { direction: 'AntiClockwise', startAngle: 180, endAngle: 360 };

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    position: 'MiddleCenter',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speedDial');
```

## Offset

You can modify the offset distance between action items and Speed Dial button using [`offset`](../api/speed-dial/radialSettingsModel/#offset) property.

```js
// Initialize action items
var items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize radial direction with offset
var radialSettings = { offset: '80px' };

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speedDial');
```

Below example demonstrates the radial menu settings of the Speed Dial.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speed-dial/radial-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/radial-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs1" %}