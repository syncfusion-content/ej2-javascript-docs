# Getting Started

This section explains how to create a simple Chip and to configure the Chip control.

## Dependencies

The list of dependencies required to use the Chip control in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with the Chip control, you can clone the
[Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart) project using the following commands:

```cmd
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`)
to start all the Essential JS 2 controls.

## Add Chip to the project

Add the HTML `<div>` element for Chip control to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--Style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--System js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div>
        <!--Element which is going to render-->
        <div id="chip"></div>
    </div>

</body>

</html>
```

Then, import the Chip control in your `app.ts` file, and initialize it with the `#chip`.

`[src/app/app.ts]`

```typescript
import { ChipList } from '@syncfusion/ej2-buttons';

// Initialize and Render Chip control

 new ChipList({ chips: ["Janet Leverling"]}, '#chip');

```

## Run the application

Run the application in the browser using the following command:

```cmd
npm start
```

The following example shows a basic Chip control.

{% tab template= "chips/getting-started", sourceFiles="app.ts,index.html,styles.css",
es5Template="basic-types-template" isDefaultActive=true %}

```typescript
import { ChipList } from '@syncfusion/ej2-buttons';

// Initialize and Render Chip control

 new ChipList({ chips: ["Janet Leverling"]}, '#chip');
```

{% endtab %}
