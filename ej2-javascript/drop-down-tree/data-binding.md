---
layout: post
title: Data Binding in ##Platform_Name## Dropdown Tree | Syncfusion
description: Bind local or remote data to Syncfusion ##Platform_Name## Dropdown Tree via dataSource, with loadOnDemand to fetch child nodes on expand.
platform: ej2-javascript
control: Data binding
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in ##Platform_Name## Dropdown Tree

The Dropdown Tree control provides an option to load data either from local data sources or remote data services. This can be done through the [`dataSource`](../api/drop-down-tree/fieldsModel#datasource) property, which is a member of the [`fields`](../api/drop-down-tree#fields) property. The [`dataSource`](../api/drop-down-tree/fieldsModel#datasource) property supports an array of JavaScript objects and `DataManager`. It also supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

The Dropdown Tree has a `load on demand` (lazy load) option. It reduces bandwidth usage when consuming large amounts of data. By default, [`loadOnDemand`](../api/drop-down-tree/treeSettingsModel#loadondemand) is set to `false`. When this property is enabled, the control loads the first-level items first, and when a parent item is expanded, it loads the child items based on the `parentValue/child` mapping.

## Local data

To bind local data to the Dropdown Tree, you can assign a JavaScript object array to the [`dataSource`](../api/drop-down-tree/fieldsModel#datasource) property.

The Dropdown Tree control requires three fields (value, text, and parentValue) to render a local data source. When mapper fields are not specified, it takes the default values as the mapping fields. A local data source can also be provided as an instance of the `DataManager`. It supports two kinds of local data binding methods:

* Hierarchical data

* Self-referential data

### Hierarchical data

The Dropdown Tree can be populated with a hierarchical data source that contains a nested array of JSON objects. You can directly map the hierarchical data and field members with corresponding key values from the hierarchical data to the [`fields`](../api/drop-down-tree#fields) property.

In the following example, the **code**, **name**, and **countries** columns from the hierarchical data have been mapped to the **value**, **text**, and **child** fields, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/data-binding/hierarchical-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/hierarchical-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/hierarchical-data-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/hierarchical-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/data-binding/hierarchical-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/hierarchical-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/hierarchical-data-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/hierarchical-data-cs1" %}
{% endif %}

### Self-referential data

The Dropdown Tree can be populated using the self-referential data structure that contains an array of JSON objects with a [`parentValue`](../api/drop-down-tree/fieldsModel#parentvalue) mapping.

You can directly assign the self-referential data and map all the field members with corresponding key values from the self-referential data to the [`fields`](../api/drop-down-tree#fields) property.

To render root-level items, specify the `parentValue` as `null` or do not specify the `parentValue` in the `dataSource`.

In the following example, the **id**, **pid**, **hasChild**, and **name** columns from the self-referential data have been mapped to the **value**, **parentValue**, **hasChildren**, and **text** fields, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/self-referential-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/self-referential-data-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/self-referential-data-cs1" %}
{% endif %}

## Remote data

The Dropdown Tree can also be populated from a remote data service with the help of the [`DataManager`](../api/data/dataManager) control and the `Query` property.

It supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the [`dataSource`](../api/drop-down-tree/fieldsModel#datasource). To interact with the remote data source, you must provide the endpoint `url`.

The `DataManager` acts as an interface between the service endpoint and the Dropdown Tree and requires the following information to interact with the service endpoint properly:

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

Adaptor is responsible for processing response and request from/to the service endpoint. The `@syncfusion/ej2-data` package provides some pre-defined adaptors designed to interact with service endpoints. They are,

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is used to fetch data from the remote services. The **EmployeeID** and **FirstName** columns from the `Employees` table have been mapped to the **value** and **text** fields, respectively, and the **EmployeeID** column is also mapped to the **hasChildren** field for the first-level items.

The **OrderID**, **EmployeeID**, and **ShipName** columns from the `Orders` table have been mapped to the **value**, **parentValue**, and **text** fields, respectively, for the second-level items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/remote-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/remote-data-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/remote-data-cs1" %}
{% endif %}

## Prevent Node selection

You can prevent the selection of individual tree nodes by using the [`selectable`](../api/drop-down-tree/fieldsModel#selectable) property. Tree node selection is not allowed when this property is disabled.

In the following sample, the `selectable` property is disabled to prevent the selection of parent nodes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/data-binding/prevent-node-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/prevent-node-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/prevent-node-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/prevent-node-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/data-binding/prevent-node-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/data-binding/prevent-node-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/data-binding/prevent-node-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/data-binding/prevent-node-cs1" %}
{% endif %}
