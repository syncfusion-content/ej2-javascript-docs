---
layout: post
title: Getting started with ##Platform_Name## Splitter control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Splitter control

The following section explains the required steps to build the splitter control with step-by-step procedure.

## Dependencies

The following list of dependencies required to use the splitter control in your application:

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base

```

## Set up of the development environment

To get started with the splitter control, you have to clone the Essential JS 2 [`quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project and install the npm packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common
settings (`src/styles/styles.css`, `system.config.js` ) to start
all the Essential JS 2 components.

## Configuring system JS

> The [project](https://github.com/syncfusion/ej2-quickstart.git) is configured with all the EJ2 dependencies. For better understanding, remove common settings (src/styles/styles.css, system.config.js ) to get started with the splitter control alone.

[Syncfusion splitter packages](#dependencies) have to be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',
        //Syncfusion packages mapping
         typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Configure style sheet

The splitter CSS files are available in the `ej2-layouts` package folder.
This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls.
> This web tool is useful to combine the required control scripts and styles in a single file.

## Adding splitter to the project

The splitter can be initialized through div tag with child elements. Add the div element with the id attribute `#splitter` inside the body tag in your `index.html`.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 splitter control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div id='container'>
        <!--element which is render as splitter-->
        <div id="splitter">
            <!--list of splitter panes-->
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

</body>

</html>
```

Now, import the  splitter control to your `app.ts` and initialize it to the element `#splitter` as follows.

`[src/app/app.ts]`

```ts

import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize Splitter control
let splitObject: Splitter = new Splitter({
    height: '250px',
    width: '600px'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

```

## Load content to the pane

You can load the pane contents in either HTML element or string types using [content](../api/splitter/panePropertiesModel/#content) property.

For detailed information, refer to the [pane content](./pane-content/) section.

```ts

import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize splitter control
let splitObj: Splitter = new Splitter({
    paneSettings: [
        // Content for Pane 1
        { content:'Left Pane' },

        // Content for Pane 2
        { content:'Middle Pane' },

        // Content for Pane 3
        { content:'Right Pane' }
    ],
    height: '250px'
});

// Render initialized splitter
splitObj.appendTo('#splitter');

```

## Run the application

After completing the configuration to render the splitter, run the following command to display
the output in your default browser.

```
npm run start
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs2" %}

## See Also

* [Resizable split panes](./resizing/)
* [Collapsible panes](./expand-and-collapse/)
* [Construct different layouts using Splitter](./different-layouts/)