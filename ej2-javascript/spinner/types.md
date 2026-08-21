---
layout: post
title: Types in ##Platform_Name## Spinner | Syncfusion
description: Switch the ##Platform_Name## Spinner type to Material, Fabric, or Bootstrap by passing the type option to the setSpinner method.
platform: ej2-javascript
control: Types 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Types in ##Platform_Name## Spinner

By default, the Spinner is loaded in the applicable Essential<sup style="font-size:70%">&reg;</sup> JS 2 component based on the theme imported into the page. Based on the theme, the type is set to the Spinner.
The available types are:
* Material
* Fabric
* Bootstrap

You can change the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component spinner type by passing the type of the spinner as parameter to the `setSpinner` method like as below.

```ts
// Specify the type of the Spinner to be displayed

setSpinner({ type: 'Bootstrap'});
```

> After Essential<sup style="font-size:70%">&reg;</sup> JS 2 component creation only, you can change the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component spinner type.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spinner/default-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spinner/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spinner/default-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spinner/default-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spinner/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spinner/default-cs1" %}
{% endif %}