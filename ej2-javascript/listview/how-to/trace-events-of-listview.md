---
layout: post
title: Trace events of ListView in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about tracing events of ListView in the Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Trace events of ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Trace events of ListView in ##Platform_Name## ListView control

The ListView control triggers events based on its actions. These events can be used as extension points to perform custom operations. Follow the steps below to trace the ListView events:

1. Render the ListView with [dataSource](../../api/list-view/#datasource) and bind the [`actionBegin`](../../api/list-view/#actionbegin), [`actionComplete`](../../api/list-view/#actioncomplete), and [`select`](../../api/list-view/#select) events.

2. Perform custom operations in the actionBegin, actionComplete, and select events.

3. Provide event log details for the actionBegin and actionComplete events, which will be displayed in the event trace panel when a ListView action starts and the dataSource is bound successfully.

4. Get the selected item details from the [`SelectEventArgs`](../../api/list-view/selectEventArgs) during the select event, and display the selected list item text in the event trace panel while selecting list items.

5. Use the clear button to remove event trace information.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/events-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/events-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/listview/events-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/events-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/events-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/listview/events-cs1" %}

{% endif %}