---
layout: post
title: Checkbox in ##Platform_Name## Dropdown Tree Control | Syncfusion
description: Learn here all about Checkbox in Syncfusion ##Platform_Name## Dropdown Tree control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Checkbox 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in ##Platform_Name## Dropdown Tree control

The Dropdown Tree control allows you to check multiple items from the tree without affecting the UI's appearance by enabling the [`showCheckBox`](../api/drop-down-tree/#showcheckbox) property. When this property is enabled, a checkbox appears before each item text in the popup.

In the following example, the [`showCheckBox`](../api/drop-down-tree/#showcheckbox) property is enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/checkboxes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/checkboxes-cs1" %}
{% endif %}

## Auto Check

By default, the checkbox state of the parent and child items in the Dropdown Tree control will not depend on each other. If dependent checkbox states are needed, enable the [`autoCheck`](../api/drop-down-tree/treeSettingsModel/#autocheck) property which is a member of the [`treeSettings`](../api/drop-down-tree/#treesettings) property.

* If one or more child items are not checked, the parent item will be in an intermediate state.

* If all the child items are checked, the parent item will also be checked.

* If a parent item is checked, all the child items will also be checked.

In the following example, the [`autoCheck`](../api/drop-down-tree/treeSettingsModel/#autocheck) property is enabled.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/auto-check-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/auto-check-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/auto-check-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/auto-check-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/auto-check-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/auto-check-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/auto-check-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/auto-check-cs1" %}
{% endif %}

## Select All

The Dropdown Tree control has built-in support to select all tree items using the Select All option in the header.

When the [`showSelectAll`](../api/drop-down-tree/#showselectall) property is set to true, a checkbox will be displayed in the popup header that allows you to select or deselect all the tree items in the popup.

By default, `Select All` and `Unselect All` text values will be showcased along with the checkbox in the popup header to indicate the action to be performed on checking or unchecking the checkbox. You can customize these text attributes using the [`selectAllText`](../api/drop-down-tree/#selectalltext) and [`unSelectAllText`](../api/drop-down-tree/#unselectalltext) properties, respectively.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/selectall-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/selectall-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/selectall-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/selectall-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/selectall-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/selectall-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/selectall-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/selectall-cs1" %}
{% endif %}