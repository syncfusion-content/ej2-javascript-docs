---
title: "Virtualization"
component: "Diagram"
description: "Virtualization loads the objects available in the visible area of diagram control"
---

# Virtualization

## Virtualization in Diagram

Virtualization is the process of loading the diagramming objects available in the visible area of the Diagram control, that is, only the diagramming objects that lie within the ViewPort of the Scroll Viewer are loaded (remaining objects are loaded only when they come into view).

This feature gives an optimized performance while loading and dragging items to the Diagram that consists of many Nodes and Connectors.

The following code illustrates how to enable Virtualization mode in the diagram.

```typescript

//Initialize diagram
let diagram: Diagram = new Diagram({
    width: '800px', height: '500px',
    //Enable virtualization in diagram
    constraints: DiagramConstraints.Default | DiagramConstraints.Virtualization,
});
diagram.appendTo('#diagram');

```