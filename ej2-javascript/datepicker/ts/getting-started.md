---
layout: post
title: Getting started with ##Platform_Name## Datepicker control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Datepicker control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Datepicker control

This section briefly explains how to create a simple [JavaScript DatePicker](https://www.syncfusion.com/javascript-ui-controls/js-datepicker) component and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies is required to use DatePicker component in your application.

```javascript
|-- @syncfusion/ej2-calendars
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
  |-- @syncfusion/ej2-lists
  |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls provide built-in themes,  which are available from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages). Additionally, themes can be loaded via CDN or customized using the [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

The quickstart application is preconfigured to use the `Fluent2` theme. To install the [Fluent2](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-fluent2-theme --save

{% endhighlight %}
{% endtabs %}

The required styles are imported in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight bash tabtitle="styles.css" %}

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/fluent2.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add DatePicker to the application

Add the HTML input element for DatePicker into your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 DatePicker component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div style="margin: 50px;">
        <!--element which is going to render the DatePicker-->
        <input id="element"/>
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Now import the  DatePicker component into your `app.ts` and append it to `#element`
`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { DatePicker } from '@syncfusion/ej2-calendars';

// initialize datepicker component
let datepickerObject: DatePicker = new DatePicker();
// render initialized datepicker
datepickerObject.appendTo('#element');

{% endhighlight %}
{% endtabs %}

## Run the application

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The below example shows a basic DatePicker.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs13" %}

## Setting the value, min and max dates

The following example demonstrates how to set the value, min and max dates on initializing the DatePicker. Here you can able to select a date within a range from 9th to 15th.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs14" %}

## See Also

* [Change the format of selected date](./date-format)
* [Render DatePicker with specific culture](./globalization)
* [How to change the initial view of the DatePicker](./date-views)
* [How to achieve validation with DatePicker](./how-to/client-side-validation)

N> You can also explore our [JavaScript DatePicker example](https://ej2.syncfusion.com/demos/#/bootstrap5/datepicker/default.html) that shows you how to render the DatePicker in JavaScript.