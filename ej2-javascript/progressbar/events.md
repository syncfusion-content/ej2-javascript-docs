---
layout: post
title: Events in ##Platform_Name## Progressbar control | Syncfusion
description: Learn here all about Events in Syncfusion ##Platform_Name## Progressbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Events 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## Progressbar control

This section describes the Progress Bar events that will be triggered when appropriate actions are performed. Following events are available in the Progress Bar.

* [`valueChanged`](https://ej2.syncfusion.com/javascript/documentation/api/progressbar/#valuechanged) - When the progress value changes, this event is triggered.

* [`progressCompleted`](https://ej2.syncfusion.com/javascript/documentation/api/progressbar/#progresscompleted) - When the progress reaches the maximum value, this event is triggered.

* [`animationComplete`](https://ej2.syncfusion.com/javascript/documentation/api/progressbar/#animationcomplete) - When animation is enabled and the progress to the value is reached, this event is triggered.

* `annotationRender` - Before each annotation is rendered, this event is triggered.

* [`textRender`](https://ej2.syncfusion.com/javascript/documentation/api/progressbar/#textrender) - Before the progress text is rendered, this event is triggered

* [`load`](https://ej2.syncfusion.com/javascript/documentation/api/progressbar/#load) - When the control begins to render, this event is triggered.

* [`loaded`](https://ej2.syncfusion.com/javascript/documentation/api/progressbar/#loaded) - After the control has been rendered, this event is triggered.

* `resized` - When the window is resized, this event is triggered.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progressbar/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progressbar/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/progressbar/events-cs1" %}