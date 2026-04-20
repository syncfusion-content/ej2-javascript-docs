---
layout: post
title: ##Platform_Name## DataManager - Manipulation | Syncfusion
description: Perform CRUD operations in Syncfusion ##Platform_Name## DataManager insert, update, remove records and batch edits.
control: Manipulation
publishingplatform: ##Platform_Name## 
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---

# Manipulation in ##Platform_Name## DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## DataManager enables easy data manipulation, including creating, updating, and deleting records. It works with both local and remote data sources and offers a consistent interface for handling data operations.

Data manipulation refers to performing CRUD (Create, Read, Update, Delete) actions on a data source. These operations are crucial for managing application data. [DataManager](../api/data/dataManager) streamlines this process by providing a unified approach to executing CRUD operations across different data sources.

## Insert

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a way to add new records to a data source. The [insert](../api/data/dataManager#insert) method allows new entries to be added programmatically.

Insert operations in DataManager enable adding new records by collecting input from form elements and triggering the insertion programmatically, as shown in the example below.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/manipulation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/manipulation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/manipulation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-cs1" %}
{% endif %}

> In remote data sources, when the primary key field is an identity field, then it is advised to return the created data in the response.

## Update

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a powerful way to update existing records in a data source without replacing the entire dataset.

Update operations allow modifying specific records through the [update](../api/data/dataManager#update) method in the [DataManager](../api/data/dataManager) class, ensuring accuracy and consistency in the data. To use the `update` method, a "KeyField (primary key)" must be defined. This unique identifier allows `DataManager` to accurately locate and update the corresponding record.

The example includes an input box for editing values and a button that triggers the `update` method to apply the changes efficiently.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/manipulation-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/manipulation-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/manipulation-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-cs2" %}
{% endif %}

> Primary key name is required by the `update` method to find the record to be updated.

## Remove

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides a seamless way to delete specific records from a data source without affecting the entire dataset. The [remove](../api/data/dataManager#remove) method handles this operation, and defining a "KeyField (primary key)" is required to uniquely identify each record.

The KeyField parameter enables the `remove` method to accurately locate and delete the intended entry. The example demonstrates how to delete a record using `DataManager`, with an input box to enter the KeyField value and a button that triggers the remove method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/manipulation-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/manipulation-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/manipulation-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-cs3" %}
{% endif %}

> Primary key name and its value are required to find the record to be removed.

## Batch edit operation

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides built‑in support for batch processing of CRUD (Create, Read, Update, Delete) operations, enabling efficient handling of multiple edits in a single request. This approach improves performance by grouping multiple add, update, and remove actions, thereby reducing server interactions and overall network overhead.

Batch edits are managed through the [saveChanges](../api/data/dataManager#savechanges) method, which processes all pending operations together. The example demonstrates this workflow by using input fields to gather the required data for each action and buttons to enqueue the corresponding operations. Finally, the Save Changes button commits all modifications to the data source through the `saveChanges` method.

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/manipulation-local-batch/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-local-batch/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-local-batch" %}

{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/manipulation-local-batch/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-local-batch/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-local-batch" %}
{% endif %}

