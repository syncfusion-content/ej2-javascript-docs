---
layout: post
title: Webforms with ##Platform_Name## Getting started control | Syncfusion
description:  Checkout and learn about Webforms with ##Platform_Name## Getting started control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Webforms 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion® JavaScript and ASP.NET Web Forms
This guide provides a comprehensive walkthrough for integrating Syncfusion JavaScript (ES5) controls into an ASP.NET Web Forms application using NuGet-based installation. It includes step-by-step instructions for project setup and dependency configuration, along with a minimal working example using the Grid component to validate the implementation.

## Prerequisites

To get started with the ASP.NET Web Forms application, ensure that the following software is installed on the machine.

* .NET Framework 4.8
* ASP.NET Web Forms
* Visual Studio 2022

## Create ASP.NET Web Forms application

1. Choose **File > New > Project...** in the Visual Studio menu bar.

    ![new project in aspnet web forms](images/new-mvc-project.png)

2. Select **ASP.NET Web Forms Site**, change the application name, and then click **OK**.

    ![aspnet web forms syncfusion project template](images/new-mvc-template.png)

### Configure Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) control in the Web Forms application

 1. Search the `Syncfusion.EJ2.JavaScript` keyword in the **Browse** tab and install the **Syncfusion.EJ2.JavaScript** in the application by using the NuGet Package Manager.

    ![javascript install nuget package](images/webforms-nuget-install.png)

    The Syncfusion JavaScript NuGet package will be included in the project after the installation process is completed.

 2. Open `~/Site.master` file and add the required styles and script references of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to the `<head>` element.

    ```html
    <head>
    <!-- Syncfusion CSS -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/material3.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/styles/material3.css" rel="stylesheet">
    <!-- Syncfusion JS -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js"></script>
    </head>
    ```

 3. Open the `~/Default.aspx` file, add the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript control to the `<div>` element, and initialize the Grid control inside the `<script>` element.

    ```html
    <div class="row">
    <h2>Syncfusion Javascript (ES5) Grid Component</h2>
    <div id="Grid"></div>
    
    <script>
        var data = [
            { Inventor: "Thomas Edison", NumberofPatentFamilies: 150, Country: "USA", Active: "Yes", Mainfieldsofinvention: "Electricity" },
            { Inventor: "Nikola Tesla", NumberofPatentFamilies: 100, Country: "Serbia", Active: "No", Mainfieldsofinvention: "Electrical" },
            { Inventor: "Alexander Bell", NumberofPatentFamilies: 50, Country: "UK", Active: "No", Mainfieldsofinvention: "Telecom" }
        ];
    
        // Grid
        var grid = new ej.grids.Grid({
            dataSource: data,
            columns: [
                { field: 'Inventor', headerText: 'Inventor Name' },
                { field: 'NumberofPatentFamilies', headerText: 'Patents' },
                { field: 'Country', headerText: 'Country' },
                { field: 'Active', headerText: 'Active' },
                { field: 'Mainfieldsofinvention', headerText: 'Field' }
            ],
        });
        grid.appendTo('#Grid');
    </script>
    </div>
    ```

4. Run the application. The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Grid control will render in the web browser.

    ![aspnet web forms grid control](images/webforms-grid.png)

## See More

* [Syncfusion Grid Documentation](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started): Detailed Grid features, API reference, and advanced examples.
* [Syncfusion NuGet Packages](https://www.nuget.org/packages/Syncfusion.EJ2.JavaScript): Use NuGet to add EJ2 packages to Visual Studio projects for offline and managed deployments.



