---
layout: post
title: Template in ##Platform_Name## Spinner control | Syncfusion
description: Learn here all about Template in Syncfusion ##Platform_Name## Spinner control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Spinner control

You can use custom templates on the Spinner instead of the default Spinner by specifying the template in the `setSpinner` method.

The following steps explains you on how to define template for Spinner.

* Import the `setSpinner` method from `ej2-popups` library into your `app.ts` as shown in below.

```ts
import { setSpinner } from '@syncfusion/ej2-popups';
```

* Pass your custom template to the `setSpinner` method like as below.

```ts
// Specify the template content to be displayed in the Spinner

setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>'});
```

> You should set the template to the Spinner before creating the respective Essential JS 2 component. Also,until we replace `setSpinner` template, the further Essential JS 2 component rendering is created with given template only.

* Now, render the Essential JS 2 component. It's render the Spinner with the template specified in the `setSpinner` method.

> In the below sample, we have rendered the Grid component with custom Spinner using `setSpinner` method. You have to define the styles for the template in `styles.css`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spinner/custom-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spinner/custom-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/spinner/custom-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spinner/custom-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spinner/custom-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spinner/custom-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/spinner/custom-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spinner/custom-cs1" %}
{% endif %}