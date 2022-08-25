# Sparkline Dimensions

## Size for container

Sparkline can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

```html
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tab template= "sparkline/sparkline-dimensions", sourceFiles="index.ts,index.html" , es5Template="es5Size" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
let sparkline: Sparkline = new Sparkline({
 dataSource: [
            { x: 0, xval: '2005', yval: 20090440 },
            { x: 1, xval: '2006', yval: 20264080 },
            { x: 2, xval: '2007', yval: 20434180 },
            { x: 3, xval: '2008', yval: 21007310 },
            { x: 4, xval: '2009', yval: 21262640 },
            { x: 5, xval: '2010', yval: 21515750 },
            { x: 6, xval: '2011', yval: 21766710 },
            { x: 7, xval: '2012', yval: 22015580 },
            { x: 8, xval: '2013', yval: 22262500 },
            { x: 9, xval: '2014', yval: 22507620 },
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'xval', yName: 'yval'
}, '#element');

```

{% endtab %}
<!-- markdownlint-disable MD036 -->

## Size for sparkline

<!-- markdownlint-disable MD036 -->

You can also set the size for sparkline directly using the [`width`](../../api/sparkline/#width-string) and [`height`](../../api/sparkline/#height-string) properties.

**In pixel**

You can set the size for sparkline in pixel as demonstrated in the following code.

{% tab template= "sparkline/sparkline-dimensions", sourceFiles="index.ts,index.html" , es5Template="es5SizeInPixel" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
 let sparkline: Sparkline = new Sparkline({
        width: '350', height: '150',
        dataSource: [
                   { x: 0, xval: '2005', yval: 20090440 },
                   { x: 1, xval: '2006', yval: 20264080 },
                   { x: 2, xval: '2007', yval: 20434180 },
                   { x: 3, xval: '2008', yval: 21007310 },
                   { x: 4, xval: '2009', yval: 21262640 },
                   { x: 5, xval: '2010', yval: 21515750 },
                   { x: 6, xval: '2011', yval: 21766710 },
                   { x: 7, xval: '2012', yval: 22015580 },
                   { x: 8, xval: '2013', yval: 22262500 },
                   { x: 9, xval: '2014', yval: 22507620 },
               ],
           // Assign the dataSource values to series of sparkline 'xName and yName'
           xName: 'xval', yName: 'yval'
       }, '#element');
```

{% endtab %}

**In percentage**

By setting values in percentage, sparkline gets its dimension with respect to its container. For example, when the height is set to ‘50%’, sparkline is rendered to half of its container height.

{% tab template= "sparkline/sparkline-dimensions", sourceFiles="index.ts,index.html" , es5Template="es5SizeInPercentage" %}

```typescript

import { Sparkline } from '@syncfusion/ej2-charts';
 let sparkline: Sparkline = new Sparkline({
        width: '80%', height: '50%',
        dataSource: [
                   { x: 0, xval: '2005', yval: 20090440 },
                   { x: 1, xval: '2006', yval: 20264080 },
                   { x: 2, xval: '2007', yval: 20434180 },
                   { x: 3, xval: '2008', yval: 21007310 },
                   { x: 4, xval: '2009', yval: 21262640 },
                   { x: 5, xval: '2010', yval: 21515750 },
                   { x: 6, xval: '2011', yval: 21766710 },
                   { x: 7, xval: '2012', yval: 22015580 },
                   { x: 8, xval: '2013', yval: 22262500 },
                   { x: 9, xval: '2014', yval: 22507620 },
               ],
           // Assign the dataSource values to series of sparkline 'xName and yName'
           xName: 'xval', yName: 'yval'
       }, '#element');
```

{% endtab %}
