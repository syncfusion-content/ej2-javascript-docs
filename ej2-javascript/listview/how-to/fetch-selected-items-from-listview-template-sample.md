---
layout: post
title: Fetch selected items from ListView template sample in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about fetching selected items from a ListView template sample in the Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Fetch selected items from ListView template sample
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Fetch selected items from ListView template sample in ##Platform_Name## ListView control

Users can select single or multiple items in the ListView control.

By default, the [`dataSource`](../../api/list-view/#datasource) id and text are mapped in the default rendering of the ListView, which ensures proper data retrieval of selected items. However, in a custom template, the dataSource and the corresponding mappings (text, id, and elements rendered inside the li element) may vary depending on the application's requirements.

Therefore, it is crucial to map the id attribute to ListView items using the [`fields`](../../api/list-view/#fields) of the [`dataSource`](../../api/list-view/#datasource) to correctly retrieve selected item data when working with custom templates. Refer to the code snippet below for a template sample.

```ts

// Initialize ListView control
 let listObj: ListView = new ListView({

    //Set defined data to dataSource property
    dataSource: dataSource,

    //Map the appropriate columns to fields property
    fields: { text: 'Name', id:'Name'},

    //Set customized template
    template: template,

    enableRtl: true,

    //ListView Select event
    select: onSelect

});

//Render initialized ListView control
listObj.appendTo('#listview');


```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/listview-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/listview-template-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/listview-template-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/listview-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/listview-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/listview-template-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/listview-template-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/listview-template-cs1" %}
{% endif %}