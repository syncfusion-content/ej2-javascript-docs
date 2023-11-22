---
layout: post
title: Getting started with ##Platform_Name## Treemap control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Treemap control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Getting started in ##Platform_Name## Treemap control

This section explains the steps to create a simple TreeGrid and demonstrates the basic usage of the TreeGrid component using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of minimum dependencies are required to use the TreeMap control:

```javascript
|-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Add TreeMap control to the project

The Essential JS2 TreeMap control can be added to the application. To get started, add the TreeMap control to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the TreeMap element in the **index.html** file using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 TreeMap</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <!--container which is going to render the TreeMap-->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the TreeMap control in the `app.ts` to initialize the TreeMap.
`dataSource`: The data source for the TreeMap is set to the data array.
`weightValuePath`: It specifies the data property ("Sales") that determines the size of the TreeMap items.
`leafItemSettings`: This section defines the appearance and label settings for the leaf items (car companies), including the label path, border, and label style.
`levels`: The TreeMap is configured with grouping levels. In this case, it groups data by "Continent" and specifies the border settings.
`palette`: A custom color palette is defined to colorize the TreeMap items.
The TreeMap is rendered using treemap.appendTo('#container'). The TreeMap is displayed within an HTML element with the ID "container.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TreeMap } from '@syncfusion/ej2-treemap';

const data: Object[] = [
    { Continent: "China", Company: "Volkswagen", Sales: 3005994 },
    { Continent: "China", Company: "General Motors", Sales: 1230044 },
    { Continent: "China", Company: "Honda", Sales: 1197023 },
    { Continent: "United States", Company: "General Motors", Sales:3042775  },
    { Continent: "United States", Company: "Ford", Sales:2599193  },
    { Continent: "United States", Company: "Toyota", Sales:2449587  },
    { Continent: "Japan",Company: "Toyota", Sales:1527977  },
    { Continent: "Japan", Company: "Honda", Sales:706982 },
    { Continent: "Japan", Company: "Suzuki", Sales:623041  },
    { Continent: "Germany",Company: "Volkswagen", Sales:655977  },
    { Continent: "Germany", Company: "Mercedes", Sales:310845  },
    { Continent: "Germany", Company: "BMW", Sales:261931  },
    { Continent: "United Kingdom", Company: "Ford ", Sales:319442  },
    { Continent: "United Kingdom", Company: "Vauxhall", Sales: 251146 },
    { Continent: "United Kingdom", Company: "Volkswagen", Sales:206994  },
    { Continent: "India", Company: "Maruti Suzuki", Sales:1443654  },
    { Continent: "India", Company: "Hyundai", Sales:476241  },
    { Continent: "India", Company: "Mahindra", Sales:205041  },
    { Continent: "France", Company: "Renault", Sales:408183 },
    { Continent: "France", Company: "Peugeot", Sales:336242 },
    { Continent: "France", Company: "Citroen", Sales:194986  },
    { Continent: "Brazil", Company: "Flat Chrysler", Sales:368842  },
    { Continent: "Brazil", Company: "General Motors", Sales: 348351 },
    { Continent: "Brazil", Company: "Volkswagen", Sales: 245895 },
    { Continent: "Italy", Company: "Flat Chrysler", Sales:386260  },
    { Continent: "Italy", Company: "Volkswagen", Sales: 138984 },
    { Continent: "Italy", Company: "Ford", Sales: 125144 },
    { Continent: "Canada", Company: "Ford", Sales:305086},
    { Continent: "Canada", Company: "FCA", Sales:278011 },
    { Continent: "Canada", Company: "GM", Sales: 266884 }
];
// Initialize the tree map control
let treemap: TreeMap = new TreeMap({
    dataSource: data,
    weightValuePath: 'Sales',
    leafItemSettings: {
        labelPath: 'Company',
        border: { color: 'white', width: 0.5 },
        labelStyle: {
            fontFamily: 'Segoe UI'
        }
    },
    levels: [
        {
            groupPath: 'Continent', border: { color: 'white', width: 0.5 },
        }
    ],
    palette: ['#C33764', '#AB3566', '#993367', '#853169', '#742F6A', '#632D6C', '#532C6D', '#412A6F', '#312870', '#1D2671'],
});

// Render the initialized tree map
treemap.appendTo('#container');

{% endhighlight %}
{% endtabs %}

Since data source has not been bound to the tree map control, no items will be rendered. Only an empty SVG element is appended to the tree map container.

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

## Module injection

The tree map control is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `TreeMap.Inject()` method. Find the modules available in tree map and their descriptions are as follows:

* TreeMapHighlight - Inject this provider to use highlight feature.
* TreeMapSelection - Inject this provider to use selection feature.
* TreeMapLegend - Inject this provider to use legend feature.
* TreeMapTooltip - Inject this provider to use tooltip series.

In current application, the above basic tree map is modified to visualize international airport counts in South America.

In this demo, the tree map is rendered with labels only. So, you need not to import any modules.

## Render tree map

This section explains how to render the tree map control with data source.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs6" %}

Here, the tree map control is created with data source and set with the weightValuePath as count. You can customize the leaf level tree map items using the leafItemSettings. The properties such as fill, border, and labelPosition can be changed using the leafItemSettings.

## Apply color mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bound data source. Specify the field name from values that have to be compared for the item in the equalColorValuePath or rangeColorValuePath property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs7" %}

## Enable legend

Legend is enabled for the tree map control by setting the visible property to true in legendSettings object and injecting the `TreeMapLegend` module using the `TreeMap.Inject(TreeMapLegend)`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
   dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
        ],
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        },
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        leafItemSettings: {
            labelPath: 'State',
            colorMapping: [
                {
                    value: 25,
                    color: '#634D6F'
                },
                {
                    value: 12,
                    color: '#B34D6D'
                },
                {
                    value: 9,
                    color: '#557C5C'
                },
                {
                    value: 7,
                    color: '#44537F'
                },
                {
                    value: 6,
                    color: '#637392'
                },
                {
                    value: 3,
                    color: '#7C754D'
                },
                {
                    value: 2,
                    color: '#2E7A64'
                },
                {
                    value: 1,
                    color: '#95659A'
                },
            ]
        }
}, '#container');

{% endhighlight %}
{% endtabs %}

## Add labels

Labels are added to show additional information of the items in tree map. By default, the visibility of the label is set to true. This can be customized using the showLabels property in leafItemSettings.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
   dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
        ],
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        },
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        leafItemSettings: {
            showLabels: true,
            labelPath: 'State',
            labelPosition: 'Center',
            labelStyle: {
                color: 'white'
            },
            colorMapping: [
                {
                    value: 25,
                    color: '#634D6F'
                },
                {
                    value: 12,
                    color: '#B34D6D'
                },
                {
                    value: 9,
                    color: '#557C5C'
                },
                {
                    value: 7,
                    color: '#44537F'
                },
                {
                    value: 6,
                    color: '#637392'
                },
                {
                    value: 3,
                    color: '#7C754D'
                },
                {
                    value: 2,
                    color: '#2E7A64'
                },
                {
                    value: 1,
                    color: '#95659A'
                },
            ]
        }
}, '#container');

{% endhighlight %}
{% endtabs %}

## Enable tooltip

Tooltips are used when labels cannot display information due to space constraints. Tooltips can be enabled by setting the visible property to true in tooltipSettings object and injecting the `TreeMapTooltip` module using the `TreeMap.Inject(TreeMapTooltip)`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    tooltipSettings: {
            visible: true,
        },
        dataSource: [
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
            { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
            { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
        ],
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        },
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        leafItemSettings: {
            showLabels: true,
            labelPath: 'State',
            labelPosition: 'Center',
            labelStyle: {
                color: 'white'
            },
            colorMapping: [
                {
                    value: 25,
                    color: '#634D6F'
                },
                {
                    value: 12,
                    color: '#B34D6D'
                },
                {
                    value: 9,
                    color: '#557C5C'
                },
                {
                    value: 7,
                    color: '#44537F'
                },
                {
                    value: 6,
                    color: '#637392'
                },
                {
                    value: 3,
                    color: '#7C754D'
                },
                {
                    value: 2,
                    color: '#2E7A64'
                },
                {
                    value: 1,
                    color: '#95659A'
                },
            ]
        },
}, '#container');

{% endhighlight %}
{% endtabs %}
