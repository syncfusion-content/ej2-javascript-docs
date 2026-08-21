---
layout: post
title: How to show on multiple in ##Platform_Name## Tooltip | Syncfusion
description: Create and show the ##Platform_Name## Tooltip on multiple matched targets inside a container using the target property and the title attribute for content.
platform: ej2-javascript
control: Create and show tooltip on multiple targets
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show Tooltip on multiple targets in ##Platform_Name## Tooltip

Tooltips can be created and shown on multiple targets within a container by defining specific target elements using the [`target`](../../api/tooltip#target) property. This ensures that the Tooltip is initialized only on matched targets within the container.

In this implementation, the Tooltip content is assigned from the `title` attribute of the target element.

```ts
import { Tooltip } from '@syncfusion/ej2-popups';

let tooltip: Tooltip = new Tooltip({
    position: 'RightCenter'
});
tooltip.appendTo('#uname'); // Here we have appended the Tooltip to the element.
```
{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/form-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/form-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/form-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/form-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/form-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/form-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/form-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/form-validation-cs1" %}

{% endif %}
