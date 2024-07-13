---
layout: post
title: Docker image deployment in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Docker image deployment in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Docker deployment 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Docker Image Overview in ##Platform_Name## Spreadsheet control

The [**Syncfusion Spreadsheet (also known as Excel Viewer)**](https://www.syncfusion.com/javascript-ui-controls/js-spreadsheet) is a feature-rich control for organizing and analyzing data in a tabular format. It provides all the common Excel features, including data binding, selection, editing, formatting, resizing, sorting, filtering, importing, and exporting Excel documents.

This Docker image is the pre-defined Docker container for Syncfusion's Spreadsheet backend functionalities. This server-side Web API project targets ASP.NET Core 6.0.

You can deploy it quickly to your infrastructure. If you want to add new functionality or customize any existing functionalities, create your own Docker file by referencing the existing [Spreadsheet Docker project](https://github.com/SyncfusionExamples/Spreadsheet-Server-Docker).

The Spreadsheet is supported on the [JavaScript](https://www.syncfusion.com/javascript-ui-controls), [Angular](https://www.syncfusion.com/angular-ui-components), [React](https://www.syncfusion.com/react-ui-components), [Vue](https://www.syncfusion.com/vue-ui-components), [ASP.NET Core](https://www.syncfusion.com/aspnet-core-ui-controls), and [ASP.NET MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls) platforms.

## Prerequisites

Have [`Docker`](https://www.docker.com/products/container-runtime#/download) installed in your environment:

* On Windows, install [`Docker for Windows`](https://hub.docker.com/editions/community/docker-ce-desktop-windows).
* On macOS, install [`Docker for Mac`](https://docs.docker.com/desktop/install/mac-install/).

## How to deploy the Spreadsheet Docker Image

**Step 1:** Pull the spreadsheet-server image from Docker Hub.

```console
docker pull syncfusion/spreadsheet-server
```

**Step 2:** Create the `docker-compose.yml` file with the following code in your file system.

```yaml
version: '3.4' 

services:
  spreadsheet-server:
    image: syncfusion/spreadsheet-server:latest
    environment:
      # Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
    ports:
      - "6002:80"
```

**Note:** The Spreadsheet is a commercial product. It requires a valid [license key](https://help.syncfusion.com/common/essential-studio/licensing/licensing-faq/where-can-i-get-a-license-key) to use in a production environment. Please replace `YOUR_LICENSE_KEY` with the valid license key in the `docker-compose.yml` file.

**Step 3:** In a terminal tab, navigate to the directory where you've placed the `docker-compose.yml` file and execute the following:

```console
docker-compose up
```

Now the Spreadsheet server Docker instance runs on localhost with the provided port number `http://localhost:6002`. Open this link in a browser and navigate to the Spreadsheet Web API open and save service at `http://localhost:6002/api/spreadsheet/open` and `http://localhost:6002/api/spreadsheet/save`.

**Step 4:** Append the URLs of the Docker instance running services to the [`openUrl`](https://helpej2.syncfusion.com/javascript/documentation/api/spreadsheet/#openurl) property as `http://localhost:6002/api/spreadsheet/open` and the [`saveUrl`](https://helpej2.syncfusion.com/javascript/documentation/api/spreadsheet/#saveurl) property as `http://localhost:6002/api/spreadsheet/save` in the client-side Spreadsheet control. For more information on how to get started with the Spreadsheet control, refer to this [`getting started page.`](https://ej2.syncfusion.com/javascript/documentation/spreadsheet/getting-started)

{% if page.publishingplatform == "typescript" %}

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
</head>
<body>
    <!--Element which will render as Spreadsheet-->
    <div id="Spreadsheet"></div>
</body>
</html>
```

```ts

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
  openUrl: 'http://localhost:6002/api/spreadsheet/open',
  saveUrl: 'http://localhost:6002/api/spreadsheet/save'
});

// Render initialized Spreadsheet
spreadsheet.appendTo('#Spreadsheet');

```

{% elsif page.publishingplatform == "javascript" %}

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Essential JS 2 Spreadsheet</title>
    <!-- Essential JS 2 Spreadsheet's dependents material theme -->
    <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/splitbuttons/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/navigations/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css"/>
    <!-- Essential JS 2 Spreadsheet's material theme -->
    <link href="resources/spreadsheet/styles/material.css" rel="stylesheet" type="text/css"/>
    <!-- Essential JS 2 Spreadsheet's dependents script -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-excel-export.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-pdf-export.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-compression.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-file-utils.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
    <!-- Essential JS 2 Spreadsheet global script -->
    <script src="resources/scripts/ej2-spreadsheet.min.js" type="text/javascript"></script>
  </head>
  <body>
    <!-- Element which is going to render as Spreadsheet -->
    <div id='Spreadsheet'></div>
    <script>
      // Initialize Spreadsheet component.
      const spreadsheet = new ej.spreadsheet.Spreadsheet({
        openUrl: 'http://localhost:6002/api/spreadsheet/open',
        saveUrl: 'http://localhost:6002/api/spreadsheet/save'
      });
      // Render the initialized Spreadsheet component.
      spreadsheet.appendTo('#Spreadsheet');
    </script>
  </body>
</html>
```

{% endif %}

## How to configure different cultures using a Docker compose file

By default, the Spreadsheet Docker container is generated in the `en_US` culture. You can configure different cultures using the `LC_ALL`, `LANGUAGE`, and `LANG` environment variables in the `docker-compose.yml` file. These environment variables are replaced in the Docker file to set the specified culture for the Spreadsheet server.

```yaml
version: '3.4' 

services:
  spreadsheet-server:
    image: syncfusion/spreadsheet-server:latest
    environment:
      # Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
      # Specify the culture to configure for the Spreadsheet server
      LC_ALL: de_DE.UTF-8
      LANGUAGE: de_DE.UTF-8
      LANG: de_DE.UTF-8
    ports:
      - "6002:80"
```

Please refer to these getting started pages to create a Spreadsheet in [`Angular`](https://ej2.syncfusion.com/angular/documentation/spreadsheet/getting-started), [`React`](https://ej2.syncfusion.com/react/documentation/spreadsheet/getting-started), [`Vue`](https://ej2.syncfusion.com/vue/documentation/spreadsheet/getting-started), [`ASP.NET Core`](https://ej2.syncfusion.com/aspnetcore/documentation/spreadsheet/getting-started-core), and [`ASP.NET MVC`](https://ej2.syncfusion.com/aspnetmvc/documentation/spreadsheet/getting-started-mvc).