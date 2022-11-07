---
title: "Pointers in EJ2 Linear Gauge component | Syncfusion"

component: "Linear Gauge"

description: "Learn here all about the Pointers feature of Syncfusion EJ2 Linear Gauge component and more."
---

# Pointers in EJ2 Linear Gauge

Pointers are used to indicate values on an axis. The value of the pointer can be modified using the [`value`](../api/linear-gauge/pointerModel/#value) property in [`pointers`](../api/linear-gauge/axisModel/#pointers).

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5Pointer" %}

```typescript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 80
        }]
    }]
}, '#element');

```

{% endtab %}

## Types of pointer

The Linear Gauge supports the following types of pointers:

* Bar
* Marker

The type of pointer can be modified by using the [`type`](../api/linear-gauge/pointerModel/#type) property in [`pointers`](../api/linear-gauge/axisModel/#pointers).

### Marker pointer

A marker pointer is a shape that can be used to mark the pointer value in the Linear Gauge.

<b>Types of marker shapes</b>

By default, the marker shape for the pointer is **InvertedTriangle**. To change the shape of the pointer, use the [`markerType`](../api/linear-gauge/pointerModel/#markertype) property in [`pointers`](../api/linear-gauge/axisModel/#pointers). The following marker types are available in Linear Gauge.

* Circle
* Rectangle
* Triangle
* InvertedTriangle
* Diamond
* Image

An image can be rendered instead of rendering a shape as a pointer. It can be achieved by setting the [`markerType`](../api/linear-gauge/pointerModel/#markertype) property to **Image** and setting the source URL of image to [`imageUrl`](../api/linear-gauge/pointerModel/#imageurl) property in [`pointers`](../api/linear-gauge/axisModel/#pointers).

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5MarkerPointer" %}

```typescript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 80,
            type: 'Marker',
            markerType: 'Circle'
        }]
    }]
}, '#element');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

**Marker Pointer Customization**

The marker pointer can be customized using the following properties.

* [`height`](../api/linear-gauge/pointerModel/#height) - To set the height of the pointer.
* [`position`](../api/linear-gauge/pointerModel/#position) - The position of the pointer can be changed by setting the value as **Inside**, **Outside**, **Cross**, or **Auto**.
* [`width`](../api/linear-gauge/pointerModel/#width) - To set the width of the pointer.
* [`color`](../api/linear-gauge/pointerModel/#color) - To set the color of the pointer.
* [`placement`](../api/linear-gauge/pointerModel/#placement) - To place the pointer in the specified position. By default, the pointer is placed **Far** from the axis. To change the placement, set the [`placement`](../api/linear-gauge/pointerModel/#placement) property as **Near**, **Center**, or **None**.
* [`offset`](../api/linear-gauge/pointer/#offset) - To place the pointer with specified distance from the axis.
* [`opacity`](../api/linear-gauge/pointerModel/#opacity) - To set the opacity of the pointer.
* [`animationDuration`](../api/linear-gauge/pointerModel/#animationduration) - To specify the duration of the animation in pointer.
* [`border`](../api/linear-gauge/pointerModel/#border) - To set the color and width for the border of the pointer.

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5MarkerPointerCustom" %}

```typescript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 80,
            markerType: 'Circle',
            height: 15,
            width: 15,
            color: '#cd41f4'
        }]
    }]
}, '#element');

```

{% endtab %}

### Bar Pointer

The bar pointer is used to track the axis value. The bar pointer starts from the beginning of the gauge and ends at the pointer value. To enable bar pointer set the [`type`](../api/linear-gauge/pointerModel/#type) property property in [`pointer`](../api/linear-gauge/axisModel/#pointers) as **Bar**.

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5BarPointer" %}

```typescript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 60,
            type: 'Bar'
        }]
    }]
}, '#element');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

**Bar pointer customization**

The bar pointer can be customized using following properties.

* [`width`](../api/linear-gauge/pointerModel/#width) - To set the thickness of the bar pointer.
* [`color`](../api/linear-gauge/pointerModel/#color) - To set the color of the bar pointer.
* [`offset`](../api/linear-gauge/pointerModel/#offset) - To place the bar pointer with the specified distance from it's default position.
* [`opacity`](../api/linear-gauge/pointerModel/#opacity) - To set the opacity of the bar pointer.
* [`roundedCornerRadius`](../api/linear-gauge/pointerModel/#roundedcornerradius) - To set the corner radius for the bar pointer.
* [`border`](../api/linear-gauge/pointerModel/#border) - To set the color and width for the border of the pointer.
* [`animationDuration`](../api/linear-gauge/pointerModel/#animationduration) - To set the duration of the animation in bar pointer.

>Note: The placement property is not applicable for the bar pointer.

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5BarPointerCustom" %}

```typescript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 60,
            type: 'Bar',
            width: 20,
            color: '#f44141'
        }]
    }]
}, '#element');

```

{% endtab %}

## Multiple pointers

Multiple pointers can be added to the Linear Gauge by adding multiple [`pointer`](../api/linear-gauge/pointerModel/) objects in the [`pointers`](../api/linear-gauge/axisModel/#pointers) and customization for the pointers can be done with the [`pointer`](../api/linear-gauge/pointerModel/) object.

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5MultiplePointers" %}

```typescript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [
            {
                value: 80
            },
            {
                value: 60,
                markerType: 'Circle'
            },
            {
                value: 30,
                markerType: 'Diamond'
            }
            ]
        }]
}, '#element');

```

{% endtab %}

## Pointer animation

Pointer is animated on loading the gauge. This can be handled using the [`animationDuration`](../api/linear-gauge/pointerModel/#animationduration) property. The duration of the animation can be specified in milliseconds.

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5PointerAnimation" %}

```typescript
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
    axes: [{
        pointers: [{
            value: 60,
            animationDuration: 1000
        }]
    }]
}, '#element');

```

{% endtab %}

## Gradient Color

Gradient support allows the addition of multiple colors in the pointers of the Linear Gauge. The following gradient types are supported in the Linear Gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [`startValue`](../api/linear-gauge/linearGradient/#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](../api/linear-gauge/linearGradient/#endvalue) property. The color stop values such as [`color`](../api/linear-gauge/colorStopModel/#color), [`opacity`](../api/linear-gauge/colorStopModel/#opacity), and [`offset`](../api/linear-gauge/colorStopModel/#offset) are set using [`colorStop`](../api/linear-gauge/linearGradient/#colorstop) property. The linear gradient can be rendered for the pointer in the Linear Gauge by using the below example.

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5LinearGradient" %}

```typescript
import { LinearGauge, Gradient } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Gradient);
let gauge: LinearGauge = new LinearGauge({
    orientation: 'Horizontal',
    container: {
        width: 30, offset: 30
    },
    axes: [{
        line: { width: 0 },
        majorTicks: { height: 0, interval: 25 },
        minorTicks: { height: 0 },
        labelStyle: {
            font: { color: '#424242',
            }, offset: 55
        },
        pointers: [{
            value: 80, height: 25,
            width: 35, placement: 'Near',
            offset: -44, markerType: 'Triangle',
            color : '#f54ea2',
            linearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#fef3f9', offset: '0%', opacity: 1 },
                    { color: '#f54ea2', offset: '100%', opacity: 1 }]
            }
        }],
        ranges: [{
            start: 0, end: 80,
            startWidth: 30, endWidth: 30,
            color:  '#f54ea2', offset: 30,
        }]
    }]
}, '#element');

```

{% endtab %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](../api/linear-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](../api/linear-gauge/radialGradient/#outerposition) property. The color stop values such as [`color`](../api/linear-gauge/colorStopModel/#color), [`opacity`](../api/linear-gauge/colorStopModel/#opacity), and [`offset`](../api/linear-gauge/colorStopModel/#offset) are set using [`colorStop`](../api/linear-gauge/radialGradient/#colorstop) property. The radial gradient can be rendered for the pointer in the Linear Gauge by using the below example.

{% tab template= "linear-gauge/pointers", sourceFiles="index.ts,index.html", es5Template="es5RadialGradient" %}

```typescript
import { LinearGauge, Gradient } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Gradient);
let gauge: LinearGauge = new LinearGauge({
    orientation: 'Horizontal',
    container: {
        width: 30, offset: 30
    },
    axes: [{
        line: { width: 0 },
        majorTicks: { height: 0, interval: 25 },
        minorTicks: { height: 0 },
        labelStyle: {
            font: { color: '#424242',
            }, offset: 55
        },
        pointers: [{
            value: 80, height: 25,
            width: 35, placement: 'Near',
            offset: -44, markerType: 'Triangle',
            color : '#f54ea2',
            radialGradient: {
                radius: '60%',
                outerPosition: { x: '50%', y: '50%' },
                innerPosition: { x: '50%', y: '50%' },
                colorStop: [
                    { color: '#fff5f5', offset: '0%', opacity: 0.9 },
                    { color: '#f54ea2', offset: '100%', opacity: 0.8 }]
            }
        }],
        ranges: [{
            start: 0, end: 80,
            startWidth: 30, endWidth: 30,
            color:  '#f54ea2', offset: 30,
        }]
    }]
}, '#element');

```

{% endtab %}

> Note: If we set both gradients, only the linear gradient gets rendered. If we set the [`startValue`](../api/linear-gauge/linearGradient/#startvalue) and [`endValue`](../api/linear-gauge/linearGradient/#endvalue) of the [`linearGradient`](../api/linear-gauge/linearGradient/) as empty strings, then the radial gradient gets rendered in the pointer of the Linear Gauge.
