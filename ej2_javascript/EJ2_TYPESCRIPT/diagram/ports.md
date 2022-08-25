---
title: "Ports"
component: "Diagram"
description: "Diagram provides support to define custom ports for making connections."
---

# Ports

Diagram provides support to define custom ports for making connections.

![Port](images/Port1.png)

<!-- markdownlint-disable MD033 -->

When a connector is connected between two nodes, its end points are automatically docked to the node’s nearest boundary as shown in the following image.

![Port to Port](images/port2.png)

Ports act as the connection points of the node and allows to create connections with only those specific points as shown in the following image.

![Port Image](images/Port3.png)

## Create port

## Add ports when initializing nodes

To add a connection port, define the port object and add it to node’s ports collection. The `offset` property of port accepts an object of fractions and used to determine the position of ports. The following code illustrates how to add ports when initializing the node.

{% tab template= "diagram/ports", es5Template="es5port" %}

```typescript

import {
    Diagram,
    NodeModel,
    PortVisibility
} from '@syncfusion/ej2-diagrams';

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
    // Initialize port collection
    ports: [{
        // Sets the position for the port
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
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

## Add ports at runtime

Add ports at runtime by using the client-side method [`addPorts`](../api/diagram#addPorts). The following code illustrates how to add ports to node at runtime.

The port’s ID property is used to define the unique ID for the port and its further used to find the port at runtime.
If ID is not set, then default ID is automatically set.

{% tab template= "diagram/ports", es5Template="es5Add" %}

```typescript

import { Diagram, NodeModel, PointPortModel, PortVisibility } from '@syncfusion/ej2-diagrams';

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



// Initialize port collection
let port: PointPortModel[] = [{
        id: 'port1',
        offset: {
            x: 0,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    } {
        id: 'port2',
        offset: {
            x: 1,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    },
    {
        id: 'port3',
        offset: {
            x: 0.5,
            y: 0
        },
        visibility: PortVisibility.Visible
    },
    {
        id: 'port4',
        offset: {
            x: 0.5,
            y: 1
        },
        visibility: PortVisibility.Visible
    }
];

// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
// Method to add ports through run time
diagram.addPorts(diagram.nodes[0], port);
```

{% endtab %}

## Remove ports at runtime

Remove ports at runtime by using client-side method [`removePorts`](../api/diagram#removePorts). Refer to the following example which shows how to remove ports at runtime.

{% tab template= "diagram/ports", es5Template="es5Remove" %}

```typescript

import { Diagram, NodeModel, PointPortModel, PortVisibility } from '@syncfusion/ej2-diagrams';

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
    // Initialize port collection
    ports: [{
            id: 'port1',
            offset: {
                x: 0,
                y: 0.5
            },
            visibility: PortVisibility.Visible
        },
        {
            id: 'port2',
            offset: {
                x: 1,
                y: 0.5
            },
            visibility: PortVisibility.Visible
        },
        {
            id: 'port3',
            offset: {
                x: 0.5,
                y: 0
            },
            visibility: PortVisibility.Visible
        },
        {
            id: 'port4',
            offset: {
                x: 0.5,
                y: 1
            },
            visibility: PortVisibility.Visible
        }
    ]
};

// initialize diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
let ports: PointPortModel[] = [{
    id: 'port1',
}, {
    id: 'port2',
}, {
    id: 'port3',
}, {
    id: 'port4',
}]
diagram.removePorts(diagram.nodes[0], ports);

```

{% endtab %}

## Update port at runtime

You can change any port properties at runtime and update it through the client-side method [`dataBind`](../api/diagram#dataBind).

The following code example illustrates how to change the port properties.

{% tab template= "diagram/ports", es5Template="es5Node" %}

```typescript

import { Diagram, NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';

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
    // Initialize port collection
    ports: [{
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
};

// initialize Diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized Diagram
diagram.appendTo('#element');
diagram.nodes[0].ports[0].offset = {
    x: 1,
    y: 1
};
diagram.dataBind();

```

{% endtab %}

## Appearance

* The shape of port can be changed by using its shape property. To explore the different types of port shapes, refer to Port Shapes. If you need to render a custom shape, then you can set shape as path and define path using path data property of port.

* The appearance of ports can be customized by using [`strokeColor`](../api/diagram/port#strokeColor-string),
[`strokeWidth`](../api/diagram/port#strokeWidth-string), and [`fill`](../api/diagram/port#fill-string) properties of the port.

* Customize the port size by using the [`width`](../api/diagram/port#width-number) and [`height`](../api/diagram/port#height-number) properties of port.

* The ports [`visibility`](../api/diagram/port#visibility-boolean) property allows you to define, when the port should be visible.

The following code illustrates how to change the appearance of port.

{% tab template= "diagram/ports", es5Template="es5Appear" %}

```typescript

import { Diagram, NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';

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
    // Initialize port collection
    ports: [{
        offset: {
            x: 1,
            y: 0.5
        },
        visibility: PortVisibility.Visible,
        //Set the style for the port
        style: {
            fill: 'red',
            strokeWidth: 2,
            strokeColor: 'black'
        },
        width: 12,
        height: 12,
        // Sets the shape of the port as Circle
        shape: 'Circle'
    }]
};

// initialize Diagram component

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized Diagram
diagram.appendTo('#element');

```

{% endtab %}

## Offset

The offset property of port is used to align the port based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

## Constraints

The constraints property allows to enable/disable certain behaviors of ports. For more information about port
constraints, refer to [`Port Constraints`](../api/diagram/port#constraints-portconstraints).
