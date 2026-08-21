---
layout: post
title: How to add textbox programmatically in ##Platform_Name## TextBox | Syncfusion
description: Create a ##Platform_Name## TextBox programmatically by importing the Input module from ej2-inputs and rendering it on the desired container.
platform: ej2-javascript
control: Add textbox programmatically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add textbox programmatically in ##Platform_Name## TextBox

* Create a TypeScript file and import the `Input` modules
from `ej2-inputs` library as shown below.

```ts
import {Input} from '@syncfusion/ej2-inputs';
```

* Pass the `HTML Input` element as parameter to the `createInput` method.

* You can also add the `icons` on the input by passing `buttons` property value with the class name `e-input-group-icon` as parameter to the `createInput` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textbox/utility-rendering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/utility-rendering-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/utility-rendering-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/utility-rendering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/utility-rendering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/utility-rendering-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/utility-rendering-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/utility-rendering-cs1" %}
{% endif %}