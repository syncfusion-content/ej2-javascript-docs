---
layout: post
title: Customize nested ListView as breadcrumbs in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about customizing nested ListView as breadcrumbs in the Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize nested ListView as breadcrumbs
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize nested ListView as breadcrumbs in ##Platform_Name## ListView control

The ListView header can be customized using the [headerTemplate](https://ej2.syncfusion.com/documentation/api/list-view/#headertemplate) property. Here, we customize the header of a nested ListView as breadcrumbs using the headerTemplate property. This means that while navigating to the child data of a list item, the header data is customized with the selected data path. For example, if the header of the nested ListView is "Continent" and you select a list item (Asia), the header will be customized as "Continent>Asia."

* This customization is achieved during the front and back navigation of list items using the `actionComplete` event of ListView.
* On [actionComplete](../../api/list-view/#actioncomplete), we append the selected text to the header element.
* During back navigation, we remove the last appended span from the header template.

We can also navigate to the desired child level by clicking list items appended in the customized header. For example, consider the header of a nested ListView as `Continent>Asia>India`. If you want to navigate to the Continent level of the ListView, you can click "Continent" in the header.

N> In each navigation we have calculated the appended span tag length in `calculateLevelForElements` method to update header.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/listview/bread-crumbs-cs1/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/bread-crumbs-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.js %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/listview/bread-crumbs-cs1/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/bread-crumbs-cs1" %}
{% endif %}