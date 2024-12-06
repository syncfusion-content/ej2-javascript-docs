---
layout: post
title: Getting started with ##Platform_Name## Diagram control | Syncfusion®
description:  Checkout and learn about Getting started with ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Diagram control

This section explains how to create a simple Diagram component and configure its available functionalities in TypeScript, using Essential® JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

<!-- markdownlint-disable MD033 -->

## Dependencies

The following list of dependencies are required to use the `Diagram` component in your application.

```javascript
|-- @syncfusion/ej2-diagrams
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-splitbuttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion® JavaScript (Essential® JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

## Add Syncfusion® JavaScript packages

Syncfusion® JavaScript (Essential® JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion® JavaScript (Essential® JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion® CSS styles

To render the Diagram component, need to import diagram and its dependent component’s styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-diagrams/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";

{% endhighlight %}
{% endtabs %}


## Module Injection

The diagram component is divided into individual feature-wise modules. In order to use a particular feature, inject the required module. The following list describes the module names and their description.

* `BpmnDiagrams`: Inject this provider to add built-in BPMN shapes to diagrams.
* `ConnectorBridging`: Inject this provider to add bridges to connectors.
* `ConnectorEditing`: Inject this provider to edit the segments for connector.
* `ComplexHierarchicalTree`: Inject this provider to complex hierarchical tree like structure.
* `DataBinding`: Inject this provider to populate nodes from given data source.
* `DiagramContextMenu`: Inject this provider to manipulate context menu.
* `HierarchicalTree`: Inject this provider to use hierarchical tree like structure.
* `LayoutAnimation`: Inject this provider animation to layouts.
* `MindMap`: Inject this provider to use mind map.
* `PrintAndExport`: Inject this provider to print or export the objects.
* `RadialTree`: Inject this provider to use radial tree like structure.
* `Snapping`: Inject this provider to snap the objects.
* `SymmetricLayout`: Inject this provider to render layout in symmetrical method.
* `UndoRedo`: Inject this provider to revert and restore the changes.
* `Ej1Serialization` - Inject this provider to load ej1 diagram json in ej2 diagram.

These modules should be imported and injected into the Diagram component using `Diagram.Inject` method as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Diagram, HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, ConnectorEditing,Ej1Serialization } from '@syncfusion/ej2-diagrams';

Diagram.Inject(BpmnDiagrams, ConnectorBridging, ConnectorEditing, ComplexHierarchicalTree, DataBinding, DiagramContextMenu, HierarchicalTree, LayoutAnimation, MindMap, PrintAndExport, RadialTree, Snapping, SymmetricLayout, UndoRedo,Ej1Serialization);

{% endhighlight %}
{% endtabs %}

## Add diagram to the project

Add the HTML div element for the diagram into your `index.html`. `[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Diagram</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion®" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!--container which is going to render the Diagram-->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Now, import the diagram component into your `app.ts` to instantiate a diagram and append the diagram instance to the `#container`. `[src/app/app.ts]`

The following example shows a basic diagram.

```Typescript
 import { Diagram } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px'
});
diagram.appendTo('#element');

```

Now, the `npm run start` command is used to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

## Basic Diagram elements

* `Node`: Visualizes any graphical object using nodes, which can also be arranged and manipulated on a diagram page.
* `Connector`: Represents the relationship between two nodes. Three types of connectors provided as follows:

```

1) Orthogonal
2) Bezier
3) Straight

```
* `Port`: Acts as the connection points of node or connector and allows you to create connections with only specific points.
* `Annotation`: Shows additional information by adding text or labels on nodes and connectors.

## Flow Diagram

### Create and add node to the diagram

Create and add a `node` (JSON data) with specific position, size.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs2" %}
{% endif %}


### Apply shape and style to node

Syncfusion® diagram control provides support to render many built-in shapes in diagram.
Please refer to [`Shapes`](../api/diagram/shapes/) to know about built-in Shapes.

* The appearance of a node can be customized by changing its [`fill`](../api/diagram/shapeStyleModel/#fill-string) color, [`strokeColor`](../api/diagram/shapeStyleModel/#strokecolor-string), [`strokeWidth`](../api/diagram/shapeStyleModel/#strokewidth-number), [`borderColor`](../api/diagram/node/#borderColor-string), [`borderWidth`](../api/diagram/node/#borderWidth-number), [`strokeDashArray`](../api/diagram/shapeStyleModel/#strokeDashArray-number),  [`opacity`](../api/diagram/shapeStyleModel/#opacity-number), and [`shadow`](../api/diagram/shapeStyleModel/#shadow-number).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs12" %}
{% endif %}


### Add other flowchart nodes to the diagram

You can add multiple nodes with different shapes into diagram.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs14" %}
{% endif %}


### Connect flow chart nodes

Connect these nodes by adding a connector using the [`connectors`](../api/diagram/connectorModel/) property of diagram and refer the source and target end by using the [`sourceID`](../api/diagram/connectorModel/#sourceid) and [`targetID`](../api/diagram/connectorModel/#targetid) properties.
The required nodes and connectors can be added to form a complete flow diagram.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs4" %}
{% endif %}


Default values for all [`nodes`](../api/diagram/nodemodel/) and [`connectors`](../api/diagram/connectorModel/) can be set using the [`getNodeDefaults`](../api/diagram/#getnodedefaults) and [`getConnectorDefaults`](../api/diagram/#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.


## Automatic organization chart

In the 'Flow Diagram' section, how to create a diagram manually was discussed. This section explains how to create and position the diagram automatically.

### Create Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array whose, `Name` is used as an unique identifier and `ReportingPerson` is used to identify the person to whom an employee report to, in the organization.

```ts

//Initialize data source...
let data: object[] = [{Name: "Elizabeth", Role: "Director" },
{ Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
{ Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
{ Name: "Philip", ReportingPerson: "Christina", Role: "Lead" },
{ Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
{ Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
{ Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" }
];

```

### Map data source to diagram

You can configure the above "Employee Information" with diagram, so that the nodes and connectors are automatically generated using the mapping properties. The following code example show how `dataSourceSettings` is used to map ID and parent with property name identifiers for employee information.

```ts

//Initialize data source...

let data: object[] = [{Name: "Elizabeth", Role: "Director" },
{ Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
{ Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
{ Name: "Philip", ReportingPerson: "Christina", Role: "Lead" },
{ Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
{ Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
{ Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" }
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
//Initialize data source...
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px',
//Configure data source for diagram
    dataSourceSettings: {
        id: 'Name', parentId: 'ReportingPerson', dataManager: items
    }
});

```

### Rendering layout with Datasource

To create an organizational chart, the [`type`](../api/diagram/layout/) of layout should be set as an `OrganizationalChart`. The following code example shows how DataManager is used to generate Layout based on the DataSourceSettings of the Diagram.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs16" %}
{% endif %}

### Customize employee appearance

The following code examples indicate how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](../api/diagram/#setnodetemplate) is used to update each node based on employee data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs5" %}
{% endif %}

N> You can refer to our [JavaScript Diagram](https://www.syncfusion.com/javascript-ui-controls/js-diagram) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Diagram example](https://ej2.syncfusion.com/demos/#/bootstrap5/diagram/default-functionalities.html) to knows how to present and manipulate data.