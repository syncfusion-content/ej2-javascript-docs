---
layout: post
title: Diagram Collaboration in ##Platform_Name## | Syncfusion
description: Checkout and learn to set up real-time collaborative editing in ##Platform_Name## Diagram using SignalR.
platform: ej2-javascript
control: Diagram
documentation: ug
publishingplatform: ##Platform_Name##
domainurl: ##DomainURL##
---

# Collaborative Editing in ##Platform_Name## Diagram

Collaborative editing enables multiple users to edit diagrams simultaneously in real-time, providing a seamless collaborative experience in ##Platform_Name## applications.

## Purpose

Collaborative editing in diagram control allows multiple users to edit and review diagrams in real time, ensuring accuracy, consistency, and faster updates. It streamlines teamwork by reducing delays, improving communication through comments, and maintaining data integrity with version tracking.

## Configuration

* Use **SignalR** for real-time communication between the ##Platform_Name## app and server.
* Use **Redis** as a temporary data store to manage updates and version state.
* Basic setup:
    * Configure an ASP.NET Core SignalR hub. [Refer link](./collaborative-editing-hub.md).
    * Connect the ##Platform_Name## app to the hub. [Refer link](./ej2-collaborative-editing.md).

## Limitations

* Default deployment
    * By default, a single server instance works without additional setup. For multi-instance (scale-out) deployments, configure a backplane (e.g., Redis) and use a shared data store so all nodes share group messages and version state consistently.
* View-only interactions
    * Zoom and pan are local to each user and are not synchronized, so collaborators may view different areas of the diagram.
* Unsupported synchronized settings
    * Changes to [pageSettings](../page-settings.md), [contextMenuSettings](../context-menu.md), [snapSettings](../grid-lines#snapping), [rulerSettings](../ruler.md), [layout](https://ej2.syncfusion.com/documentation/diagram/automatic-layout/automatic-layout), and [scrollSettings](../scroll-settings.md) are not propagated to other users and apply only locally.

>**Note:** 
Collaboration will work when [DiagramCollaboration](https://ej2.syncfusion.com/documentation/diagram/getting-started#module-injection) and [UndoRedo](https://ej2.syncfusion.com/documentation/diagram/getting-started#module-injection) modules are enabled. Collaboration applies to actions that raise the [historyChange](../../api/diagram/index-default#historychange) event.


## Sample code

A complete working example is available in the [##Platform_Name## Diagram Collaborative Editing GitHub repository](https://github.com/SyncfusionExamples/ej2-web-diagram-examples/tree/master/CollaborativeEditing)