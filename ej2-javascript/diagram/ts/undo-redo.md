---
layout: post
title: Undo redo in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Undo redo in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Undo redo 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in ##Platform_Name## Diagram control

Diagram tracks the history of actions that are performed after initializing the diagram and provides support to reverse and restore those changes.

## Undo and redo

Diagram provides built-in support to track the changes that are made through interaction and through public APIs. The changes can be reverted or restored either through shortcut keys or through commands.

N> If you want to use Undo-Redo in diagram, you need to inject UndoRedo in the diagram.

## Undo/redo through shortcut keys

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is **`Ctrl+z`** and shortcut key for redo is **`Ctrl+y`**.

## Undo/redo through public APIs

The client-side methods [`undo`](../api/diagram/#undo) and [`redo`](../api/diagram/#redo) help you to revert/restore the changes. The following code example illustrates how to undo/redo the changes through script.

```javascript

// initialize diagram component
var diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [];
},'#element');
// Reverts the last action performed
diagram.undo();
// Restores the last undone action
diagram.redo();
```
Undo/Redo for diagram can be enabled/disabled with the [`constraints`](../api/diagram/diagramconstraints/) property of diagram.

When a change in the diagram is reverted or restored (undo/redo), the [`historyChange`](../api/diagram/#historychange) event gets triggered.

## Group multiple changes

History list allows to revert or restore multiple changes through a single undo/redo command. For example, revert/restore the fill color change of multiple elements at a time.

The diagram method [`startGroupAction`](../api/diagram/#startgroupaction) allows you to log multiple actions at a time in the history manager stack. It is easier to undo or revert the changes made in the diagram in a single undo/redo process instead of reverting every actions one by one.The diagram method [`endGroupAction`](../api/diagram/#endgroupaction) allows you to end the group actions that are stored in the stack history. The following code illustrates how to undo/redo multiple fillColor change of a node at a time.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/undoredo-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/undoredo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undoredo-cs1" %}

## Stack Limit

The [`stackLimit`](../api/diagram) property of history manager is used to limits the number of actions to be stored on the history manager.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/undoredo-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/undoredo-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undoredo-cs3" %}

## Restrict Undo/Redo

Undo, Redo process can be avoided for particular element by using [`canLog`](../api/diagram/history/#canlog) property in the history manager. The following example illstrates how to prevent history entry using `canLog` function.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/undoredo-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/undoredo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undoredo-cs2" %}


## undo/redo stack

The [`undoStack`](../api/diagram/history/#undostack) property is used to get the collection of undo actions which should be performed in the diagram. The [`redoStack`](../api/diagram/history/#redostack) property is used to get the collection of redo actions which should be performed in the diagram. The undoStack/redoStack is the read-only property.

```javascript

var diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    },'#element');
//get the collection of undoStack objects
let undoStack = diagram.historyManager.undoStack;
//get the collection of redoStack objects
let redoStack = diagram.historyManager.redoStack;
```
## Current entry

While performing interactions with a node or connector, the current history entry is added to the [`currentEntry`](../api/diagram/history/#currententry) property of the [`historyManager`](../api/diagram/#historymanager)..

The following code shows how to get the current entry from the diagram history:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/undoredo-currentEntry/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/undoredo-currentEntry/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undoredo-currentEntry" %}

## Track custom changes

Diagram provides options to track the changes that are made to custom properties. For example, in case of an employee relationship diagram, track the changes in the employee information. The historyManager of the diagram enables you to track such changes. The following example illustrates how to track such custom property changes.

Before changing the employee information, save the existing information to historyManager by using the client-side method push of historyManager.

The following code example illustrates how to save the existing property values.

```javascript

var diagram = new Diagram({
    width: '100%',
    height: '600px',
},'#element');
//Creates a custom entry
var entry = {
    undoObject: diagram.nodes[0];
};
// adds that to history list
diagram.historyManager.push(entry);

```

## Clear history

The [`clearHistory`](../api/diagram/#clearhistory) method of diagram is used to remove all the recorded actions from the undo and redo history.

```javascript
//Clears all the histories
diagram.clearHistory();

```

## Get history stack

The [`getHistoryStack`](../api/diagram/#gethistorystack) method of the diagram retrieves the [`undoStack`](../api/diagram/history/#undostack) or [`redoStack`](../api/diagram/history/#redostack) from the historyManager. This method takes a single parameter, isUndoStack. Pass true to get the undoStack or false to get the redoStack.

```javascript
// Fetch undoStack from history manager
diagram.getHistoryStack(true)

// Fetch redoStack from history manager
diagram.getHistoryStack(false)

```

## History change event

The [`historyChange`](../api/diagram) event triggers, whenever the interaction of the node and connector is take place. When interacting, the entries get added to the history manager to trigger this event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/undoredo-historyEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/undoredo-historyEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/undoredo-historyEvent" %}

While interacting with diagram, this event can be used to do the customization.