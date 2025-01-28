---
layout: post
title: Get dynamic icon in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about getting dynamic icons in the Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Get dynamic icon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Get dynamic icon in ##Platform_Name## TreeView control

In the TreeView control, you can obtain the original bound data using the [`getTreeData`](../../api/treeview#gettreedata)  method. If you pass the ID of a tree node to this method, it returns the corresponding node information. Otherwise, the information of all tree nodes will be returned. You can use this method to get the bound [`iconCss`](../../api/treeview/fieldsSettingsModel/#iconcss)  class in the [`nodeChecking`](../../api/treeview#nodechecking)  event. Please refer to the following sample for implementation details.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/icon-css-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/icon-css-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/icon-css-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/icon-css-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/icon-css-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/icon-css-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/icon-css-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/icon-css-cs1" %}
{% endif %}