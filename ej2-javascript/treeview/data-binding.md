---
layout: post
title: Data binding in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## TreeView control

The TreeView control provides the option to load data from either local data sources or remote data services. This can be done through the `dataSource` property, which is a member of the [fields](../api/TreeView#fields) property. The `dataSource` property supports arrays of JavaScript objects and [DataManager](../api/data/dataManager/). It also supports different kinds of data services, such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

TreeView has `load on demand` (Lazy load) by default. It reduces bandwidth usage when consuming large amounts of data. It initially loads first-level nodes, and when a parent node is expanded, it loads child nodes based on the `parentID/child` member.

By default, [`loadOnDemand`](../api/treeview#loadondemand)  is set to true. By disabling this property, all the tree nodes are rendered at the beginning itself.

You can use the [`dataBound`](../api/treeview#databound) event to perform actions. This event is triggered once the data source is populated in the TreeView.

## Local data

To bind local data to the TreeView, you can assign a JavaScript object array to the [dataSource](../api/treeview/fieldsSettingsModel#datasource) property. The TreeView control requires three fields (ID, text, and parentID) to render the local data source. When mapper fields are not specified, it takes the default values as the mapping fields. The local data source can also be provided as an instance of the `DataManager`. It supports two kinds of local data binding methods:

* Hierarchical data

* Self-referential data

### Hierarchical data

TreeView can be populated with hierarchical data sources that contain nested arrays of JSON objects. You can directly assign hierarchical data to the [dataSource](../api/treeview/fieldsSettingsModel#datasource) property and map all the field members with corresponding keys from the hierarchical data to the `fields` property.

In the following example, the **code**, **name**, and **countries** columns from hierarchical data have been mapped to the **id**, **text**, and **child** fields, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/data-binding/hierarchical-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/data-binding/hierarchical-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/data-binding/hierarchical-data-cs1" %}
{% endif %}

### Self-referential data

TreeView can be populated from a self-referential data structure that contains an array of JSON objects with [parentID](../api/treeview/fieldsSettingsModel/#parentid) mapping.

You can directly assign self-referential data to the `dataSource` property and map all the field members with corresponding keys from the self-referential data to the [fields](../api/treeview#fields) property.

To render the root-level nodes, specify the parentID as null, or there is no need to specify the parentID in `dataSource`.

In the following example, the **id**, **pid**, **hasChild**, and **name** columns from self-referential data have been mapped to the **id**, **parentID**, **hasChildren**, and **text** fields, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/data-binding/self-referential-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/data-binding/self-referential-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/data-binding/self-referential-data-cs1" %}
{% endif %}

## Remote data

TreeView can also be populated from a remote data service with the help of the [DataManager](../api/data/dataManager/) control and `Query` property.

It supports different kinds of data services, such as OData, OData V4, Web API, URL, and JSON, with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the `dataSource` property. To interact with the remote data source, you have to provide the endpoint `url`.

The `DataManager`, which acts as an interface between the service endpoint and the TreeView, requires the following information to interact with the service endpoint properly:

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

Adaptor is responsible for processing response and request from/to the service endpoint. The `@syncfusion/ej2-data` package provides some predefined adaptors  designed to interact with service endpoints. They are,

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is  used to fetch data from remote services. The **EmployeeID**, **FirstName**, and **EmployeeID**
columns from Employees table have been mapped to **id**, **text**, and **hasChildren** fields respectively for first level nodes.

The **OrderID**, **EmployeeID**, and **ShipName** columns from orders table have been mapped to **id**, **parentID**, and **text** fields respectively for second level nodes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/data-binding/remote-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/data-binding/remote-data-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/data-binding/remote-data-cs1" %}
{% endif %}