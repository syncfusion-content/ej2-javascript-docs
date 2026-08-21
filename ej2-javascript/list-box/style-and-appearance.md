---
layout: post
title: Style and Appearance in ##Platform_Name## ListBox | Syncfusion
description: Customize the Syncfusion ##Platform_Name## ListBox appearance by overriding CSS classes for the wrapper, items, and toolbar.
platform: ej2-javascript
control: Style and appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in ##Platform_Name## ListBox

To modify the ListBox appearance, you need to override the default CSS of ListBox component. Please find the list of CSS classes and its corresponding section in ListBox component. Also, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

CSS Class | Purpose of Class
-----|-----
|.e-listbox-wrapper|To customize the listbox wrapper
|.e-list-parent .e-list-item|To customize the listbox list items
|.e-list-parent .e-list-item:hover|To customize the listbox list items on hover
|.e-list-parent .e-list-item.e-selected|To customize the listbox selected list item
|.e-listboxtool-wrapper .e-listbox-tool|To customize the listbox toolbar
|.e-listboxtool-wrapper .e-listbox-tool .e-btn|To customize the listbox toolbar button
|.e-listboxtool-wrapper .e-listbox-tool .e-btn .e-btn-icon.e-icons::before|To customize the listbox toolbar icon

## Horizontal ListBox

You can use [cssClass](../api/list-box/#cssClass) property to display the Listbox horizontally.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/horizontal-listbox-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/horizontal-listbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/horizontal-listbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/horizontal-listbox-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/horizontal-listbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/horizontal-listbox-cs1" %}
{% endif %}
