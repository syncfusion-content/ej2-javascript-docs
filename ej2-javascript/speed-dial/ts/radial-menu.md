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

The JavaScript Speed Dial action items can be displayed in a circular patter like a radial menu by setting [`mode`](../api/speed-dial/#mode) property. You can customize the `direction`, `startAngle`, `endAngle` and `offset` by setting [`radialSettings`](../api/speed-dial#radialsettings) property.

## Radial menu direction

You can open the action items in either clockwise or anticlockwise by setting [`direction`](../api/speed-dial/radialSettingsModel/#direction) property. The default value is [`Auto`](../api/speed-dial/radialDirection/) where the action items are displayed based on the `position` property of the Speed Dial.

```ts
import { SpeedDial, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control in anticlockwise direction
let radialSettings: RadialSettingsModel = { direction: 'AntiClockwise' };

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');
```

## Radial menu start and end angle

You can modify the start and end angle of action items by setting [`startAngle`](../api/speed-dial/radialSettingsModel/#startangle) and [`endAngle`](../api/speed-dial/radialSettingsModel/#endangle) properties. If the angle is not defined, the action items are displayed based on the `position` property of the Speed Dial.

```ts
import { SpeedDial, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
];

// Initialize radial direction with start and end angles
let radialSettings: RadialSettingsModel = { direction: 'AntiClockwise', startAngle: 180, endAngle: 360 };

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    position: 'MiddleCenter',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');
```

## Offset

You can modify the offset distance between action items and Speed Dial button using [`offset`](../api/speed-dial/radialSettingsModel/#offset) property.

```ts
import { SpeedDial, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize radial direction with offset
let radialSettings: RadialSettingsModel = { offset: '80px' };

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');
```

Below example demonstrates the radial menu settings of the Speed Dial.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/radial-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/radial-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/speed-dial/radial-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs2" %}