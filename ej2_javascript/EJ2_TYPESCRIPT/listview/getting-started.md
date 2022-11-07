---
title: "Syncfusion JavaScript ListView Getting Started"
component: "ListView"
description: "This section helps to learn how to create the JavaScript listview control with its basic usage in step-by-step procedure."
---

# Getting Started

The following section explains the required steps to build the simple ListView control with its basic usage in step-by-step procedure.

## Dependencies

Install the below required dependent packages to render the ListView control.

```javascript
|-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

## Set up your development environment

To get started with the ListView control, you can clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project, and install the packages by using the following commands.

```shell
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Add ListView to the project

Add the HTML `<div>` element for ListView control to your `index.html`.

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

        <!--style reference from app-->
        <link href="/styles/styles.css" rel="stylesheet" />

        <!--system js reference and configuration-->
        <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
        <script src="system.config.js" type="text/javascript"></script>
    </head>

    <body>
        <div id="container">
            <!--element which is going to render-->
            <div id='element'></div>
        </div>
    </body>

</html>
```

Import the ListView control into your `app.ts` and append it to the `#element`.

`[src/app/app.ts]`

```typescript

import { ListView } from '@syncfusion/ej2-lists';

//Initialize ListView control
let listviewInstance: ListView = new ListView();

//Render initialized ListView
listviewInstance.appendTo("#element");

```

## Bind data source

Populate the data in ListView by using the dataSource property. Here, an array of JSON values are passed to the ListView control.

`[src/app/app.ts]`

```typescript

import { ListView } from '@syncfusion/ej2-lists';

//define the array of JSON
let arts: { [key: string]: string }[] = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: arts
});

//Render initialized ListView
listviewInstance.appendTo("#element");

```

## Run the application

Use the `npm run start` command to run the application in the browser.

```cmd
npm run start
```

The following example shows a basic ListView.

{% tab template="listview/getting-started", isDefaultActive = "true", sourceFiles="index.ts,index.html", es5Template="basic-template" %}

```typescript

import { ListView } from '@syncfusion/ej2-lists';

//define the array of JSON
let arts: { [key: string]: string }[] = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: arts
});

//Render initialized ListView
listviewInstance.appendTo("#element");

```

{% endtab %}

## See Also

[Data Binding Types](./data-binding/)

[ListView customization](./customizing-templates/)

[Virtualization](./virtualization/)