---
layout: post
title: State persistence in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about State persistence in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: State persistence 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in ##Platform_Name## Pivotview control

State persistence allows user to maintain the current state of the component along with its report bounded in the browser local storage (cookie). Even if the browser is refreshed or if you move to the next page within the browser, components state will be persisted. State persistence stores the Pivot Table object in the local storage when [`enablePersistence`](https://ej2.syncfusion.com/documentation/api/pivotview#enablepersistence) property in pivot table is set to **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/state-persistence-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/state-persistence-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/state-persistence-cs5" %}

# Save and Load Pivot Layout

You can save the current layout of the pivot table by using `getPersistData` in string format. The saved layout can be loaded to pivot table any time by passing the saved data as a parameter to `loadPersistData` method in the pivot table.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/state-persistence-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/state-persistence-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/state-persistence-cs6" %}