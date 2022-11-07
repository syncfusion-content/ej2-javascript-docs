
# Getting Started

This section explains you the steps required to create a simple circular gauge and demonstrate the basic usage of the circular gauge control.

## Dependencies

Below is the list of minimum dependencies required to use the circular gauge.

```javascript
|-- @syncfusion/ej2-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
```

## Installation and Configuration

* To get started with Circular Gauge control, clone the Essential JS 2 quickstart project from [`GitHub`](https://github.com/syncfusion/ej2-quickstart.git) and install necessary packages by using the following commands.

```sh
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* Syncfusion Circular Gauge packages can be mapped in **system.config.js** configuration files.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-circulargauge": "syncfusion:ej2-circulargauge/dist/ej2-circulargauge.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`system.config.js` ) to start with all Essential JS 2 components.

## Add Circular Gauge control to the Project

The Essential JS2 Circular Gauge control can be added to the application. To get started, add the Circular Gauge control to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the Circular Gauge element in the **index.html** file using the following code.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Circular Gauge</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />
    <!--system js reference and configuration-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
     <!--container which is going to render the Circular gauge-->
     <div id='container'>
     </div>
</body>

</html>
```

Import the Circular Gauge control in the **app.ts** to initialize the Circular Gauge and append the Circular Gauge instance to the `#container`.

```javascript
import { CircularGauge } from '@syncfusion/ej2-circulargauge';

// initialize CircularGauge component
let gauge: CircularGauge = new CircularGauge();

// render initialized CircularGauge
gauge.appendTo('#container');
```

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```cmd
npm start
```

The below example shows a basic Circular Gauge control.

{% tab template= "circular-gauge/getting-started", sourceFiles="index.ts,index.html", es5Template="es5Default" %}

```typescript
import { CircularGauge } from '@syncfusion/ej2-circulargauge';

let gauge: CircularGauge = new CircularGauge();
gauge.appendTo('#element');
```

{% endtab %}

## Set Pointer Value

You can change the pointer value in the above sample using [`value`](../api/circular-gauge/pointer#value-number) property in [`pointers`](../api/circular-gauge/pointer).

{% tab template= "circular-gauge/getting-started", sourceFiles="index.ts,index.html", es5Template="es5PointeValue" %}

```typescript
import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    axes:[{
        pointers:[{
            value: 35
        }],
    }]
}, '#element');

```

{% endtab %}
