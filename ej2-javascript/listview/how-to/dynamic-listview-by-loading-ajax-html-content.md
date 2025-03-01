---
layout: post
title: Load ajax html content dynamically in ##Platform_Name## ListView | Syncfusion
description: Learn here all about Dynamic ListView by loading ajax html content in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamic ListView by loading ajax html content
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic ##Platform_Name## ListView control by loading ajax html content

We can set external `HTML` page content as a [`template`](../../api/list-view/#template) for our `ListView` control by making use of an `AJAX` call.

```ts

let template: string;
let ajax: Ajax = new Ajax('https://ej2.syncfusion.com/documentation/code-snippet/listview/ajax-cs1/template', 'GET', false);
ajax.onSuccess = (e: string)=>{
    template = e;
}

ajax.send();

```

In the sample below, we have rendered a smartphone settings template from an external `HTML` file.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/ajax-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/ajax-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/ajax-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/ajax-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/ajax-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/ajax-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/ajax-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/ajax-cs1" %}
{% endif %}