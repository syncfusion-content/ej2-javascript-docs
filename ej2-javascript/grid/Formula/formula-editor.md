---
layout: post
title: ##Platform_Name## Grid Formula Editor | Syncfusion
description: Learn how the default formula editor works in ##Platform_Name## Data Grid and how to allow or prevent editing in formula-enabled columns.
platform: ej2-javascript
control: Formula Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Formula Editor in ##Platform_Name## Data Grid

The formula editor is used for editing values in formula-enabled columns. Opening a formula cell for editing through this default editor reveals the underlying expression, converted into column-letter and row-number notation, while the calculated value is displayed when editing is complete.

## Enabling default editor

To enable formula editing, register the `EditModule`, set [editSettings.allowEditing](../../api/grid/editsettingsmodel#allowediting) to `true`, enable formulas through set [allowFormula](../../api/grid/column#allowformula) to `true` for the required columns.

The default editor is automatically available for formula-enabled columns in an editable grid. Opening a formula-enabled cell for editing displays the formula expression in column-letter and row-number notation, such as **=D1*E1**.

Cells and ranges referenced by the formula are highlighted while editing. Selecting another cell inserts or updates a reference in the expression. The highlights are removed when editing ends.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/formula-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/formula-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/formula-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/formula-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/formula-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/formula-cs2" %}
{% endif %}

## Preventing formula cell editor

Editing can be disabled for a formula-enabled column by setting `allowEditing` to `false` on that column. The column still evaluates formulas and displays calculated results, but the user cannot directly edit the formula value from the grid UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/formula-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/formula-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/formula-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/formula-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/formula-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/formula-cs5" %}
{% endif %}

## See also

- [Formulas](./formula)
- [Formula reference](./formula-reference)
- [Custom formula functions](./custom-formula)
- [Editing](../editing/cell-editing)