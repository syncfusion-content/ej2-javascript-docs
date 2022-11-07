---
title: "Labels"
component: "Diagram"
description: "Labels provide support to add text annotations to the diagram objects to textually describe the nodes and connectors."
---

# Annotation

[`Annotation`](../api/diagram/annotationModel) is a block of text that can be displayed over a node or connector. Annotation is used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node/connector.

<!-- markdownlint-disable MD033 -->

## Create annotation

An annotation can be added to a node/connector by defining the annotation object and adding that to the annotation collection of the node/connector. The [`content`](../api/diagram/annotationModel#content-string) property of annotation defines the text to be displayed. The following code illustrates how to create a annotation.

{% tab template= "diagram/annotations", es5Template="es5Annotation" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the Annotation for the Node
    annotations: [{
        // Sets the text to be displayed
        content: 'Annotation'
    }]
};

let connector: connectorModel = {
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 300
    },
    type: 'Orthogonal',
    style: {
        strokeColor: '#6BA5D7'
    },
    // Sets the Annotation for the Connector
    annotations: [{
        // Sets the text to be diaplayed
        content: 'Annotation'
    }]
}

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node],
    connectors: [connector]
});
// render initialized diagram
diagram.appendTo('#element');
```

{% endtab %}

## Add annotations at runtime

* Annotations can be added at runtime by using the client-side method [`addLabels`](../api/diagram/#addLabels). The following code illustrates how to add a annotation to a node.

* The annotation's [`ID`](../api/diagram/annotationModel#id-string) property is used to define the name of the annotation and its further used to find the annotation at runtime and do any customization.

{% tab template= "diagram/annotations", es5Template="es5Run" %}

```typescript

import { Diagram, NodeModel, ShapeAnnotationModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
let annotation: ShapeAnnotationModel[] = [{
    id: 'label1',
    content: 'Annotation'
}]
//Method to add labels at runtime
diagram.addLabels(diagram.nodes[0], annotation);
diagram.dataBind();

```

{% endtab %}

## Remove annotation

A collection of annotations can be removed from the node by using client-side method [`removeLabels`](../api/diagram/#removeLabels). The following code illustrates how to remove a annotation to a node.

{% tab template= "diagram/annotations", es5Template="es5Update" %}

```typescript

import { Diagram, NodeModel, ShapeAnnotationModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        id: 'label1',
        // Sets the text to be displayed
        content: 'Annotation'
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
let annotation: shapeAnnotationModel[] = [
    {
       id: 'label1', content: 'Annotation'
    }
];
diagram.removeLabels(diagram.nodes[0], annotation);

```

{% endtab %}

## Update annotation at runtime

You can change any annotation properties at runtime and update it through the client-side method [`dataBind`](../api/diagram/#dataBind).

The following code example illustrates how to change the annotation properties.

{% tab template= "diagram/annotations", es5Template="es5Update" %}

```typescript

import { Diagram, NodeModel, ShapeAnnotationModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation'
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
diagram.nodes[0].annotations[0].content = 'Updated Annotation';
//Method to update the annotation at run time
diagram.dataBind();

```

{% endtab %}

## Alignment

Annotation can be aligned relative to the node boundaries. It has [`margin`](../api/diagram/annotationModel#margin-marginmodel), [`offset`](../api/diagram/textStyleModel), horizontal, and vertical alignment settings. It is quite tricky when all four alignments are used together but gives more control over alignment.

## Offset

The offset property of annotation is used to align the annotations based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

Set the size for a nodes annotation by using [`width`](../api/diagram/annotationModel#width-number) and
[`height`](../api/diagram/annotationModel#height-number) properties.

The following code shows the relationship between the annotation position (black color circle) and offset (fraction values).

{% tab template= "diagram/annotations", es5Template="es5Update" %}

```typescript

import { Diagram, NodeModel, ShapeAnnotationModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        // Sets the content for the annotation
        content: 'Annotation',
        //Sets the offset for the content
        offset: { x: 0, y: 1}
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Horizontal and vertical alignment

The [`horizontalAlignment`](../api/diagram/annotationModel#horizontalAlignment-string) property of annotation is used to set how the annotation is horizontally aligned at the annotation position determined from the fraction values. The [`verticalAlignment`](../api/diagram/annotationModel#horizontalAlignment-string) property is used to set how annotation is vertically aligned at the annotation position.

The following tables illustrates all the possible alignments visually with 'offset (0, 0)'.

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Label Alignment](images/Label1.png) |
| Center | Top | ![Center Top Label Alignment](images/Label2.png) |
| Right | Top |  ![Right Top Label Alignment](images/Label3.png) |
| Left | Center | ![Left Center Label Alignment](images/Label4.png) |
| Center | Center| ![Center Center Label Alignment](images/Label5.png) |
| Right | Center | ![Right Center Label Alignment](images/Label6.png) |
| Left | Bottom | ![Left Bottom Label Alignment](images/Label7.png) |
| Center | Bottom | ![Center Bottom Label Alignment](images/Label8.png) |
| Right |Bottom |![Right Bottom Label Alignment](images/Label9.png) |

The following codes illustrates how to align annotations.

{% tab template= "diagram/annotations", es5Template="es5Alignment" %}

```typescript

import { Diagram, NodeModel, ShapeAnnotationModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation',
        // Sets the horizontal alignment as left
        horizontalAlignment: 'Left',
        // Sets the vertical alignment as Center
        verticalAlignment: 'Center'
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Annotation alignment with respect to segments

The offset and alignment properties of annotation allows you to align the connector annotations with respect to the segments.

The following code example illustrates how to align connector annotations.

{% tab template= "diagram/annotations", es5Template="es5Segment" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Task1'
    }]
};

let node2: NodeModel = {
    id: 'node2',
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Task2'
    }]
};

let connector: connectorModel = {
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Orthogonal',
    style: {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    },
    // Sets the annotation for the connector
    annotations: [{
        content: '0',
        // Sets the offset for the content
        offset: 0
    }, {
        content: '1',
        // Sets the offset for the content
        offset: 1
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node, node2],
    connectors: [connector]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Margin

[`Margin`](../api/diagram/annotationModel#margin-marginmodel) is an absolute value used to add some blank space in any one of its four sides. The annotations can be displaced with the margin property.
The following code example illustrates how to align a annotation based on its `offset`, `horizontalAlignment`, `verticalAlignment`, and `margin` values.

{% tab template= "diagram/annotations", es5Template="es5Margin" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.

let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the connector
    annotations: [{
        content: 'Task1',
        // Sets the margin for the content
        margin: {
            top: 10
        },
        horizontalAlignment: 'Center',
        verticalAlignment: 'Top',
        offset: {
            x: 0.5,
            y: 1
        }
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Text align

The [`textAlign`](../api/diagram/textStyleModel#textAlign-textalign) property of annotation allows you to set how the text should be aligned (left, right, center, or justify) inside the text block. The following codes illustrate how to set textAlign for an annotation.

{% tab template= "diagram/annotations", es5Template="es5TextAlign" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.

let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the NOde
    annotations: [{
        content: 'Text align is set as Left',
        // Sets the textAlign as left for the content
        style: {
            textAlign: 'Left'
        }
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Hyperlink

Diagram provides a support to add a [`hyperlink`](../api/diagram/annotationModel#hyperLink-hyperlinkmodel) for the nodes/connectors annotation. It can also be customized.

A User can open the hyperlink in the new window, the same tab and the new tab by using the  [`hyperlinkOpenState`](../api/annotationModel/hyperlinkmodel#hyperlinkopenstate)  property

{% tab template= "diagram/annotations", es5Template="es5Link" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.

let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the Node
    annotations: [{
        hyperlink: {
            link: 'https://hr.syncfusion.com/home',
            //Set the link to open in the current tab
            hyperlinkOpenState:'CurrentTab'
        }
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Template Support for Annotation

Diagram provides template support for annotation. you should define a SVG/HTML content as string in the annotation's [`template`](../api/diagram/annotationModel#template-string) property.

The following code illustrates how to define a template in node's annotation. similarly, you can define it in connectors.

{% tab template= "diagram/annotations", es5Template="es5AnnotationTemplate" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    //Sets the annotation for the node
    annotations: [{
        // Sets the template for a node
        template: '<div><input type="button" value="Submit"></div>'
    }]
};

// A connector is created and stored in connectors array.
let connector: ConnectorModel = {
    id: 'connector1',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 300
    },
    type: 'Orthogonal',
    //Sets the annotation for the node
    annotations: [{
        // Sets the template for a node
        template: '<div><input type="button" value="Submit"></div>'
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node],
    // Add connector
    connectors: [connector],
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Wrapping

When text overflows node boundaries, you can control it by using [`text wrapping`](../api/diagram/textStyleModel#textWrapping-textwrap). So, it is wrapped into multiple lines. The wrapping property of annotation defines how the text should be wrapped. The following code illustrates how to wrap a text in a node.

{% tab template= "diagram/annotations", es5Template="es5Wrap" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    //Sets the annotation for the node
    annotations: [{
        content: 'Annotation Text Wrapping',
        // Sets the style for the text wrapping
        style: {
            textWrapping: 'Wrap'
        }
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

| Value | Description | Image |
| -------- | -------- | -------- |
| No Wrap | Text will not be wrapped. | ![Label No Wrap](images/Wrap1.png) |
| Wrap | Text-wrapping occurs, when the text overflows beyond the available node width. | ![Label Wrap](images/Wrap2.png) |
| WrapWithOverflow (Default) | Text-wrapping occurs, when the text overflows beyond the available node width. However, the text may overflow beyond the node width in the case of a very long word. | ![Label WrapWith Overflow](images/Wrap3.png) |

## Text overflow

The label’s [`TextOverflow`](../api/diagram/textStyleModel#textOverFlow-textoverflow) property is used control whether to display the overflowed content in node or not.

{% tab template= "diagram/annotations", es5Template="es5Overflow" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation Text',
        // Sets the style for the text to be displayed
        style: {
             textOverflow: 'Ellipsis'
        }
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Appearance

* You can change the font style of the annotations with the font specific properties (fontSize, fontFamily, color). The following code illustrates how to customize the appearance of the annotation.

* The label’s [`bold`](../api/diagram/textStyleModel#bold-boolean), [`italic`](../api/diagram/textStyleModel#italic-boolean), and [`textDecoration`](../api/diagram/textStyleModel#textDecoration-textdecoration) properties are used to style the label’s text.

* The label’s [`fill`](../api/diagram/textStyleModel#fill-string), [`strokeColor`](../api/diagram/textStyleModel#strokeColor-string), and [`strokeWidth`](../api/diagram/textStyleModel#strokeWidth-number) properties are used to define the background color and border color of the annotation and the [`opacity`](../api/diagram/textStyleModel#opacity-number) property is used to define the transparency of the annotations.

* The [`visible`](../api/diagram/annotationModel#visibility-number) property of the annotation enables or disables the visibility of annotation.

{% tab template= "diagram/annotations", es5Template="es5Appear" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation Text',
        // Sets the style for the text to be displayed
        style: {
            color: 'black',
            bold: true,
            italic: true,
            fontSize: '12',
            fontFamily: 'TimesNewRoman'
        }
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

The fill, border, and opacity appearances of the text can also be customized with appearance specific properties of annotation. The following code illustrates how to customize background, opacity, and border of the annotation.

{% tab template= "diagram/annotations", es5Template="es5Opacity" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation Text',
        style: {
            color: 'black',
            fill: 'white',
            opacity: 0.7,
            strokeColor: 'black',
            strokeWidth: 2
        }
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
```

{% endtab %}

## Interaction

Diagram allows annotation to be interacted by selecting, dragging, rotating, and resizing. Annotation interaction is disabled, by default. You can enable annotation interaction with the [`constraints`](./constraints#Annotation-Constraints) property of annotation. You can also curtail the services of interaction by enabling either selecting, dragging, rotating, or resizing individually with the respective constraints property of annotation. The following code illustrates how to enable annotation interaction.

{% tab template= "diagram/annotations", es5Template="es5Read" %}

```typescript

import { Diagram, NodeModel, AnnotationConstraints } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation Text',
        //Sets the constraints as Interaction
        constraints: AnnotationConstraints.Interaction
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Edit

Diagram provides support to edit an annotation at runtime, either programmatically or interactively. By default, annotation is in view mode. But it can be brought to edit mode in two ways;

* Programmatically
By using [`startTextEdit`](../api/diagram/#startTextEdit) method, edit the text through programmatically.

* Interactively
    1. By double-clicking the annotation.
    2. By selecting the item and pressing the F2 key.

Double-clicking any annotation will enables editing and the node enables first annotation editing. When the focus of editor is lost, the annotation for the node is updated.
When you double-click on the node/connector/diagram model, the [`doubleClick`](../api/diagram/#doubleClick--emittypeidoubleClickeventargs) event gets triggered.

## Read-only annotations

Diagram allows to create read-only annotations. You have to set the read-only property of annotation to enable/disable the read-only [`constraints`](../api/diagram/annotationModel#constraints-annotationconstraints). The following code illustrates how to enable read-only mode.

{% tab template= "diagram/annotations", es5Template="es5Read" %}

```typescript

import { Diagram, NodeModel, AnnotationConstraints } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation Text',
        //Sets the constraints as Read only
        constraints: AnnotationConstraints.ReadOnly
    }]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Drag Limit

* The diagram control now supports defining the [`dragLimit`](../api/diagram/annotationModel#dragLimit) to the label while dragging from the connector and also update the position to the nearest segment offset.

* You can set the value to dragLimit [`left`](../api/diagram/marginModel#left), [`right`](../api/diagram/marginModel#right), [`top`](../api/diagram/marginModel#top), and [`bottom`](../api/diagram/marginModel#bottom) properties which allow the dragging of connector labels to a certain limit based on the user defined values.

* By default, drag limit will be disabled for the connector. It can be enabled by setting connector constraints as drag.

* The following code illustrates how to set a dragLimit for connector annotations.

```javascript

//Initialize diagram
var diagram = new ej.diagrams.Diagram({
     connectors:[
         {
            id: 'connector2',
            type: 'Orthogonal',
            sourcePoint: { x: 300, y: 300 },
            targetPoint: { x: 400, y: 400 },
            annotations: [
              {
                content: 'connector1', offset:0.5,
                //Enables drag constraints for a connector.
                constraints:AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
                //Set drag limit for a connector annotation.
                dragLimit:{left:20,right:20,top:20,bottom:20}
              }
           ],
         }
     ]
},'#diagram');

```

## Multiple annotations

You can add any number of annotations to a node or connector. The following code illustrates how to add multiple annotations to a node.

{% tab template= "diagram/annotations", es5Template="es5Multiple" %}

```typescript

import { Diagram, NodeModel, AnnotationConstraints } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the multiple annotation for the node
    annotations: [{
            content: 'Left',
            offset: {
                x: 0.12,
                y: 0.1
            }
        },
        {
            content: 'Center',
            offset: {
                x: 0.5,
                y: 0.5
            }
        },
        {
            content: 'Right',
            offset: {
                x: 0.82,
                y: 0.9
            }
        }
    ]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');

```

{% endtab %}

## Constraints

The constraints property of annotation allows you to enable/disable certain annotation behaviors. For instance, you can disable annotation editing.
