---
layout: post
title: Customize ListView as grid layout in ##Platform_Name## | Syncfusion
description: Learn here all about customize ListView as grid layout in Syncfusion ##Platform_Name##, it's elements and more.
platform: ej2-javascript
control: Customize ListView as grid layout
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize ListView as grid layout in ##Platform_Name##

In ListView, list items can be rendered in a grid layout with the following data manipulations.

* Add Item
* Remove Item
* Sort Items
* Filter Items

## Grid Layout

In this section, we will discuss the rendering of list items in a grid layout.

* Initialize and render ListView with a [`dataSource`](../../api/list-view/#datasource), which will render list items in list layout.

* Now, add the following CSS to list items. This will make list items render in a grid layout.

```

#default-list .e-list-item {
        height: 100px;
        width: 100px;
        float: left;
}

```

In the sample below, we have rendered list items in a grid layout.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/grid-layout-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/grid-layout-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/grid-layout-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/grid-layout-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/grid-layout-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/grid-layout-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/grid-layout-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/grid-layout-cs1" %}
{% endif %}

## Data manipulation

In this section, we will discuss about ListView data manipulations.

### Add Item

We can add list item using [`addItem`](../../api/list-view/#additem) API. This will accept array of data as argument.

```ts

 listViewInstance.addItem([{text: 'Apricot', id: '32'}]);

```

In the sample below, you can add a new fruit item by clicking the add button, which will open a dialog box with fruit name and image URL text boxes. After entering the item details, click the add button to add your new fruit item.

### Remove item

We can remove a list item using the [`removeItem`](../../api/list-view/#removeitem) API. This will accept fields with `id` or a list item element as an argument.

```ts

 listViewInstance.removeItem({id: '32'});

```

In the below sample, you can remove fruit by hovering the fruit item which will show delete button and click that delete button to delete that fruit from your list.

### Sort Items

ListView can be sorted either in ascending or descending order. To enable sorting in your ListView, set [`sortOrder`](../../api/list-view/#sortorder) as `Ascending` or `Descending`.

```ts

let listViewInstance: ListView = new ListView({
    sortOrder: 'Ascending';
})

```

We can also set sorting after control initialization.

```ts

listViewInstance.sortOrder = 'Ascending'

```

In the below sample, we have sorted fruits in `Ascending` order. To sort it in descending, click on sort order icon and vice versa.

### Filter Items

ListView data can be filtered with the help of [`dataManager`](../../data/getting-started/). After filtering the data, update the ListView [`dataSource`](../../api/list-view/#datasource) with the filtered data.

```ts

let value = document.getElementById("filter").value;  //input text box value
let filteredData = new DataManager(listdata).executeLocal(
        new Query().where("text", "startswith", value, true)
);

listViewInstance.dataSource = filteredData;

```

In the sample below, we can filter fruit items with the help of a search text box. This will filter fruit items based on your input. Here we used [`startswith`](../../data/querying#filter-operators) with the input text to filter data in DataManager.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/manipulation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/manipulation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/manipulation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/manipulation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/manipulation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/manipulation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/manipulation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/manipulation-cs1" %}
{% endif %}