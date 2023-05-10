---
layout: post
title: Data source binding and custom menu items in ##Platform_Name## Menu control | Syncfusion
description: Learn here all about Data source binding and custom menu items in Syncfusion ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data source binding and custom menu items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data source binding and custom menu items in ##Platform_Name## Menu control

## Data binding

The Menu supports data source bindings such as array of JavaScript objects that can be structured as either `hierarchical` or `self-referential` data.

### Hierarchical data

The Menu can be populated with hierarchical data source by assigning it to the [`items`](../api/menu/menuItemModel#items) property, and the fields with corresponding keys can be mapped to the [`fields`](../api/menu/fieldSettingsModel) property.

#### JSON data

The Menu can generate its menu items through an array of complex data source by mapping fields from the [`fields`](../api/menu/fieldSettingsModel) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs2" %}
{% endif %}

#### Data Service

In application level, remote data binding can be achieved using [`DataManager`](https://ej2.syncfusion.com/documentation/data). To create Menu, assign `items` property with resultant data from [`callback`](https://ej2.syncfusion.com/documentation/api/data/deferred/#then) function.

The following example displays five employees' **FirstName** from **Employees** table and **ShipName** details from **Orders** table of the `Northwind` Data Service.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs3" %}
{% endif %}

### Self-referential data

Menu can be populated from self-referential data structure that contains array of JSON objects with `parentId` mapping.

In the following example, the **id**, **pId**, and **text** columns from self-referential data have been mapped to the [`itemId`](../../api/menu/fieldSettingsModel/#itemid), [`parentId`](../../api/menu/fieldSettingsModel/#parentid), and [`text`](../../api/menu/fieldSettingsModel/#text) fields, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs4" %}
{% endif %}

### HTML element

The Menu can be initialized using `<UL>` element that contains a collection of `<LI>` elements. A `<LI>` item acts as a menu item of the Menu, and the sub `<UL>` element inside the `<LI>` element acts as a sub menu item of its preceding menu item.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/ul-render-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/ul-render-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/ul-render-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/ul-render-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/ul-render-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/ul-render-cs1" %}
{% endif %}

## Custom menu items

The Menu can be customized using Essential JS2 [Template engine](https://ej2.syncfusion.com/documentation/common/template-engine) to render the elements.

To customize menu items in your application, set your customized template string to the [`template`](../api/menu#template) property. In the following example, the menu has been rendered with customized menu items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/templates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/templates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/templates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/templates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/templates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/templates-cs1" %}
{% endif %}

>To prevent sub menu closing, set `args.cancel` to `true` in [`beforeClose`](../api/menu#beforeclose) event.

## See Also

* [Render menu with items](./getting-started#getting-started)
