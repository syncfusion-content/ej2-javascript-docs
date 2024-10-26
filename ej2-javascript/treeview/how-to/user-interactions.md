---
layout: post
title: User interaction in ##Platform_Name## Treeview control | Syncfusion
description: Learn here all about User interaction in Syncfusion ##Platform_Name## Treeview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: User interaction
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in ##Platform_Name## Treeview control

The below methods were available in TreeView, and we can walk through one by one.

* addNodes
* removeNodes
* updateNode
* refreshNode
* moveNodes

## addNodes

TreeView allows user to add the collection of TreeView nodes based on target and index position by using the `addNodes` method. You can add parent as well as the child by passing its id and target as arguments. Here, you can achieve this by using button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/user-interaction/addNodes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/addNodes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/addNodes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/user-interaction/addNodes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/addNodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/addNodes" %}
{% endif %}

## removeNodes

TreeView allows user to remove the collection of TreeView nodes by passing the array of node id by using the `removeNodes` method. You can remove parent as well as the child by passing its id value. Here, you can achieve this by using button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/user-interaction/removeNodes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/removeNodes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/removeNodes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/user-interaction/removeNodes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/removeNodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/removeNodes" %}
{% endif %}

## updateNode

TreeView allows user to update TreeView nodes by passing the target and the text to be shown by using the `updateNode` method. You can also need to enable the `allowEditing` property. Here, you can achieve this by using button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/user-interaction/updateNode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/updateNode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/updateNode" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/user-interaction/updateNode/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/updateNode/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/updateNode" %}
{% endif %}

## refreshNode

TreeView allows user to refresh TreeView nodes with new changes by passing the target and the new changes to be shown by using the `refreshNode` method while using the nodeTemplate property. Here, you can achieve this by using button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/user-interaction/refreshNode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/refreshNode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/refreshNode" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/user-interaction/refreshNode/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/refreshNode/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/refreshNode" %}
{% endif %}

## moveNodes

TreeView allows user to move TreeView node by passing the node to be moved, the target where to be moved, index of the moved node to be placed in target by using the `moveNodes` method. Here, you can achieve this by using button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/user-interaction/moveNodes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/moveNodes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/moveNodes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/user-interaction/moveNodes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/user-interaction/moveNodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interaction/moveNodes" %}
{% endif %}

