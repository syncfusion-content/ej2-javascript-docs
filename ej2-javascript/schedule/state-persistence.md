---
layout: post
title: State persistence in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about State persistence in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: State persistence 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in ##Platform_Name## Scheduler control

State persistence allowed Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule/#currentview), [`selectedDate`](.https://ej2.syncfusion.com/documentation/api/schedule/#selecteddate) and Scroll position values in the [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance even if the browser is refreshed or if you move to the next page within the browser. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/documentation/api/schedule/#enablepersistence) property which is set to false by default. When it is set to true, [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule/#currentview), [`selectedDate`](https://ej2.syncfusion.com/documentation/api/schedule/#selecteddate) and Scroll position values of the scheduler component will be retained even after refreshing the page.

> **Note**: Scheduler `id` is Essential<sup style="font-size:70%">&reg;</sup> to set state persistence.

The following sample demonstrates how to set state persistence of the Scheduler component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/row-auto-height-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/row-auto-height-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/row-auto-height-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/row-auto-height-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/row-auto-height-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/row-auto-height-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/row-auto-height-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/row-auto-height-cs4" %}
{% endif %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
