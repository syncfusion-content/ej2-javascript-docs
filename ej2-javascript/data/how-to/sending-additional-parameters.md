---
layout: post
title: ##Platform_Name## DataManager - Sending Additional Parameters to Server | Syncfusion
description: Pass additional custom parameters to the server with Syncfusion ##Platform_Name## DataManager using addParams method.
platform: ej2-javascript
control: Sending additional parameters to server in ##Platform_Name## DataManager
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sending additional parameters to server with ##Platform_Name## DataManager

In ##Platform_Name## applications, when working with remote data sources, it's often necessary to pass additional parameters to the server to customize the data retrieval process. These parameters could include filters, sorting criteria, or any other information required for server-side processing. 

The Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](../api/data/datamanager) provides a convenient method for including custom parameters in data requests, allowing for enhanced server-side processing. By utilizing the [addParams](../api/data/query/addparams) method of the [query](../api/data/query) class, helps to seamlessly integrate additional information into the data requests.

In the following example, the top 15 records of the service are displayed in the table using the `addParams` method of `query` class.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs8" %}
{% endif %}
