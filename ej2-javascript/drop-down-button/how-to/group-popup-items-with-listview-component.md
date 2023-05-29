---
layout: post
title: Group popup items with listview component in ##Platform_Name## Drop down button control | Syncfusion
description: Learn here all about Group popup items with listview component in Syncfusion ##Platform_Name## Drop down button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Group popup items with listview component 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Group popup items with listview component in ##Platform_Name## Drop down button control

Header in popup items is possible in DropdownButton by templating entire popup with ListView. Create ListView with id `#listview` and provide it as a [`target`](https://ej2.syncfusion.com/documentation/api/drop-down-button/#target) for DropDownButton.

In the following example, ListView element is given as `target` to DropDownButton and header can be achieved by [`groupBy`](https://ej2.syncfusion.com/documentation/api/list-view/fieldSettingsModel/#groupby) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/header-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/header-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/header-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/header-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/header-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/header-cs1" %}
{% endif %}