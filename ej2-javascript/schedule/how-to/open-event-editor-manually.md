---
layout: post
title: Open event editor manually in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open event editor manually 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open event editor manually in ##Platform_Name## Scheduler control

The Scheduler control provides flexibility in how you interact with event creation and editing. While the default behavior opens the editor when double-clicking on cells or appointments, you can also trigger the editor programmatically. This guide demonstrates different approaches to manually open the event editor window in your Scheduler application.

## Open Editor Window externally

The Scheduler allows the user to manually open the event editor on specific time or on certain events using [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method. To open the editor on specific range of time, user need to pass the cell details as first argument and **Add** as second argument whereas to open it on event pass that event detail and **Save** as arguments. In the following code example, on clicking the respective button will open the respective editor window manually.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/open-editor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/open-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/open-editor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/open-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs1" %}
{% endif %}

## Open editor window on single click

By default, Scheduler Editor window will open when double clicking the cells or appointments. You can also open the editor window with single click by using [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method in [`eventClick`](https://ej2.syncfusion.com/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/documentation/api/schedule#cellclick) events of scheduler and setting false to [`showQuickInfo`](https://ej2.syncfusion.com/documentation/api/schedule#showquickinfo). The following example shows how to open editor window on single click of cells and appointments.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/default-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/default-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/default-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/default-cs5" %}
{% endif %}
