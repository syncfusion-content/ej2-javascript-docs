---
layout: post
title: How to integrate treeview in ##Platform_Name## Accordion | Syncfusion
description: Render a TreeView inside the Syncfusion ##Platform_Name## Accordion by initializing the component on the expanding event.
platform: ej2-javascript
control: Integrate treeview inside the accordion 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate treeview within ##Platform_Name## Accordion

Accordion supports to render other Essential<sup style="font-size:70%">&reg;</sup> JS 2 Components by using content property. You can give content as an element string like below, for initializing the component.

```js
content: '<div id="element"> </div>'
```

The other component can be rendered with the use of provided events, such as [`clicked`](../../api/accordion#clicked) and [`expanding`](../../api/accordion#expanding).

The following procedure is to render a TreeView within the Accordion,

* Import the `TreeView` module from `ej2-navigations`, for adding TreeView. Please refer the [TreeView initialization steps](../../treeview/getting-started)

* You can initialize the TreeView component in [`expanding`](../../api/accordion#expanding) event, by getting the element and defining the required TreeView properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-treeview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-treeview-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/accordion/accordion-treeview-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-treeview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-treeview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-treeview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-treeview-cs1" %}
{% endif %}
