---
layout: post
title: Use wizard like dialog editing in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Use wizard like dialog editing in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Use wizard like dialog editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Use wizard like dialog editing in ##Platform_Name## Treegrid control

Wizard helps you create intuitive step-by-step forms to fill. You can achieve the wizard like editing by using the dialog template feature. It support your own editing template by defining [`editSettings.mode`](../api/treegrid/editSettings/#mode) as **Dialog** and [`editSetting.template`](../api/treegrid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

The following example demonstrate the wizard like editing in the Tree Grid with the obtrusive Validation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/wizard-editing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/wizard-editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/wizard-editing-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/wizard-editing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/wizard-editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/wizard-editing-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.