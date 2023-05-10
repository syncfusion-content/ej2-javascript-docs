---
layout: post
title: Getting started with ##Platform_Name## Datetimepicker control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Datetimepicker control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Datetimepicker control

This section briefly explains about how to create and configure a simple DateTimePicker
component.

## Dependencies

The following list of dependencies are required to use DateTimePicker component in your application.

```javascript
|-- @syncfusion/ej2-calendars
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
  |-- @syncfusion/ej2-lists
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Set up your development environment

To start the DateTimePicker component, clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart.git) application, and
install the packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The [application](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with all the EJ2 dependencies. For better understanding, remove common settings (`src/styles/styles.css`, `system.config.js` ) to get started with the DateTimePicker component.

* Refer to the [DateTimePicker component dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding Style sheet to the Application

To render the DateTimePicker component, need to import DateTimePicker and its dependent component's styles as given below in `style.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
```

> If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add DateTimePicker to the application

Add the HTML input element with an ID attribute as element for DateTimePicker to your `index.html` file.

`[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 DateTimePicker component</title>
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
    <div style="margin: 50px;">
        <!--element which is going to render the DateTimePicker-->
        <input id="element"/>
    </div>

</body>

</html>
```

Import the  DateTimePicker component to your `app.ts` and append it to the `#element`
`[src/app/app.ts]`.

```ts

import { DateTimePicker } from '@syncfusion/ej2-calendars';

// initialize datetimepicker component
let datetimepicker: DateTimePicker = new DateTimePicker();
datetimepicker.appendTo('#element');

```

## Run the application

Use the `npm run start` command to run the application in the browser.

```
npm run start
```

The following example shows a basic DateTimePicker.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs10" %}

## Setting the min and max

The minimum and maximum date time can be defined with the help of `min` and `max` property. The following example demonstrates to set the `min` and `max` on initializing the DateTimePicker.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs11" %}
> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.

## See Also

* [Render DateTimePicker with specific culture](./globalization)
