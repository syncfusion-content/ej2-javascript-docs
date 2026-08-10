---
layout: post
title: Add, Edit, and Remove Events in ##Platform_Name## Scheduler | Syncfusion
description: Learn how to add, edit, and remove events dynamically in the Syncfusion ##Platform_Name## Scheduler control.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add, Edit, and Remove Events in ##Platform_Name## Scheduler

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
