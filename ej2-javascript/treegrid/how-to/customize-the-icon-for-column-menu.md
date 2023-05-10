---
layout: post
title: Customize the icon for column menu in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Customize the icon for column menu in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the icon for column menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icon for column menu in ##Platform_Name## Treegrid control

You can customize the column menu icon by overriding the default Tree Grid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below,

```
    .e-treegrid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e903";
    }
```

In the below sample, Tree Grid is rendered with a customized column menu icon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/custom-column-menu-icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/custom-column-menu-icon-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.