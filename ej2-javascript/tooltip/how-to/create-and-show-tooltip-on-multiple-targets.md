---
layout: post
title: Create and show tooltip on multiple targets in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Create and show tooltip on multiple targets in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Create and show tooltip on multiple targets 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create and show tooltip on multiple targets in ##Platform_Name## Tooltip control

Tooltip can be created and shown on multiple targets within a container by defining the specific target elements to the target property. So, the tooltip is initialized only on matched targets within a container.

In this case, the tooltip content is assigned from the title attribute of the target element.

```ts
import { Tooltip } from '@syncfusion/ej2-popups';

let tooltip: Tooltip = new Tooltip({
    position: 'RightCenter'
});
tooltip.appendTo('#uname); // Here we have appended the target to the element.
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/form-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/form-validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/tooltip/form-validation-cs1" %}