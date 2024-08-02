---
layout: post
title: Interaction in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Interaction in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Interaction 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Interaction in ##Platform_Name## Diagram control

## Selector

The selector visually represents selected elements, acting as a container to modify their size, position, and rotation angle interactively or programmatically. It supports selecting both single and multiple elements simultaneously.

## Selection

An element can be selected by clicking that element. During single click, all previously selected items are cleared. The following image shows how the selected elements are visually represented.

![Single Selection](images/single-select.gif)

When selecting/unselecting the diagram elements, the [`selectionChange`](../api/diagram/iSelectionChangeEventArgs/) event and [`click`](../api/diagram/iclickeventargs/) gets triggered. 
These events enable you to customize the selected elements as needed.

### Selecting a group

When a child element of any group is clicked, its contained group is selected instead of the child element. With consecutive clicks on the selected element, selection is changed from top to bottom in the hierarchy of parent group to its children.

### Multiple selection

Multiple elements can be selected with the following ways:

#### Ctrl+Click

During a single click, any existing item in the selection list will be cleared, leaving only the most recently clicked item in the selection list. To avoid clearing the previously selected items, hold down the Ctrl key while clicking.

#### Rubber band selection

Clicking and dragging in the diagram area allows you to create a rectangular region. The elements covered within this rectangular region will be selected when you release the mouse button.

In rubber band selection, you can set the selection of items by region using the following modes:

- CompleteIntersect: Selects items that are fully covered within the rectangular selection region.
- PartialIntersect: Selects items that are partially covered within the rectangular selection region.

This can be configured with the [`rubberBandSelectionMode`](../api/diagram/rubberBandSelectionMode/).

![Multiple Selection](images/multiselect_Highlight.gif)

### Select/Unselect elements using API


The [`select`](../api/diagram#select) and [`clearSelection`](../api/diagram#clearselection) methods are used to dynamically select or clear the selection of elements at runtime. The following code example demonstrates how these methods can be utilized to select or clear the selection of elements.

```ts
let diagram = new Diagram({
    width: '100%', height: 900,
    nodes:[{
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    }]
});
diagram.appendTo('#diagram');
//Select a specified collection of nodes and connectors in the diagram
diagram.select([diagram.nodes[0]]);
//Removes all elements from the selection list, clearing the current selection.
diargam.clearSelection();
```
### Get selected items

You can get the currently selected [`nodes`](../api/diagram/selectorModel/#connectors) and [`connectors`](../api/diagram/selectorModel/#nodes) using [`selectedItems`](../api/diagram/selectorModel/) property of the diargam.

```ts

let selectedNodes = diagram.selectedItems.nodes;
let selectedConnectors = diagram.selectedItems.connectors;

```

You can also get the currently selected objects, both nodes and connectors, in a single array called [`selectedObjects`](../api/diagram/selectorModel/#selectedobjects) within the [`selectedItems`](../api/diagram/selectorModel/) property of the diagram.

```ts

let selectedObjects = diagram.selectedItems.selectedObjects;

```

### Toggle selection

The [`canToggleSelection`](../api/diagram/selectorModel#canToggleSelection) property determines whether the selection state of a diagram element should toggle with a mouse click at runtime. By default, this property is set to false. In the following example, the node can be selected with the first click and unselected with the second click.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/interaction-toggle/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/interaction-toggle/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/interaction-toggle" %}

### Select entire elements in diagram programmatically

The [`selectAll`](../api/diagram#selectAll) method of diagram is used to select all the elements such as nodes/connectors in the diagram. Refer to the following code snippet.

```ts
//Selects all the nodes and connectors in diagram
diagram.selectAll();

```

You can also use the CTRL+A keys to select all nodes and connectors in the diagram.

## Drag

You can drag an object by clicking and dragging it. When multiple elements are selected, dragging any one of them moves all selected elements together.
As you drag elements within the diagram, the [`positionChange`](../api/diagram/idraggingeventargs/) event is triggered, providing opportunities to customize the dragged elements.

![Drag](images/drag.gif)

## Resize

The selector in the diagram is designed with eight resizing handles, commonly referred to as thumbs. These handles allow users to adjust the size of selected items by clicking and dragging them. When resizing, dragging any handle modifies the dimensions of the selected elements accordingly. Notably, when dragging one corner handle, the opposite corner remains fixed to specific alignment of the selected item.

During the resizing process, the diagram triggers the [`sizeChange`](../api/diagram/isizechangeeventargs/) event, allowing customization based on the size of the element.

![Resize](images/resize.gif)

N>  While dragging and resizing, the objects are snapped towards the nearest objects to make better alignments.

### Aspect ratio

Maintaining aspect ratio in diagram means that when you resize a node, by dragging its corner, both its width and height adjust proportionally. This ensures that the node retains its original shape and proportions. Aspect ratio constraints can be applied by configuring the [`NodeConstraints`](../api/diagram/nodeconstraints/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/interaction-aspect/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/interaction-aspect/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/interaction-aspect" %}

### Customing resize-thumb size

You can change the size of the node resize thumb and the connector end point handle by using the [`handleSize`](../api/diagram/selectorModel/#handlesize) property. The following example shows the resize handle size customization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/interaction-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/interaction-cs1" %}

![handleSize](images/handleSize.gif)

The appearance such as fill, stroke, and stroke width of the node resize thumb and connector end point handle can be customized by overriding the e-diagram-resize-handle and e-diagram-endpoint-handle classes respectively.

## Rotate

A rotation handler is positioned above the selector. Clicking and dragging this handler in a circular motion rotates the node. The node rotates around a fixed pivot point. A pivot thumb, located at the center of the node, appears during rotation to indicate the fixed point.
Rotating a node triggers the [`rotateChange`](../api/diagram/iRotationEventArgs/) event.

![rotate](images/rotate.gif)

### Customize rotate handle position

The position of the rotate handle can be adjusted by modifying the pivot point of the node using the [`pivot`](../api/diagram/nodeModel/#pivot) property. By default, the pivot point is set to (0.5, 0.5). The following example shows how to render the rotate handle at the left top corner of the node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/interaction-pivot/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/interaction-pivot/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/interaction-pivot" %}

## Connector editing

Each segment of a selected connector is editable with some specific handles/thumbs.

N> For connector editing, you have to inject the [`ConnectorEditing`](../api/diagram/connectorEditing) module.

### Drag connector end points

Source and target points of selected connectors are represented by two handles. Clicking and dragging these handles allows you to adjust the source and target points.

![Drag End Point Handles](images/connector-end-point.gif)

Dragging the connector end points triggers the following events for customization:

When the connector's source point is changed, the [`sourcePointChange`](../api/diagram/iEndChangeEventArgs/) event is triggered.
When the connector's target point is changed, the [`targetPointChange`](../api/diagram/iEndChangeEventArgs/) event is triggered.
Connecting a connector to port/node or disconnecting from them triggers the [`connectionChange`](../api/diagram/iConnectionChangeEventArgs/) event.

### Straight segment editing

The end point of each straight segment is represented by a thumb that allows you to edit the segment. You can insert any number of new segments into a straight line by clicking while holding the Shift and Ctrl keys (Ctrl+Shift+Click).

![Straight Segment Editing Addition](images/straight-segment-add.gif)

Straight segments can be removed by clicking the segment end point while holding the Ctrl and Shift keys (Ctrl+Shift+Click).

![Straight Segment Editing Remove](images/straight-segment-remove.gif)

### Orthogonal segment editing

Orthogonal thumbs allow you to adjust the length of adjacent segments by clicking and dragging them. When necessary, segments are automatically added or removed during dragging to maintain proper orthogonal routing.

When editing a segment, the [`segmentChange`](../api/diagram/iSegmentChangeEventArgs/) event is triggered. When new segments are added to the collection of connector segments, the [`segmentCollectionChange`](../api/diagram/iSegmentCollectionChangeEventArgs/) event is triggered.

![orthogonal Segment Edit](images/orthogonal-segment-edit.gif)


### Bezier segment editing

Bezier segment thumbs allow you to adjust the segments by clicking and dragging them.

![Bezier Segment Thumbs](images/bezierSegmentThumbControl.gif)

#### Bezier Control Points

Bezier segments are annotated with two thumbs representing the control points. These control points can be adjusted by clicking and dragging the control thumbs. Dragging the control point changes the angle and distance of the points from the segment point, modifying the curve.

![Bezier Control Points](images/bezier-segement-thumb.gif)

## User handles

User handles are used to add frequently used commands around the selector. To create user handles, define and add them to the [`userHandles`](../api/diagram/userHandleModel/) collection of the [`selectedItems`](../api/diagram/selectorModel/) property. The [`name`](../api/diagram/userHandleModel/#name) property of userHandles is used to define the name of the user handle, which can then be used at runtime for identification and customization.

The following events are triggered when interacting with a user handle:

* [`click`](../api/diagram/iclickeventargs/) - Triggered when the user handle is clicked.
* [`onUserHandleMouseEnter`](../api/diagram/#onuserhandlemouseenter) - Triggered when the mouse enters the user handle region.
* [`onUserHandleMouseDown`](../api/diagram/#onuserhandlemousedown) - Triggered when the mouse is pressed down on the user handle.
* [`onUserHandleMouseUp`](../api/diagram/#onuserhandlemouseup) - Triggered when the mouse is released on the user handle.
* [`onUserHandleMouseLeave`](../api/diagram/#onuserhandlemouseleave) - Triggered when the mouse leaves the user handle region.

For more information, refer to the [`user handle events`](./user-handle.md/#user-handle-events).

## Fixed user handle

Fixed user handles are used to perform specific actions when interacted with. Unlike regular user handles, [`fixedUserHandles`](../api/diagram/nodeFixedUserHandleModel/) are defined within the node/connector object, allowing different fixed user handles to be added to different nodes.

The following events are triggered when interacting with a fixed user handle:

* [`click`](../api/diagram/iclickeventargs/) - Triggered when the fixed user handle is clicked.
* [`onFixedUserHandleMouseEnter`](../api/diagram/#onfixeduserhandlemouseenter) - Triggered when the mouse enters the fixed user handle region.
* [`onFixedUserHandleMouseDown`](../api/diagram/#onfixeduserhandlemousedown) - Triggered when the mouse is pressed down on the fixed user handle.
* [`onFixedUserHandleMouseUp`](../api/diagram/#onfixeduserhandlemouseup) - Triggered when the mouse is released on the fixed user handle.
* [`onFixedUserHandleMouseLeave`](../api/diagram/#onfixeduserhandlemouseleave) - Triggered when the mouse leaves the fixed user handle region.
* [`fixedUserHandleClick`](../api/diagram/fixedUserHandleClickEventArgs/) - Triggered when the fixed user handle is clicked.

For more information, refer to the [`fixed user handle events`](./user-handle.md/#fixed-user-handle-events).

## Determining Mouse Button Clicks

The diagram component can determine which mouse button was clicked. For example, when the right mouse button is clicked, the click event will specify that the right button was clicked. This is handled through the mouse [`click`](../api/diagram/iclickeventargs/) event, which provides details about whether the left or right button was clicked.

| Notification | Description |
|----------------|--------------|
| Left | When the left mouse button is clicked, left is notified  |
| Middle | When the mouse wheel is clicked, middle is notified |
| Right | When the right mouse button is clicked, right is notified |

```ts
let diagram = new Diagram({
    width: '100%', height: 900
},'#diagram');
diagram.click = function (args) {
// Obtains the mouse button clicked
   let clickedButtons = args.button
};
```

## Allow drop

The diagram supports dropping a node or connector onto another node or connector. To determine the target where the node or connector is dropped, you need to enable the [`allowDrop`](../api/diagram/nodeConstraints/) constraint in the node's or connector's constraints property. This setting enables a highlighter to indicate potential drop targets when dragging any node or connector over another one. Upon dropping the node or connector, the [`drop`](../api/diagram/iDropEventArgs/) event is triggered to indicate which element was dropped over which other element.


## Zoom pan

When loading a large diagram, only a certain portion of the diagram is initially visible, the remaining parts are clipped. You can explore these clipped portions by scrolling the scrollbars or panning the diagram. You can zoom in or out on the diagram by using Ctrl + mouse wheel. When the diagram is zoomed or panned, the [`scrollChange`](../api/diagram/iScrollChangeEventArgs/) event is triggered.

|  Pan Status  | Description|
|--------------|---------|
| Start | When the mouse is clicked and dragged the status is notified as start.|
| Progress | When the mouse is in motion the status is notified as progress.|
| Completed | When panning is stopped the status is notified with completed.|

![Zoom Pan](images/Zoom-pan.gif)

## Keyboard

Diagram provides support to interact with the elements with key gestures. By default, some in-built commands are bound with a relevant set of key combinations.

The following table illustrates those commands with the associated key values.

| Shortcut Key | Command | Description|
|--------------|---------|------------|
| Ctrl + A | `selectAll` | Select all nodes/connectors in the diagram.|
| Ctrl + C | copy | Copy the diagram selected elements.|
| Ctrl + V | paste | Pastes the copied elements.|
| Ctrl + X | cut | Cuts the selected elements.|
| Ctrl + Z | undo | Reverses the last editing action performed on the diagram.|
| Ctrl + Y | redo | Restores the last editing action when no other actions have occurred since the last undo on the diagram.|
| Delete | delete | Deletes the selected elements.|
| Ctrl/Shift + Click on object | Multiple selection | Selector binds all selected nodes/connectors.|
| Up Arrow | nudge(“up”) | `nudgeUp`: Moves the selected elements towards up by one pixel.|
| Down Arrow | nudge(“down”) | `nudgeDown`: Moves the selected elements towards down by one pixel.|
| Left Arrow | nudge(“left”) | `nudgeLeft`: Moves the selected elements towards left by one pixel.|
| Right Arrow | nudge(“right”) | `nudgeRight`: Moves the selected elements towards right by one pixel.|
| Ctrl + MouseWheel | zoom | Zoom (Zoom in/Zoom out the diagram).|
| F2 | `startLabelEditing` | Starts to edit the label of selected element.|
| Esc | `endLabelEditing` | Sets the label mode as view and stops editing.|
| Tab | Tab to Focus | Select the diagram element based on the rendering order when using the "Tab" key.|
| Shift + Tab | Go to Previous Object | This command is employed to shift the selection to the preceding object based on the z-order.|
| Control + B | Bold | Toggle bold formatting for the selected text.|
| Control + I | Italic | Toggle italic formatting for the selected text.|
| Control + U | Underline | Toggle underline formatting for the selected text.|
| Control + D | Duplicate | Duplicate a selected shape.|
| Control + G | Group | Group together multiple selected shapes, allowing them to be treated as a single shape.|
| Control + Shift + U | UnGroup | Ungroup shapes within a previously grouped selection.|
| Control + R | Rotate clockwise | Rotate the selected nodes in clockwise.|
| Control + L | Rotate anti-clockwise | Rotate the selected nodes in counterclockwise.|
| Control + H | Flip Horizontal | Flip the selected elements horizontally.|
| Control + J | Flip Vertical | Flip the selected elements vertically.|
| Control + 1 | Pointer tool | Activate the pointer tool.|
| Control + 2 | Text tool | Activate the text  tool.|
| Control + 3 | Connector tool | Activate the connector tool.|
| Control + 5 | Freeform  tool | Activate the freeform tool.|
| Control + 6 | Line tool | Activate the polyline tool.|
| Control + + | Zoom In | Zoom in the diagram.|
| Control + - | Zoom Out | Zoom out the diagram.|
| Shift + Up Arrow | Up | Moves the selected elements towards up by 5 pixel.|
| Shift + Down Arrow | Down | Moves the selected elements towards down by 5 pixel.|
| Shift + Left Arrow | Left | Moves the selected elements towards left by 5 pixel.|
| Shift + Right Arrow | Right | Moves the selected elements towards right by 5 pixel.|
| Control + Shift + L | Align Text Left | Align the selected text to the left.|
| Control + Shift + C | Center Text Horizontally | Center the selected text horizontally.|
| Control + Shift + R | Align Text Right | Align the selected text to the right.|
| Control + Shift + J | Justify Text Horizontally | Justify the selected text, aligning it to both the left and right margins.|
| Control + Shift + E | Top-align Text Vertically | Align the selected text to the top vertically.|
| Control + Shift + M | Center Text Vertically | Center the selected text vertically.|
| Control + Shift + V | Bottom-align Text Vertically | Align the selected text to the bottom vertically.|
| Control + Shift + B | Send To Back | Send the selected shape backward in the stacking order, making it appear behind other shapes.|
| Control + Shift + F | Bring To Front | Bring the selected shape forward in the stacking order, making it appear in front of other shapes.|
| Control + [ | Send Backward | Move the selected shape one step backward in the layer order. |
| Control + ] | Bring Forward | Move the selected shape one step forward in the layer order.|

N> Please note that the positionChange event is triggered for dragging nodes/connectors using mouse interactions only and not supported for Keyboard  interactions

## See Also

* [How to create diagram nodes using drawing tools](./tools#Shapes)
* [How to create diagram connectors using drawing tools](./tools#Connectors )
* [How to disable the diagram interaction](./tools)
* [How to control the diagram history](./undo-redo)
* [How to create overview control to the diagram](./overview)
