---
layout: post
title: Header rows in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Header rows in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Header rows 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Header rows in ##Platform_Name## Scheduler control

The Timeline views can have additional header rows other than its default date and time header rows. It is possible to show individual header rows for displaying year, month and week separately using the [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property. This property is applicable only on the timeline views. The possible rows which can be added using [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property are as follows.

* `Year`
* `Month`
* `Week`
* `Date`
* `Hour`

> The `Hour` row is not applicable for Timeline month view.

The following example shows the Scheduler displaying all the available header rows on timeline views.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/header-rows-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/header-rows-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/header-rows-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/header-rows-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs1" %}
{% endif %}

## Display year and month rows in timeline views

To display the timeline Scheduler simply with year and month names alone, define the option `Year` and `Month` within the [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/header-rows-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/header-rows-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/header-rows-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/header-rows-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs2" %}
{% endif %}

## Display week numbers in timeline views

The week number can be displayed in a separate header row of the timeline Scheduler by setting `Week` option within [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/header-rows-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/header-rows-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/header-rows-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/header-rows-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs3" %}
{% endif %}

## Timeline view displaying dates of a complete year

It is possible to display a complete year in a timeline view by setting [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#interval) value as 12 and defining **TimelineMonth** view option within the `views` property of Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/header-rows-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/header-rows-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/header-rows-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/header-rows-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs4" %}
{% endif %}

## Customizing the header rows using template

You can customize the text of the header rows and display any images or formatted text on each individual header rows using the built-in [`template`](https://ej2.syncfusion.com/documentation/api/schedule/headerRows/#template) option available within the [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows)property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/header-rows-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs5/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/header-rows-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/header-rows-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-rows-cs5/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/header-rows-cs5/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs5" %}
{% endif %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/bootstrap5/schedule/overview.html) to knows how to present and manipulate data.
