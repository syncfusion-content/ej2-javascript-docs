---
layout: post
title: Advanced functionalities in ##Platform_Name## DataManager| Syncfusion
description: Learn here all about Advanced functionalities in Syncfusion ##Platform_Name## DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Advanced functionalities
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Advanced scenarios in Syncfusion ##Platform_Name## DataManager

This section covers advanced features such as offline mode, load on demand, deferred execution, and error handling in the Syncfusion ##Platform_Name## DataManager.

## Offline mode

Offline mode in Syncfusion ##Platform_Name## DataManager enables full client-side data processing by fetching data from the server once and then performing all subsequent operations (such as filtering, sorting, paging, and grouping) locally, without additional network requests.

This feature is ideal for:

* Applications with static or infrequently changing datasets.

* Reducing repeated server calls to enhance performance.

* Supporting offline first workflows where a persistent internet connection is not guaranteed.

You can enable this feature by setting the `offline` property to **true** when creating the DataManager instance. When the `offline` property is set to **true**, the DataManager fetches data from the server once and then performs all subsequent operations on the locally stored data, ensuring faster and responsive UI interactions without further server round-trips.

In remote data binding, each call to [executeQuery](../api/data/dataManager/#executequery) sends a request to the server for processing to avoid repeated server postbacks, you can set the DataManager to load all data during initialization and handle query processing entirely on the client-side. 

The following sample demonstrates how to enable `offline` mode:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/advanced-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/advanced-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/advanced-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/advanced-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/advanced-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/advanced-cs1" %}
{% endif %}

## Load on demand

Load on demand is an efficient technique that optimizes performance and reduces bandwidth usage by fetching only a specific subset of data from the server, rather than loading the entire dataset at once. This approach is particularly beneficial for applications dealing with large datasets, ensuring faster load times and improved responsiveness.

You can achieve load on demand using the [Query.page](../api/data/query/#page) method in Syncfusion ##Platform_Name## DataManager. This method requests a specific page of data from the server, based on the given page number and page size.

For example, an employee directory in an HR portal displays thousands of records. Instead of loading all employees at once, the Grid uses `Query.page` to retrieve only the records for the current page, loading data on demand as users navigate through pages.

The following code example demonstrates the implementation of load on demand using **DataManager**:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/advanced-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/advanced-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/advanced-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/advanced-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/advanced-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/advanced-cs2" %}
{% endif %}

## Deferred execution & error handling

Deferred execution & error handling is a technique used in asynchronous programming to manage operations that take time to complete, such as network requests, loading data from a server or file access. 

This approach improves code readability, maintainability, and robustness by separating the logic for successful execution (`then`, `resolve`) from error handling (`catch`, `reject`). It enables chaining of asynchronous tasks and ensures that errors are caught and managed gracefully, preventing unexpected application crashes.

To achieve this, the following concepts are used:

1. [catch](../api/data/deferred/#catch)- Handles errors or rejections that occur during the asynchronous operation.

2. [promise](../api/data/deferred/#promise)- Represents the eventual completion (or failure) of an asynchronous operation and its resulting value. If it fails, it passes an error or reason to the rejection handler for appropriate processing.

3. [reject](../api/data/deferred/#reject)- Indicates that the asynchronous operation has failed and passes an error or reason to the handler.

4. [resolve](../api/data/deferred/#resolve)- Indicates that the asynchronous operation has completed successfully and passes the result to the handler.

5. [then](../api/data/deferred/#then)- Executes the logic that run after the asynchronous operation completes successfully. It allows chaining of further actions.

The following sample demonstrates how to use deferred execution & error handling:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/advanced-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/advanced-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/advanced-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/advanced-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/advanced-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/advanced-cs3" %}
{% endif %}