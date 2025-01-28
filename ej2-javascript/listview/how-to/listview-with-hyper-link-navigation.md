---
layout: post
title: Hyper link navigation in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about ListView with hyper link navigation in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hyper link navigation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hyper link navigation in ##Platform_Name## ListView control

You can utilize the `anchor` tag along with the `href` attribute in the ListView's [`template`](../../api/list-view/#template) property for enabling navigation links.

```ts

let anchor_template: string = "<a target='_blank' href='${url}'>${name}</a>";

```

In the example below, a `ListView` is rendered with hyperlinks to different search engines. The links open in a new tab or window as specified by the `target='_blank'` attribute.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/navigation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/navigation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/navigation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/navigation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/navigation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/navigation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/navigation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/navigation-cs1" %}
{% endif %}
