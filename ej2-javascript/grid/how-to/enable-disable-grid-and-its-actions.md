---
layout: post
title: Enable disable grid and its actions in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Enable disable grid and its actions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable grid and its actions in ##Platform_Name## Grid control

You can enable or disable the Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid and its actions by applying or removing specific CSS styles. This functionality is particularly useful in scenarios where interactions need to be restricted. Follow the steps below to implement this feature.

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```
    .disablegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Grid in the [click](../../api/button#click) event handler of Button.

```ts
    document.getElementById('primarybtn').addEventListener('click', () => {
        if (grid.element.classList.contains('disablegrid')) {
            grid.element.classList.remove('disablegrid');
            document.getElementById("GridParent").classList.remove('wrapper');
        }
        else {
            grid.element.classList.add('disablegrid');
            document.getElementById("GridParent").classList.add('wrapper');
        }
    });

```

In the example below, clicking the button will toggle the enable/disable state of the Grid and its actions:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/disablegrid-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/disablegrid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/disablegrid-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/disablegrid-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/disablegrid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/disablegrid-cs2" %}
{% endif %}