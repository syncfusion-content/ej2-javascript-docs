---
layout: post
title: Getting started with ##Platform_Name## Stock Chart control | Syncfusion
description:  Check out and learn about Getting started with ##Platform_Name## Stock Chart control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stock Chart 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion® JavaScript (ES5) Stock Chart Control

Build your first Syncfusion JavaScript (ES5) application with a simple Stock Chart control in just a few minutes. This quickstart guides you through creating a minimal, runnable HTML page that loads the Syncfusion EJ2 (ES5) Stock Chart from the CDN, initializes it with sample data, and renders an interactive chart.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/javascript/documentation/ai-coding-assistant/overview)

## Prerequisites

* [Visual Studio Code](https://code.visualstudio.com) (or any text editor)
* A web browser to view the result

## Quick Setup

### Step 1: Create Folder and HTML file

* Create a folder named `quickstart` in your desired directory
* Inside the `quickstart` folder, create a new file named `index.html`

### Step 2: Add Syncfusion<sup style="font-size:70%">&reg;</sup> CDN Resources

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on [npmjs.com](https://www.npmjs.com/~syncfusionorg). You can include all Syncfusion<sup style="font-size:70%">&reg;</sup> controls in a single bundled CDN package or use individual package CDN links.

**Option 1: Using Common CDN Bundle (Recommended)**

Include a single CDN link that contains all Syncfusion JavaScript controls:

```
https://cdn.syncfusion.com/ej2/33.2.3/dist/ej2.min.js
```

**Option 2: Using Individual CDN Packages**

Include the following CSS and JavaScript links in the `<head>` section:

**Styles (CSS):**
```
https://cdn.syncfusion.com/ej2/33.2.3/tailwind3.css
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
```

**Scripts (JavaScript):**
```
https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-pdf-export/dist/global/ej2-pdf-export.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-file-utils/dist/global/ej2-file-utils.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-compression/dist/global/ej2-compression.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-svg-base/dist/global/ej2-svg-base.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/dist/global/ej2-navigations.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-calendars/dist/global/ej2-calendars.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js
https://cdn.syncfusion.com/ej2/33.2.3/ej2-charts/dist/global/ej2-charts.min.js
```

### Step 3: Add Syncfusion<sup style="font-size:70%">&reg;</sup> Stock Chart control to the application

Copy and paste the following complete code into your `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Syncfusion Stock Chart - Quick Start</title>

    <!-- Styles -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/tailwind3.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <!-- Scripts -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/dist/ej2.min.js" type="text/javascript"></script>
</head>
  
  <body>
    <h1>Syncfusion Stock Chart</h1>
    <div id="element"></div>
    
    <script>
      // Sample data
      var chartData = [
        { date: new Date('2012-04-02'), open: 85.9757, high: 90.6657, low: 85.7685, close: 90.5257, volume: 660187068 },
        { date: new Date('2012-04-09'), open: 89.4471, high: 92, low: 86.2157, close: 86.4614, volume: 912634864 },
        { date: new Date('2012-04-16'), open: 87.1514, high: 88.6071, low: 81.4885, close: 81.8543, volume: 1221746066 },
        { date: new Date('2012-04-23'), open: 81.5157, high: 88.2857, low: 79.2857, close: 86.1428, volume: 965935749 },
        { date: new Date('2012-04-30'), open: 85.4, high: 85.4857, low: 80.7385, close: 80.75, volume: 615249365 }
      ];
      
      // Create Stock Chart
      var chart = new ej.charts.StockChart({
        series: [
          {
            dataSource: chartData,
            xName: 'date',
            yName: 'close',
            type: 'Candle'
          }
        ],
        title: 'Stock Price',
        primaryXAxis: {
          valueType: 'DateTime'
        }
      });
      
      // Render Chart
      chart.appendTo('#element');
    </script>
  </body>
</html>
```

### Step 4: Open in Browser

Open the `quickstart/index.html` file in your web browser. You should see the Syncfusion Stock Chart control displaying the sample data.

## Output

The following screenshot shows the output of the Syncfusion Stock Chart quick start application:

![Syncfusion Stock Chart Quick Start Output](../../images/stockchart.png)
