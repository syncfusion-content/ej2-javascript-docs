---
layout: post
title: Data binding in ##Platform_Name## Bullet chart control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Bullet chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Data binding in ##Platform_Name## Bullet chart control

The `dataSource` property accepts a collection of values as input that helps to display measures, and compares them to a target bar. To display the actual and target bar, specify the property from the datasource into the `valueField` and `targetField` respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/dataSource-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/dataSource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/dataSource-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/dataSource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/dataSource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/dataSource-cs1" %}
{% endif %}