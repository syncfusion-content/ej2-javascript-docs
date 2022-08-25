# Axis Customization

You can customize axis value types and min and max values of the sparkline.

## Change value type of the sparkline

You can change the sparkline value type by setting the [`valueType`] property to [`Numeric`], [`Category`], or [`DateTime`].
<!-- markdownlint-disable MD036 -->

**DateTime**

You can assign date-time values to the sparkline by setting the [`valueType`] property to [`DateTime`].

{% tab template= "sparkline/axis-customization", sourceFiles="index.ts,index.html" , es5Template="es5DateTime" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { xDate: new Date(2018, 0, 1), x: 0, yval: 4 },
            { xDate: new Date(2018, 0, 2), x: 1, yval: 4.5 },
            { xDate: new Date(2018, 0, 3), x: 2, yval: 8 },
            { xDate: new Date(2018, 0, 4), x: 3, yval: 7 },
            { xDate: new Date(2018, 0, 5), x: 4, yval: 6 },
            { xDate: new Date(2018, 0, 8), x: 5, yval: 8 },
            { xDate: new Date(2018, 0, 9), x: 6, yval: 8 },
            { xDate: new Date(2018, 0, 10), x: 7, yval: 6.5 },
            { xDate: new Date(2018, 0, 11), x: 8, yval: 4 },
            { xDate: new Date(2018, 0, 12), x: 9, yval: 5.5 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'xDate', yName: 'yval',
    // Assign the "Column" as type of the sparkline
    type:'Column',
    // Assign the "DateTime" as value type to the sparkline
    valueType: 'DateTime'
}, '#element');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

**Category**

You can assign category values to the sparkline by setting [`valueType`] to [`Category`].

{% tab template= "sparkline/axis-customization", sourceFiles="index.ts,index.html" , es5Template="es5Category" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { x: 0, xval: 'Robert', yval: 60 },
            { x: 1, xval: 'Andrew', yval: 65 },
            { x: 2, xval: 'Suyama', yval: 70 },
            { x: 3, xval: 'Michael', yval: 80 },
            { x: 4, xval: 'Janet', yval: 55 },
            { x: 5, xval: 'Davolio', yval: 90 },
            { x: 6, xval: 'Fuller', yval: 75 },
            { x: 7, xval: 'Nancy', yval: 85 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'xval', yName: 'yval',
    // Assign the 'Column' as type of the sparkline
    type:'Column',
    // Assign the  "Category" as value type of the sparkline
    valueType: 'Category'
}, '#element');

```

{% endtab %}

**Numeric**

You can assign numeric values to the sparkline by setting [`valueType`] to [`Numeric`].

{% tab template= "sparkline/axis-customization", sourceFiles="index.ts,index.html" , es5Template="es5Numeric" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { x: 1, xval: 2010, yval: 190 },
            { x: 2, xval: 2011, yval: 165 },
            { x: 3, xval: 2012, yval: 158 },
            { x: 4, xval: 2013, yval: 175 },
            { x: 5, xval: 2014, yval: 200 },
            { x: 6, xval: 2015, yval: 180 },
            { x: 7, xval: 2016, yval: 210 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'x', yName: 'yval',
    // Assign the 'Column' as type of the sparkline
    type:'Column',
    // Assign the 'Numeric' as value type of the sparkline
    valueType: 'Numeric'
}, '#element');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

## Change min and max values of axis

You can change the min and max values of x-axis by setting the [`minX`] and [`maxX`] values to the [`axisSettings`] property. You can also change the min and max values of y-axis by setting the [`minY`] and [`maxY`] values to the [`axisSettings`] property.

{% tab template= "sparkline/axis-customization", sourceFiles="index.ts,index.html" , es5Template="es5MinMax" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 30 },
            { x: 4, yval: 50 },
            { x: 5, yval: 40 },
            { x: 6, yval: 20 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 40 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'x', yName: 'yval',
    // Set min and max values to the y-axis of sparkline
    axisSettings: {
            minY: 0, maxY: 150
    },
    // Assign the 'Column' as type of the sparkline
    type:'Column',
    // Assign the 'Numeric' as value type of the sparkline
    valueType: 'Numeric'
}, '#element');

```

{% endtab %}

## Change value of axis

You can set horizontal axis line value of the sparkline by setting [`value`] to the [`axisSettings`] property. The following code example shows this.

{% tab template= "sparkline/axis-customization", sourceFiles="index.ts,index.html" , es5Template="es5Value" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 30 },
            { x: 4, yval: 50 },
            { x: 5, yval: 40 },
            { x: 6, yval: 20 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 40 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'x', yName: 'yval',
    // Set the value to horizontal axis of sparkline
    axisSettings: {
          value: 25
    },
    // Assign the 'Column' as type of the sparkline
    type:'Column',
    // Assign the 'Numeric' as value type of the sparkline
    valueType: 'Numeric'
}, '#element');

```

{% endtab %}

## Axis line customization

Axis of the sparkline can be collapsed using the [`visible`] property in [`lineSettings`]; this is not applicable for win-loss. You can customize the [`color`], [`width`], [`opacity`], and [`dashArray`] of axis line.

{% tab template= "sparkline/axis-customization", sourceFiles="index.ts,index.html" , es5Template="es5LineCustomization" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 30 },
            { x: 4, yval: 50 },
            { x: 5, yval: 40 },
            { x: 6, yval: 20 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 40 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'x', yName: 'yval',
    // Set the value to horizontal axis
    axisSettings: {
    // To configure axis line settings
         lineSettings: {
            visible: true,
            color: "#ff14ae",
            dashArray:5
            }
    },
    // Assign the value type as 'Numeric' to the sparkline
    valueType: 'Numeric'
}, '#element');

```

{% endtab %}
