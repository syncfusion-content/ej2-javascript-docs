---
layout: post
title: Template engine in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Template engine in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template Engine

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) includes a built-in template engine that compiles template strings into executable functions. The compiled function renders DOM elements using supplied data, enabling efficient and reusable rendering for complex UI templates.

## Compiling

Use the `compile` method from `ej2-base` to convert template strings into executable functions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/template-engine-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/template-engine-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/template-engine-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/template-engine-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/template-engine-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/template-engine-cs1" %}
{% endif %}

> To enable strict Content Security Policy (CSP), it is recommended to utilize the [function template](./template#function-template) approach instead of the string template.

## Available template syntax

| Name | Syntax | Description |
| --- | --- | --- | --- |
| Expression | `<div>${name}</div>`  | We have expression evolution as like ES6 expression string literals. |
| Dot Variable Access | `<div>${person.info.name}</div>` | Access the json variable with dot notation. |
| Variable Function | `<div>${name.toUpperCase()}</div>` | Utilize the variable function example, `name.toUpperCase()` |
| Window Function | `<div>${getCurrentTime()}div>` | Use window function inside template.Note: Here, `getCurrentTime()` is a function that defined in the window object. |
| Custom Helper Function | `<div>${covertToCurrency()}div>` | Use function that passed in [helper](#custom-helper) function. |
| IF Else Statement | `<div>` <br/> `${if(gender===”male”)}` <br/> `<span class=’ico-male’>Male</span>` <br/> `${else}` <br/> `<span class=’ico-female’>Female</span>` <br/> `${/if}` <br/> `</div>` | Branching statement in Template. |
| For Statement | `<div>` <br/> `${for(mark of marks)}` <br/> `<span>${mark}</span>` <br/> `${/for}` <br/> `</div>` | Use for looping inside template. |
| For Index value access | `<div>` <br/> `${for(mark of marks)}` <br/> `<span>${markIndex}</span>` <br/> `${/for}` <br/> `</div>` | Get the index value of item while using for statement. Use the variable `Index` that suffixed with loop item name. |

## Custom helper

Custom helper functions can be defined and passed to the `compile` function to extend template behavior. Refer to the example below for usage.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/template-engine-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/template-engine-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/template-engine-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/template-engine-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/template-engine-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/template-engine-cs2" %}
{% endif %}
