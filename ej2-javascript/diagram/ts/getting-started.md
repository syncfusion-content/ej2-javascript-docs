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

This guide shows how to create a basic Diagram component and configure key features in TypeScript using the Essential® JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is configured with `webpack.config.js` and the latest [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires Node `v14.15.0` or later. For more about webpack, see the [official documentation](https://webpack.js.org/guides/getting-started/).

<!-- markdownlint-disable MD033 -->

## Dependencies

The following packages are required to use the `Diagram` component in your application.

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

## Set up the development environment

Open a command prompt in your working directory and clone the Syncfusion® JavaScript (Essential® JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-):

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning, navigate to the `ej2-quickstart` folder:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion® JavaScript packages

Syncfusion® JavaScript (Essential® JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion® JavaScript (Essential® JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart is preconfigured with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) dependency in `~/package.json`. Install the npm packages:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import Syncfusion® CSS styles

To render the Diagram component, import the Diagram and dependent component styles in `~/src/styles/styles.css`:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-diagrams/styles/tailwind3.css';
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}


## Module injection

The Diagram component is modular. Inject feature modules to enable specific capabilities. The following modules are commonly used:

* `BpmnDiagrams`: Adds built-in BPMN shapes.
* `ConnectorBridging`: Draws bridges where connectors cross.
* `ConnectorEditing`: Enables editing of connector segments.
* `ComplexHierarchicalTree`: Renders complex hierarchical tree layouts.
* `DataBinding`: Populates nodes from a data source.
* `DiagramContextMenu`: Enables a context menu.
* `HierarchicalTree`: Renders hierarchical tree layouts.
* `LayoutAnimation`: Animates layout updates.
* `MindMap`: Enables mind map layouts.
* `PrintAndExport`: Prints or exports diagram objects.
* `RadialTree`: Renders radial tree layouts.
* `Snapping`: Snaps objects to alignment guides.
* `SymmetricLayout`: Renders symmetric layouts.
* `UndoRedo`: Reverts and restores changes.
* `Ej1Serialization`: Loads EJ1 Diagram JSON into EJ2 Diagram.

Import and inject modules using `Diagram.Inject`:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Diagram, HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, ConnectorEditing, Ej1Serialization } from '@syncfusion/ej2-diagrams';

Diagram.Inject(
    BpmnDiagrams,
    ConnectorBridging,
    ConnectorEditing,
    ComplexHierarchicalTree,
    DataBinding,
    DiagramContextMenu,
    HierarchicalTree,
    LayoutAnimation,
    MindMap,
    PrintAndExport,
    RadialTree,
    Snapping,
    SymmetricLayout,
    UndoRedo,
    Ej1Serialization
);

{% endhighlight %}
{% endtabs %}

## Add a diagram to the project

Add a container element for the Diagram to your `index.html`. [src/index.html](src/index.html)

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
    <!-- Container that renders the Diagram -->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Now import the Diagram component in `app.ts`, create an instance, and append it to `#container`. [src/app/app.ts](src/app/app.ts)

The following example shows a basic Diagram:

```Typescript
 import { Diagram } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px'
});
diagram.appendTo('#container');

```

Run the application in the browser:

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


### Apply shape and style to a node

Syncfusion® diagram control provides support to render many built-in shapes in diagram.
Please refer to [`Shapes`](../api/diagram/shapes) to know about built-in Shapes.

* The appearance of a node can be customized by changing its [`fill`](../api/diagram/shapeStyleModel#fill) color, [`strokeColor`](../api/diagram/shapeStyleModel#strokecolor), [`strokeWidth`](../api/diagram/shapeStyleModel#strokewidth), [`borderColor`](../api/diagram/node#bordercolor), [`borderWidth`](../api/diagram/node#borderwidth), [`strokeDashArray`](../api/diagram/shapeStyleModel#strokedasharray),  [`opacity`](../api/diagram/shapeStyleModel#opacity), and [`shadow`](../api/diagram/shapeStyleModel#shadow).

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


### Add additional flowchart nodes

Add multiple nodes with different flowchart shapes to the diagram.

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


### Connect flowchart nodes

Connect these nodes by adding a connector using the [`connectors`](../api/diagram/connectorModel) property of diagram and refer the source and target end by using the [`sourceID`](../api/diagram/connectorModel#sourceid) and [`targetID`](../api/diagram/connectorModel#targetid) properties.
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


Default values for all [`nodes`](../api/diagram/nodemodel) and [`connectors`](../api/diagram/connectorModel) can be set using [`getNodeDefaults`](../api/diagram#getnodedefaults) and [`getConnectorDefaults`](../api/diagram#getconnectordefaults). For example, if all nodes share the same width and height, move those properties into `getNodeDefaults`.


## Automatic organizational chart

The Flowchart section showed how to build a diagram manually. This section explains how to generate and position a diagram automatically.

### Create business data (employee information)

Define employee information as JSON. In the data below, `Name` is the unique identifier and `ReportingPerson` specifies the manager the employee reports to.

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

### Map the data source to the diagram

Configure the employee data with the diagram so nodes and connectors are generated automatically using mapping properties. The example below shows how `dataSourceSettings` maps the ID and parent fields.

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

### Render layout with a data source

To create an organizational chart, set the layout [`type`](../api/diagram/layout) to `OrganizationalChart`. The example below shows how `DataManager` generates the layout based on the diagram `dataSourceSettings`.

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

The examples below show how to define the default appearance of nodes and connectors. Use [`setNodeTemplate`](../api/diagram#setnodetemplate) to update each node based on employee data.

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

N> See the [JavaScript Diagram](https://www.syncfusion.com/javascript-ui-controls/js-diagram) feature tour for highlights. Explore the [JavaScript Diagram examples](https://ej2.syncfusion.com/demos/#/bootstrap5/diagram/default-functionalities.html) to learn how to present and manipulate data.