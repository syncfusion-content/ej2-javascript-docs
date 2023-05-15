---
layout: post
title: Getting started with ##Platform_Name## Range slider control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Range slider control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Range slider control

The following section explains the required steps to build the Slider control with its basic
usage in step-by-step procedure.

## Dependencies

The following list of dependencies are required to use the Slider control in your application.

```javascript

|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons

```

## Set up your development environment

To get started with Slider control, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart.git) project, and
install the packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with the common settings (`src/styles/index.css`, `system.config.js`) to start with all Essential JS 2 controls.

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder. This can be referenced in your `[src/styles/index.css]` using the following code.

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
```

## Adding Slider to the project

Add the div element with the id attribute `#slider` inside the body tag in your `index.html`.

`[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Slider control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/index.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div>
        <div class='wrap'>
            <!--element which is going to render the Slider -->
             <div id="slider"></div>
        </div>
    </div>
</body>

<style>
.wrap {
  height: 260px;
  margin: 0 auto;
  padding: 30px 10px;
  width: 260px;
}
</style>

</html>

```

Import the  Slider control into your `app.ts` and append it to `#slider`
`[src/app/app.ts]`

```ts

import { Slider } from '@syncfusion/ej2-inputs';

// Initialization of Slider control
let slider: Slider = new Slider();

// Render initialized Slider
slider.appendTo('#slider');

```

## Run the application

The `Essential JS 2 quickstart` application project is configured to compile and run the application in browser. Use the following command to run the application.

```
npm start
```

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs5/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs5/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/slider/getting-started-cs5" %}

## See Also

[Slider Types](./types/)

[Slider Formatting](./format/)

[Orientation Slider](./orientation/)

[Ticks in Slider](./ticks/)

[Tooltip in Slider](./tooltip/)