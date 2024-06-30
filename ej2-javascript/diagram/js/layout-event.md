---
layout: post
title: Layout events in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Automatic layout in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Layout events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Layout events in ##Platform_Name## Diagram control

## DataLoaded event

The [`dataLoaded`](../api/diagram/idataloadedeventargs/) event is triggered after the diagram is populated from the external data source.

The following code example explains the data loaded event in the diagram.

```javascript

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '550px',
  layout: {
    type: 'HierarchicalTree',
  },
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items,
  },
  dataLoaded: function (args) {
    //we can get diagram instance in args.
    console.log(args);
  },
});
diagram.appendTo('#element');

```

## ExpandStateChange event

The [`expandStateChange`](../api/diagram/iExpandStateChangeEventArgs/) will be triggered when the state of the expand and collapse icon change for a node.

The following code example explains the `expandStateChange` event in the diagram.

```javascript
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '550px',
  layout: {
    type: 'HierarchicalTree',
  },
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items,
  },
  getNodeDefaults: (obj) => {
    obj.width = 200;
    obj.height = 60;
    obj.expandIcon.shape = 'Minus';
    obj.collapseIcon.shape = 'Plus';
    return obj;
  },
  expandStateChange: function (args) {
    //We can get the expanded or collapsed node in args
    console.log(args);
  },
});
diagram.appendTo('#element');

```
