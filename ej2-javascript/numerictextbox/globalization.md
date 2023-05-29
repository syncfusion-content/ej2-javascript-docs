---
layout: post
title: Globalization in ##Platform_Name## Numerictextbox control | Syncfusion
description: Learn here all about Globalization in Syncfusion ##Platform_Name## Numerictextbox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Globalization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## Numerictextbox control

## Localization

[`Localization`](../common/localization/) library allows users to localize the default text contents of the NumericTextBox to different cultures using the [`locale`](../api/numerictextbox#locale) property. In NumericTextBox, spin buttons title for the tooltip will be localized based on the culture.

| Locale key | en-US (default)  |
|------|------|
| incrementTitle |  Increment value |
| decrementTitle |  Decrement value |

### Loading translations

To load translation object in your application use `load` function of `L10n` class.

The below example demonstrates the NumericTextBox in `German` culture with the spin buttons tooltip.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs2" %}
{% endif %}

## Internationalization

Internationalization library provides support for formatting and parsing the number by using the official [Unicode CLDR](http://cldr.unicode.org/) JSON data and also provides the `loadCldr` method to load the culture specific CLDR JSON data. The NumericTextBox comes with built-in
internationalization support to adapt based on culture. For more information about internationalization, refer to this [link](../common/internationalization/).

By default, all the Essential JS 2  component are specific to English culture ('en-US'). If you want to go with the different culture other than `English`, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). For more information about CLDR-Data, refer to this [link](http://cldr.unicode.org/index/cldr-spec/json).

```
npm install cldr-data --save
```

Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now import the installed CLDR JSON data into the `app.ts` file. To import JSON data we need to install the JSON plugin loader. Here we have used the SystemJS JSON plugin loader.

```
npm install systemjs-plugin-json --save-dev
```

* Once installed, configure the `system.config.js` configuration settings as like below to map the `systemjs-plugin-json` loader.

```ts
System.config({
    paths: {
        'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "cldr-data": 'npm:cldr-data',
        "plugin-json": "npm:systemjs-plugin-json/json.js"
    },
    meta: {
        '*.json': { loader: 'plugin-json' }
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' },
        'cldr-data': { main: 'index.js', defaultExtension: 'js' }
    }
});

System.import('app');

```

* Now import the required culture from the installed location to `app.ts` file as like the below code snippets.

```ts
declare var require: any;

loadCldr(
        require('cldr-data/main/de/numbers.json'),
        require('cldr-data/main/de/currencies.json'),
        require('cldr-data/supplemental/numberingSystems.json'),
        require('cldr-data/supplemental/currencyData.json')
    );
```

* Set the culture by using the [`locale`](../api/numerictextbox#locale) property.

The below example demonstrates the NumericTextBox in `German` culture with the `EUR` currency format.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/internationalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/numeric-textbox/internationalization-cs1" %}
{% endif %}

## Right to Left(RTL)

RTL provides an option to switch the text direction and layout of the NumericTextBox component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL NumericTextBox, set the [`enableRtl`](../api/numerictextbox#enablertl) to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/rtl-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/rtl-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/numeric-textbox/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/rtl-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/rtl-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/numeric-textbox/rtl-cs1" %}
{% endif %}
