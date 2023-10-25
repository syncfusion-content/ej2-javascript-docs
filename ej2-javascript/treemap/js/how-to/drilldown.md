---
layout: post
title: Drilldown in ##Platform_Name## Treemap control | Syncfusion
description: Learn here all about Drilldown in Syncfusion ##Platform_Name## Treemap control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drilldown 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown in ##Platform_Name## Treemap control

## Customize the header for treemap drilldown

You can add a header element as `<div>` and customize it to show the population of a particular country or continent on treemap drill-down.

To customize the header for treemap drill-down, follow the given steps:

**Step 1**:

Initialize the treemap and enable the drill-down option.

```javascript
// Initialize the treemap control
var treemap = new ej.treemap.TreeMap({
    palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
    enableDrillDown: true,
    format: 'n',
    useGroupingSeparator: true,
    dataSource: DrillDown,
    weightValuePath: 'Population',
    tooltipSettings: {
        visible: true,
        format: '${Name} : ${Population}'
    },
    leafItemSettings: {
        labelPath: 'Name',
        showLabels: false,
        labelStyle: { size: '0px' },
        border: { color: 'black', width: 0.5 }
    },
    levels: [
        { groupPath: 'Continent', fill: '#336699', border: { color: 'black', width: 0.5 } },
        { groupPath: 'States', fill: '#336699', border: { color: 'black', width: 0.5 } },
        { groupPath: 'Region', showHeader: false, fill: '#336699', border: { color: 'black', width: 0.5 } },
    ],
});

// Render the initialized treemap
treemap.appendTo('#container');
```

**Step 2**:

Show the population of a particular continent in the treemap `loaded` event. In this event, you can get the header element.

```javascript
    loaded: function (args) {
        var header = document.getElementById('header');
        var population = 0;
        for (var i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
            population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
        }
        header.innerHTML = 'Continent - Population : ' + population
    }
```

**Step 3**:

Customize the population for drilled countries or states in the header element when drill-down the treemap. The `drillEnd` event will be triggered when treemap is drilled.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/how-to/drill-down-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/how-to/drill-down-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/how-to/drill-down-cs1" %}