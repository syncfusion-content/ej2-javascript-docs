---
layout: post
title: Add edit and remove events in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Add edit and remove events in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add edit and remove events 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add edit and remove events in ##Platform_Name## Scheduler control

You can manually perform CRUD (Create, Update, Delete) operations on appointments using the [`addEvent`](https://ej2.syncfusion.com/documentation/api/schedule#addevent), [`saveEvent`](https://ej2.syncfusion.com/documentation/api/schedule#saveevent), and [`deleteEvent`](https://ej2.syncfusion.com/documentation/api/schedule#deleteevent) methods as demonstrated below.

## Normal event

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/app-crud-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/app-crud-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs1" %}

## Recurrence event

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/app-crud-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/app-crud-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs2" %}
