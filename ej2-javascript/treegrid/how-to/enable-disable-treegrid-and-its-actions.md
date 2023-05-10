---
layout: post
title: Enable disable treegrid and its actions in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Enable disable treegrid and its actions in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Enable disable treegrid and its actions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable treegrid and its actions in ##Platform_Name## Treegrid control

You can enable/disable the Tree Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the Tree Grid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Tree Grid.

```
    .disabletreegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Tree Grid in the click event handler of Button.

```ts
    document.getElementById('primarybtn').addEventListener('click', () => {
        if (treegrid.element.classList.contains('disabletreegrid')) {
            treegrid.element.classList.remove('disabletreegrid');
            document.getElementById("TreeGridParent").classList.remove('wrapper');
        }
        else {
            treegrid.element.classList.add('disabletreegrid');
            document.getElementById("TreeGridParent").classList.add('wrapper');
        }
    });

```

In the below demo, the button click will enable/disable the Tree Grid and its actions.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/disabletreegrid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/disabletreegrid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treegrid/disabletreegrid-cs1" %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.