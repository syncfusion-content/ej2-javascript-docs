---
layout: post
title: Grouping in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Group Syncfusion ##Platform_Name## MultiSelect Dropdown items by category using the groupBy field with inline or fixed group headers.
platform: ej2-javascript
control: Grouping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in ##Platform_Name## MultiSelect Dropdown

The MultiSelect supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](../api/multi-select#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, vegetables are grouped according to their category using the `groupBy` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/basic-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/basic-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs14" %}
{% endif %}

## HTML select

The MultiSelect also supports grouping list items by initializing the `<select>` element with `<optgroup>` tags. The nested items are wrapped based on the `<optgroup>` element present in the `<select>` element.

```
    <select id="selectElement">
        <optgroup label="Beans">
            <option value="1">Chickpea</option>
            <option value="2">Green bean</option>
            <option value="3">Horse gram</option>
        </optgroup>
        <optgroup label="Leafy and Salad">
            <option value="4">Spinach</option>
            <option value="5" selected="selected">Cabbage</option>
            <option value="6">Wheat grass</option>
        </optgroup>
    </select>
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/select-element-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/select-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/select-element-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/select-element-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/select-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/select-element-cs1" %}
{% endif %}

## Customization

The grouping header can also be customized for both inline and fixed headers using the [`groupTemplate`](../api/multi-select#grouptemplate) property.

## Grouping with CheckBox

Previously, there was no checkbox for group headers. Now, this feature allows you to render a checkbox in the group header to select the group items in a single selection. You can enable this feature by setting the [`enableGroupCheckBox`](../api/multi-select#enablegroupcheckbox) property value to `true` and the `mode` property to `CheckBox`.

Inject the `CheckBoxSelection` module into the MultiSelect to use the checkbox.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/basic-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/basic-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs15" %}
{% endif %}

## See Also

* [Group Template support in the MultiSelect](./templates#group-template).