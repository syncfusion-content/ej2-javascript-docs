---
layout: post
title: Change load limited data in member editor in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Change load limited data in member editor in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Change load limited data in member editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Change load limited data in member editor in ##Platform_Name## Pivotview control

In the filter dialog, user can set the limit to display field values while loading the large data. Based on this limit, the initial loading will complete quickly without any performance constraint. And user can use search option to refining the field values from exceeded limit. You can refine the data further by using search option and a message with the remaining data count will be displayed in member editor. The data limit can be set in the property `maxNodeLimitInEditor`.

By default, the property holds the value `1000`.

> The property is available in both PivotView and PivotFieldList components.

In the below example, the data in the member editor limits to 100. So, the member editor of the field `ProductID` shows only its first 100 members from its 1000 members.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-grid/pivot-grid-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/pivot-grid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot-grid-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-grid/pivot-grid-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/pivot-grid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot-grid-cs2" %}
{% endif %}
