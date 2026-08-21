---
layout: post
title: How to close on outside click in ##Platform_Name## Dialog | Syncfusion
description: Close the ##Platform_Name## Dialog when clicking outside its region by calling the hide method, with closeOnEscape configurable via a property.
platform: ej2-javascript
control: Close dialog while click on outside of dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to close on outside click in ##Platform_Name## Dialog

By default, dialog can be closed by pressing Esc key and clicking the close icon on the right of dialog header. It can also be closed by clicking outside of the dialog using hide method. Set the [CloseOnEscape](https://ej2.syncfusion.com/documentation/api/dialog/index-default#closeonescape) property value to false to prevent closing of the dialog when pressing Esc key.

In the following sample, dialog is closed when clicking outside the dialog area using [hide](https://ej2.syncfusion.com/documentation/api/dialog/index-default#hide) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-close-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dialog/dialog-close-cs1" %}