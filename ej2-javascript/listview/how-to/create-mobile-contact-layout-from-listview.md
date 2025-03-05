---
layout: post
title: Create mobile contact layout using ListView in ##Platform_Name## | Syncfusion
description: Learn here all about Create mobile contact layout from ListView in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Create mobile contact layout from ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create mobile contact layout in ##Platform_Name## ListView control

You can customize the ListView using the [`template`](../../api/list-view/#template) property. Follow these steps to customize the ListView as a mobile contact view with the `ej2-avatar`:

* Render the ListView with a [`dataSource`](../../api/list-view/#datasource) containing avatar data. Avatar data can be provided as either text or class names. Below is an example code snippet for data source initialization:

```ts

let dataSource: { [key: string]: Object }[] = [
  {
    text: "Jenifer", contact: "(206) 555-985774", id: "1", avatar: "", pic: "pic01"
  },
  {
    text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: ""
  }
];

```

* Use `avatar` classes in the ListView template to customize the contact icon. The following template example sets a medium-sized avatar using the class `e-avatar e-avatar-circle` from the data source:

```ts

  template: '<div class="e-list-wrapper e-list-multi-line e-list-avatar">' +
    '${if(avatar!=="")}' +
    '<span class="e-avatar e-avatar-circle">${avatar}</span>' +
    '${else}' +
    '<span class="${pic} e-avatar e-avatar-circle"> </span>' +
    '${/if}' +
    '<span class="e-list-item-header">${text}</span>' +
    '<span class="e-list-content">${contact}</span>' +
    '</div>';

```

> Avatars can be set in different sizes using avatar classes. For more information on avatar classes, refer to the [Avatar](https://ej2.syncfusion.com/demos/#/material/avatar/default.html) demo.

* Sort the contact names using the [`sortOder`](../../api/list-view/#sortorder) property of ListView.

* Enable the [`showHeader`](../../api/list-view/#showheader) property, and set the [`headerTitle`](../../api/list-view/#headertitle) as `Contacts`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/avatar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/avatar-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/avatar-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/avatar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/avatar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/avatar-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/avatar-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/avatar-cs2" %}
{% endif %}
