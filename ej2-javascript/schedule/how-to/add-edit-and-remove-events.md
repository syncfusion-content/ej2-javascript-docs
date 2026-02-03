---
layout: post
title: Add edit and remove events in ##Platform_Name## Scheduler | Syncfusion
description: Learn here all about Add edit and remove events in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add, edit, and remove events in ##Platform_Name## Scheduler control

You can manually perform CRUD (Create, Read, Update, Delete) operations on appointments in the Scheduler by using the following methods:

- [`addEvent`](https://ej2.syncfusion.com/documentation/api/schedule#addevent) – to create new event(s)
- [`saveEvent`](https://ej2.syncfusion.com/documentation/api/schedule#saveevent) – to update or create an event
- [`deleteEvent`](https://ej2.syncfusion.com/documentation/api/schedule#deleteevent) – to remove event(s)

These methods are especially useful when you want to programmatically manage appointments without using the built-in event editor.

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
