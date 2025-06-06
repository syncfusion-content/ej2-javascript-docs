---
layout: post
title: Show spinner while loading list items in ##Platform_Name## ListView | Syncfusion
description: Learn how to display a spinner while loading list items from remote data in Syncfusion ##Platform_Name## ListView control of Essential JS 2 and more.
platform: ej2-javascript
control: Display spinner for list item loading from remote data
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display spinner for list item loading from remote data in ##Platform_Name## ListView control

Features of the ListView control, such as remote data binding, can take some time to fetch data from the corresponding dataSource/remote URL. In this scenario, you can use the EJ2 [`Spinner`](../../spinner/) to enhance the appearance of the UI. This section explains how to load a spinner control to improve the user experience.

Refer to the following code sample to render the spinner control.

```ts
    createSpinner({
        target: document.getElementById('spinner')
    });
    showSpinner(document.getElementById('spinner'));
```

Refer to the following code sample to render the ListView control.

```ts

let listviewInstance: ListView = new ListView({
    //Bind the DataManager instance to the dataSource property
    dataSource: new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    }),

    //Bind the Query instance to the query property
    query: new Query().from('Products').select('ProductID,ProductName').take(10),

    //Map the appropriate columns to the fields property
    fields: { id: 'ProductID', text: 'ProductName' },

    //Set the header tittle to the list
    headerTitle: 'Product Name',
    showHeader: true,
    width:"300",
    actionComplete  : oncomplete
});

//Render the initialized ListView
listviewInstance.appendTo("#element");
```

Here, the data is fetched from the `Northwind` Service URL; it takes a few seconds to load the data. To enhance the UI, the spinner control has been rendered initially. After the data is loaded from the remote URL, the spinner control will be hidden in the ListView [`actionComplete`](../../api/list-view/#actioncomplete) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/spinner-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/spinner-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/spinner-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/spinner-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/spinner-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/spinner-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/spinner-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/spinner-cs1" %}
{% endif %}
