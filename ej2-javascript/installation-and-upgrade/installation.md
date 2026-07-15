---
layout: post
title: Installation in ##Platform_Name## Installation and upgrade control | Syncfusion
description: Learn here all about Installation in Syncfusion ##Platform_Name## Installation and upgrade control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Installation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Installation of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Controls

This guide explains how to install Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript UI components into an existing project using either the **npm CLI** or the **`package.json`** file.

**Prerequisites**

* [Node.js](https://nodejs.org/) and npm installed. npm is bundled with Node.js.
* An existing JavaScript / TypeScript project. (For framework-specific wrappers, see the corresponding control documentation.)
* Access to the npm registry (public, or your private registry if applicable).

## Install by Using the npm CLI

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on [npm](https://www.npmjs.com/search?q=scope:syncfusion). You can install the necessary packages from npm's install command. For example, the Grid package can be installed using the following command:

```bash
npm install @syncfusion/ej2-grids --save
```

For a list of available packages and the latest version, see [`@syncfusion/ej2-grids`](https://www.npmjs.com/package/@syncfusion/ej2-grids) on npm.

## Install by Using package.json

1. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) package references in the `dependencies` section of your project's `package.json` file:

    ```json
    {
      "dependencies": {
        "@syncfusion/ej2-grids": "^20.2.38",
        "@syncfusion/ej2-charts": "^20.2.38"
      }
    }
    ```

    > Replace `^20.2.38` with the version you need. For details on version ranges, see the [npm `package.json` documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies).

2. From the root of your project, run the following command to install all npm dependencies at once:

    ```bash
    npm install
    ```

    > For more information, see the [npm `package.json` documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

## Next Steps

After installing the package, you typically need to:

1. Import the required CSS for the theme. For example:

    ```css
    @import "@syncfusion/ej2-grids/styles/material.css";
    ```

2. Reference the required script and CSS files in your HTML. For example:

    ```html
    <link href="https://cdn.syncfusion.com/ej2/20.2.38/material.css" rel="stylesheet" />
    <script src="https://cdn.syncfusion.com/ej2/20.2.38/dist/ej2.min.js"></script>
    ```

3. Register the Syncfusion<sup style="font-size:70%">&reg;</sup> components you want to use. For example:

    ```javascript
    var grid = new ej.grids.Grid({
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120 },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
    ```

For component-specific configuration, theming, and usage examples, refer to the documentation of the individual Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript component you are using.

## Troubleshooting

| Issue | Possible Cause | Suggested Fix |
| --- | --- | --- |
| `npm install` reports a peer-dependency warning. | Installed package version does not match your project's framework version. | Use the package version that supports your framework, or upgrade the framework. |
| `package.json` shows the package version as `*` and `npm install` fails. | `*` is a placeholder, not a valid npm range. | Replace `*` with an explicit version such as `^20.2.38` or a specific version. |
| Script/CSS file reference returns 404. | The CDN version in the URL does not match an installed version. | Update the CDN URL to match the installed package version, or use a self-hosted copy. |
| Components do not render. | The script/CSS is not loaded, or the component is not registered. | Verify the script/CSS is included in the page, and the component is registered correctly. |

For additional help, see [Common Installation Errors](https://ej2.syncfusion.com/documentation/installation-and-upgrade/common-installation-errors).