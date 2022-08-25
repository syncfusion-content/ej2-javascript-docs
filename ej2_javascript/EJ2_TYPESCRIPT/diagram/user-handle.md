---
title: "UserHandle"
component: "Diagram"
description: "Learn how to add or remove userhandles, userhandles customization, and its event handle in the diagram component"
---

# User Handles

* User handles are used to add some frequently used commands around the selector. To create user handles, define and add them to the [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) collection of the [`selectedItems`](../api/diagram#selectAll#selecteditems-selectormodel) property.
* The name property of user handle is used to define the name of the user handle and its further used to find the user handle at runtime and do any customization.

## Alignment

User handles can be aligned relative to the node boundaries. It has [`margin`](../api/diagram/userHandle#margin-marginmodel), [`offset`](../api/diagram/userHandle#offset-number), [`side`](../api/diagram/userHandle#side-side), [`horizontalAlignment`](../api/diagram/userHandle#horizontalalignment-horizontalalignment), and [`verticalAlignment`](../api/diagram/userHandle#verticalalignment-verticalalignment) settings. It is quite tricky when all four alignments are used together but gives more control over alignment.

### Offset for user handle

The [`offset`](../api/diagram/userHandle#offset-number) property of [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to align the user handle based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

### Side

The [`side`](../api/diagram/userHandle#side-side) property of [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to align the user handle by using the [`Top`](../api/diagram/side#top), [`Bottom`](../api/diagram/side#bottom), [`Left`](../api/diagram/side#left), and [`Right`](../api/diagram/side#right) options.

### Horizontal and vertical alignments

The [`horizontalAlignment`](../api/diagram/userHandle#horizontalalignment-horizontalalignment) property of [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to set how the user handle is horizontally aligned at the position based on the [`offset`](../api/diagram/userHandle#offset-number). The [`verticalAlignment`](../api/diagram/userHandle#verticalalignment-verticalalignment) property is used to set how user handle is vertically aligned at the position.

### Margin for the user handle

Margin is an absolute value used to add some blank space in any one of its four sides. The [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) can be displaced with the [`margin`](../api/diagram/userHandle#margin-marginmodel) property.

### Appearance

The appearance of the user handle can be customized by using the [`size`](../api/diagram/userHandle#size-number), [`borderColor`](../api/diagram/userHandle#bordercolor-string), [`backgroundColor`](../api/diagram/userHandle#backgroundcolor-string), [`visible`](../api/diagram/userHandle#visible-boolean), [`pathData`](../api/diagram/userHandle#pathdata-string), and [`pathColor`](../api/diagram/userHandle#pathcolor-string) properties of the [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]).

{% tab template= "diagram/interaction", es5Template="es5UserHandle" %}

```typescript

import { Diagram, NodeModel, BasicShapeModel, MoveTool, MouseEventArgs, IElement, UserHandleModel, ToolBase, SelectorConstraints, Actions, randomId, cloneObject } from '@syncfusion/ej2-diagrams';

let shape: BasicShapeModel = { type: 'Basic', shape: 'Rectangle' };
let node1: NodeModel = { id: 'node', offsetX: 100, offsetY: 100, shape: shape };

let handles: UserHandleModel[] = [{
    name: 'clone', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3, 0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z', visible: true, offset: 0, side: 'Bottom',
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
}];
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px', nodes: [node1],
    selectedItems: { constraints: SelectorConstraints.All, userHandles: handles },
    getNodeDefaults: (node: NodeModel): NodeModel => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = '#6BA5D7';
        return node;
    },
    getCustomTool: getTool
});

diagram.appendTo('#element');

function getTool(action: string): ToolBase {
    let tool: ToolBase;
    if (action === 'clone') {
        tool = new CloneTool(diagram.commandHandler);
    }
    return tool;
}

//Defines the clone tool used to copy Node/Connector
class CloneTool extends MoveTool {
    public mouseDown(args: MouseEventArgs): void {
        let newObject: any;
        if (diagram.selectedItems.nodes.length > 0) {
            newObject = cloneObject(diagram.selectedItems.nodes[0]) as NodeModel;
        } else {
            newObject = cloneObject(diagram.selectedItems.connectors[0]) as ConnectorModel;
        }
        newObject.id += randomId();
        diagram.paste([newObject]);
        args.source = diagram.nodes[diagram.nodes.length - 1] as IElement;
        args.sourceWrapper = args.source.wrapper;
        super.mouseDown(args);
        this.inAction = true;
    }
}

```

{% endtab %}

## Fixed user handles

The fixed user handles are used to add some frequently used commands around the node and connector even without selecting it.

## Initialization an fixed user handles

To create the fixed user handles, define and add them to the collection of nodes and connectors property. The following code example used to create an fixed user handles for the  nodes and connectors.

{% tab template= "diagram/interaction", es5Template="es5FixedUserHandle" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

let node: NodeModel = {
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // A fixed user handle is created and stored in fixed user handle collection of Node.
     fixedUserHandles: [{margin: { right: 20 },
         pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
};
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node]
});
diagram.appendTo('#element');

```

{% endtab %}

## Customization

* The id property of fixed user handle is used to define the unique identification of the fixed user handle and it is further used to add custom events to the fixed user handle.

* The fixed user handle can be positioned relative to the node and connector boundaries. It has offset, padding and cornerRadius settings. It is used to position and customize the fixed user handle.

* The `Padding` is used to leave the space that is inside the fixed user handle between the icon and border.

* The corner radius allows to create fixed user handles with rounded corners. The radius of the rounded corner is set with the `cornerRadius` property.

>Note: The PathData needs to be provided to render fixed user handle.

### Size

 Diagram allows you set size for the fixed user handles by using the `width` and `height` property. The default value of the width and height property is 10.

### Style

* You can change the style of the fixed user handles with the specific properties of borderColor, borderWidth, and background color using the handleStrokeColor, handleStrokeWidth, and fill properties, and the icon borderColor, and borderWidth using the iconStrokeColor and iconStrokeWidth.

* The fixed user handle's `iconStrokeColor` and `iconStrokeWidth` property used to change the stroke color and stroke width of the given `pathData`.

* The fixed user handle `handleStrokeColor` and `fill` properties are used to define the background color and border color of the userhandle and the `handleStrokeWidth` property is used to define the border width of the fixed user handle.

* The `visible` property of the fixed user handle enables or disables the visibility of fixed user handle.

The following code explains how to customize the appearance of the fixed user handles.

{% tab template= "diagram/interaction", es5Template="es5CustomizingFixedUserHandle" %}

```typescript

import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';

let node: NodeModel = {
    offsetX: 150,
    offsetY: 150,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
     fixedUserHandles: [{offset: { x: 0, y: 0 },margin: { right: 20 }, width: 20, height: 20,
           padding:{left:3,right:3,top:3,bottom:3},iconStrokeColor:'white',fill:'black',  id: 'user1', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
};
let connector: ConnectorModel = {
    id: 'connector1',
    type: 'Orthogonal',
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 400, y: 200 },
     fixedUserHandles: [{ offset: 0.5, width: 20, alignment: 'Before', padding:{left:3,right:3,top:3,bottom:3},iconStrokeColor:'white',fill:'black', height: 20, id: 'usercon1',  displacement:{x:10,y:10}, pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
};

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node],
    connectors: [connector]
});
diagram.appendTo('#element');

```

{% endtab %}

>Note: The fixed user handle id need to be unique.

## Customizing the node fixed user handle

* The node fixed user handle can be aligned relative to the node boundaries. It has `margin` and `offset` settings. It is quite useful to position the node fixed userhandle and used together and gives you more control over the node fixed user handle positioning.

### Margin for the node fixed user handle

Margin is an absolute value used to add some blank space in any one of its four sides. The fixed user handle can be displaced with the `margin` property.

### Offset for the node fixed user handle

The `offset` property of fixed user handle is used to align the user handle based on the `x` and `y` points. (0,0) represents the top or left corner and (1,1) represents the bottom or right corner.

The following table shows all the possible alignments visually shows the fixed user handle positions.

| Offset | Margin | Output |
| -------- | -------- | -------- |
| (0,0) | Right = 20 |![fixed user handle for node](images/topleft.png)|
| (0.5,0) | Bottom = 20 |![fixed user handle for node](images/topcenter.png)|
| (1,0) | Left = 20 |![fixed user handle for node](images/topright.png)|
| (0,0.5) | Right = 20 |![fixed user handle for node](images/leftcenter.png)|
| (0,1) | Left = 20 |![fixed user handle for node](images/rightcenter.png)|
| (0,1) | Right = 20 |![fixed user handle for node](images/bottomleft.png)|
| (0.5,1) | Top = 20 |![fixed user handle for node](images/bottomcenter.png)|
| (1,1) | Left = 20 |![fixed user handle for node](images/bottomright.png)|

The following code explains how to customize the node fixed user handle.

{% tab template= "diagram/interaction", es5Template="es5NodeFixedUserHandle" %}

```typescript

import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

let node: NodeModel = {
    offsetX: 200,
    offsetY: 200,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },// A fixed user handle is created and stored in fixed user handle collection of Node.
     fixedUserHandles: [{ offset: { x: 0, y: 0 }, margin: { right: 20 }, width: 20,height: 20, pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
};
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node]
    });
diagram.appendTo('#element');

```

{% endtab %}

## Customizing the connector fixed user handle

* The connector fixed user handle can be aligned relative to the connector boundaries. It has alignment, displacement and offset settings. It is useful to position the connector fixed user handle and used together and gives you more control over the connector fixed user handle positioning.

* The `offset` and `alignment` properties of fixed user handle allows you to align the connector fixed user handles to the segments.

### Offset for the connector fixed user handle

The `offset` property of connector fixed user handle is used to align the user handle based on fractions. 0 represents the connector source point, 1 represents the connector target point, and 0.5 represents the center point of the connector segment.

### Alignment

The connector’s fixed user handle can be aligned over its segment path using the `alignment` property of fixed user handle.

The following table shows all the possible alignments visually shows the fixed user handle positions.

| Offset | Alignment | Output |
| -------- | -------- | -------- |
| 0 | Before |![fixed user handle for node](images/0before.png)|
| 0.5 | Center |![fixed user handle for node](images/0.5center.png)|
| 1 | After |![fixed user handle for node](images/1after.png)|

### Displacement

* The `displacement` property allows you to specify the space to be left from the connector segment based on the x and y value provided.

The following table shows all the possible alignments visually shows the fixed user handle positions.

| Displacment | Alignment | Output |
| -------- | -------- | -------- |
| x=10 | Before |![fixed user handle for node](images/xbefore.png)|
| x=10 | After |![fixed user handle for node](images/xafter.png)|
| y=10 | Before |![fixed user handle for node](images/ybefore.png)|
| y=10 | After |![fixed user handle for node](images/yafter.png)|

>Note: Displacement will not be done if the alignment is set to be center.

The following code explains how to customize the connector fixed user handle.

{% tab template= "diagram/interaction", es5Template="es5ConnectorFixedUserHandle" %}

```typescript

import { Diagram, ConnectorModel } from '@syncfusion/ej2-diagrams';

let connector: ConnectorModel = {
    id: 'connector1',
    type: 'Orthogonal',
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 400, y: 200 },
    // A fixed user handle is created and stored in fixed user handle collection of Connector.
     fixedUserHandles: [{ offset: 0.5, width: 20, alignment: 'Before', height: 20, id: 'usercon1',  displacement:{x:10,y:10}, pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
};

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: [connector]
});
diagram.appendTo('#element');

```

{% endtab %}

### Tooltip support for User Handle

The diagram provides support to show tooltip when the mouse hovers over any user handle.
To show the tooltip on mouse over, the [`tooltip`](../api/diagram#tooltip) property of diagram model needs to be set with the tooltip [`content`](../api/diagram/diagramTooltip/#content) and [`position`](../api/diagram/diagramTooltip/#position) as shown in the following example.

{% tab template= "diagram/interaction", es5Template="es5UserHandleTooltip" %}

```typescript

import {
    Diagram,
    NodeModel,
    DiagramConstraints,
    UserHandleModel,
    NodeConstraints
} from '@syncfusion/ej2-diagrams';
import {
    NodeAnimationSettings
} from '@syncfusion/ej2-navigations';

let node: NodeModel = {
    id: "node0",
    offsetX: 100,
    offsetY: 100,
    width: 100,
    height: 100,
    shape: { type: "HTML", },
    style: { fill: 'yellow' },
    tooltip: { content: 'node1', position: 'BottomRight', relativeMode: 'Object', animation: { open: { effect: 'FadeZoomIn', delay: 0 }, close: { effect: 'FadeZoomOut', delay: 0 } } },
    constraints:NodeConstraints.Default | NodeConstraints.Tooltip
};
let handle: UserHandleModel[] = [{
    name: 'handle1',
    pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z',
    visible: true, backgroundColor: 'black', offset: 0, side: 'Right',
    pathColor: 'white',
    tooltip: { content: 'handle1', position: 'BottomRight', relativeMode: 'Object', animation: { open: { effect: 'FadeZoomIn', delay: 0 }, close: { effect: 'FadeZoomOut', delay: 0 } } },
},
{
    name: 'handle2', source: './download.png', visible: true, backgroundColor: 'black', offset: 0, side: 'Top', margin: { top: 0, bottom: 0, left: 0, right: 0 },
    pathColor: 'white',
    tooltip: { content: 'handle2', position: 'BottomRight', relativeMode: 'Object', animation: { open: { effect: 'FadeZoomIn', delay: 0 }, close: { effect: 'FadeZoomOut', delay: 0 } } },
},
{
    name: 'handle3',
    content: '<g><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522' +
    'c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982' +
    'c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537' +
    'c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z' +
    ' M68.129,53.938' +
    'c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537' +
    'c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333' +
    'c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882' +
    'c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977' +
    'c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344' +
    'c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223' +
    'C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107' +
    'C68.398,56.537,68.398,54.386,68.129,53.938z"></path></g>',
    side: 'Bottom', horizontalAlignment: 'Center', verticalAlignment: 'Center', margin: { top: 0, bottom: 0, left: 0, right: 0 }, offset: 0,
    pathColor: 'yellow',
    tooltip: { content: 'handle3', position: 'BottomRight', relativeMode: 'Object', animation: { open: { effect: 'FadeZoomIn', delay: 0 }, close: { effect: 'FadeZoomOut', delay: 0 } } },
}];

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node],
    selectedItems: { userHandles: handle },
    });
diagram.appendTo('#element');

```

![Tooltip User Handle](./images/TooltipUserHandle.png)

{% endtab %}