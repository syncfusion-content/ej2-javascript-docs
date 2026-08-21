---
layout: post
title: Remote Data Bind in ##Platform_Name## Dropdown List | Syncfusion
description: Get the total item count for a remote-data-bound Syncfusion ##Platform_Name## Dropdown List via the actionComplete event or getItems method.
platform: ej2-javascript
control: Remote data bind 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to get data count in ##Platform_Name## Dropdown List

Before component rendering, you can get the total items count by using [actionComplete](../../api/drop-down-list/#actioncomplete) &nbsp;event with its result arguments. After rendering this component, you can get the total items count by using [getItems](../../api/drop-down-list/#getitems) method.

The following example demonstrate how to get the total items count.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/get-count-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/get-count-cs1" %}
{% endif %}