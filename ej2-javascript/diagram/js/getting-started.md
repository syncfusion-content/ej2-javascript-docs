---
layout: post
title: Es5 getting started with ##Platform_Name## Diagram control | Syncfusion®
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Diagram control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/javascript/documentation/ai-coding-assistant/overview)

## Component Initialization

The Essential® JS 2 JavaScript components can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `my-diagram-app` for Essential® JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-diagrams/dist/global/ej2-diagrams.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-diagrams/styles/material.css`

**Step 3:** Create a folder `my-diagram-app/resources` and copy/paste the global scripts and styles from the above installed location to `my-diagram-app/resources` location.

**Step 4:** Create a HTML page (index.html) in `my-diagram-app` location and add the Essentials® JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential® JS 2</title>
            <!-- Essential® JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential® JS 2 Diagram's global script -->
            <script src="resources/ej2-diagrams.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Diagram` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Diagram** component in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential® JS 2</title>
            <!-- Essential® JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential® JS 2 Diagram's global script -->
            <script src="resources/ej2-diagrams.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
             <div id="element">Diagram</div>
            <script>
                // initialize diagram component
                var diagram = new ej.diagrams.Diagram();

                // Render initialized diagram.
                diagram.appendTo('#element')
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Diagram** component.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `my-diagram-app` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/25.2.3/dist/ej2.min.js`](http://cdn.syncfusion.com/ej2/ej2-diagrams/dist/global/ej2-diagrams.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-diagrams/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-diagrams/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `my-diagram-app` location and add the CDN link references. Now, add the `Diagram` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Diagram** component in the index.html by using following code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs6" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Diagram** component.


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

These modules should be imported and injected into the Diagram component using `ej.diagrams.Diagram.Inject` method as follows.

```javascript

ej.diagrams.Diagram.Inject(
  ej.diagrams.BpmnDiagrams,
  ej.diagrams.ConnectorBridging,
  ej.diagrams.ConnectorEditing,
  ej.diagrams.ComplexHierarchicalTree,
  ej.diagrams.DataBinding,
  ej.diagrams.DiagramContextMenu,
  ej.diagrams.HierarchicalTree,
  ej.diagrams.LayoutAnimation,
  ej.diagrams.MindMap,
  ej.diagrams.PrintAndExport,
  ej.diagrams.RadialTree,
  ej.diagrams.Snapping,
  ej.diagrams.SymmetricLayout,
  ej.diagrams.UndoRedo
);

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '350px',
});
diagram.appendTo('#element');


```

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

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs2" %}


### Apply shape and style to node

Syncfusion® diagram control provides support to render many build-in shapes in diagram.
Please refer to [`Shapes`](../api/diagram/shapes/) to know about built-in Shapes.

* The appearance of a node can be customized by changing its [`fill`](../api/diagram/shapeStyleModel#fill-string) color, [`strokeColor`](../api/diagram/shapeStyleModel#strokecolor-string), [`strokeWidth`](../api/diagram/shapeStyleModel#strokewidth-number), [`borderColor`](../api/diagram/node#borderColor-string), [`borderWidth`](../api/diagram/node#borderWidth-number), [`strokeDashArray`](../api/diagram/shapeStyleModel#strokeDashArray-number),  [`opacity`](../api/diagram/shapeStyleModel#opacity-number), and [`shadow`](../api/diagram/shapeStyleModel#shadow-number).


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs12" %}


### Add other flowchart nodes to the diagram

You can add multiple nodes with different shapes into diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs14" %}


### Connect flow chart nodes

Connect these nodes by adding a connector using the [`connectors`](../api/diagram/connectorModel/) property of diagram and refer the source and target end by using the [`sourceID`](../api/diagram/connectorModel/#sourceid) and [`targetID`](../api/diagram/connectorModel/#targetid) properties.
The required nodes and connectors can be added to form a complete flow diagram.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs4" %}


Default values for all [`nodes`](../api/diagram/nodemodel/) and [`connectors`](../api/diagram/connectorModel/) can be set using the [`getNodeDefaults`](../api/diagram/#getnodedefaults) and [`getConnectorDefaults`](../api/diagram/#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.


## Automatic organization chart

In the 'Flow Diagram' section, how to create a diagram manually was discussed. This section explains how to create and position the diagram automatically.

### Create Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array whose, `Name` is used as an unique identifier and `ReportingPerson` is used to identify the person to whom an employee report to, in the organization.

```ts

//Initialize data source...
let data = [{Name: "Elizabeth", Role: "Director" },
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

let data = [
  { Name: 'Elizabeth', Role: 'Director' },
  { Name: 'Christina', ReportingPerson: 'Elizabeth', Role: 'Manager' },
  { Name: 'Yoshi', ReportingPerson: 'Christina', Role: 'Lead' },
  { Name: 'Philip', ReportingPerson: 'Christina', Role: 'Lead' },
  { Name: 'Yang', ReportingPerson: 'Elizabeth', Role: 'Manager' },
  { Name: 'Roland', ReportingPerson: 'Yang', Role: 'Lead' },
  { Name: 'Yvonne', ReportingPerson: 'Yang', Role: 'Lead' },
];
let items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '350px',
});
diagram.appendTo('#element');


```

### Rendering layout with Datasource

To create an organizational chart, the [`type`](../api/diagram/layout) of layout should be set as an `OrganizationalChart`. The following code example shows how DataManager is used to generate Layout based on the DataSourceSettings of the Diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs16" %}


### Customize employee appearance

The following code examples indicate how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](../api/diagram/#setnodetemplate) is used to update each node based on employee data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs5" %}

