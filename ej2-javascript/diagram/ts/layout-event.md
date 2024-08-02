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

// Initializes the diagram
let diagram: Diagram = new Diagram({
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

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-expState/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-expState/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-expState" %}

## Animation complete event

The [`animationComplete`](../api/diagram/#animationcomplete) event is triggered after the animation of the diagram elements is completed. The following example demonstrates how to handle the animation complete event and customize based on the expand state of the root node.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-animComplete/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-animComplete/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-animComplete" %}
