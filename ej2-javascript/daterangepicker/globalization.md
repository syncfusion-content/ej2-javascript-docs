---
layout: post
title: Globalization in ##Platform_Name## DateRangePicker | Syncfusion
description: Adapt ##Platform_Name## DateRangePicker to different cultures by loading CLDR data and configuring date format, week, and month names.
platform: ej2-javascript
control: Globalization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## DateRangePicker

Globalization is the combination of internationalization and localization. The component can be adapted to various languages by parsing and formatting the date or number (Internationalization), and also by adding culture specific customization and translation to the text (Localization).

By default, the DateRangePicker date format, week, and month names are specific to the English culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](https://ej2.syncfusion.com/documentation/common/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data. It allows loading the culture specific CLDR JSON data by using the `loadCldr` method.

To use a different culture other than `English`, follow the below steps:

* Install the `CLDR-Data` package by using the below command (Installs the CLDR JSON data). To know more about CLDR-Data, refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

Once the package is installed, the culture specific JSON data can be found under the location `/node_modules/cldr-data`.

* Import the installed CLDR JSON data into the `app.ts` file. To import JSON data, install the JSON plugin loader. Here, the SystemJS JSON plugin loader is used.

```
npm install systemjs-plugin-json --save-dev
```

* After installation, configure the `system.config.js` configuration settings as given below to map the `systemjs-plugin-json` loader.

```ts
System.config({
    paths: {
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'

    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
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

* Use the `loadCldr` method to load the culture specific CLDR JSON data from the installed location to `app.ts` file.

* The DateRangePicker displays `Sunday` as the first day of week based on default culture ("en-US"). To display the DateRangePicker with the loaded culture's first day of week, the `weekdata.json` file needs to be imported from `cldr-data/supplemental` as given in the code example.

```ts
declare var require: any;

loadCldr(
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/main/de/timeZoneNames.json'),
    require('cldr-data/supplemental/weekdata.json') // To load the culture based first day of week
);
```

> The `Localization` library allows localizing the default text content of the DateRangePicker. The DateRangePicker component has static text for the **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](../api/daterangepicker#locale) value and translation object.

Locale keywords |Text
-----|-----
placeholder | Hint to describe expected value in input element.
startLabel | Label to represent the start date.
endLabel | Label to represent the end date.
applyText | Text present in the apply button.
cancelText | Text present in the cancel button.
selectedDays | Text to represent selected days.
days | Text represents days.
customRange | Text present in the custom range button in presets container.

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through the `load` method of
the [L10n](../api/base/l10n#load) class.

```ts

//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'daterangepicker': { placeholder: 'Wählen Sie ein Datum aus' }
    }
});
```

* Set the culture by using the [`locale`](../api/daterangepicker#locale) property. In the following code example, the DateRangePicker is initialized in `German` culture with the corresponding localized text.

The following example demonstrates the DateRangePicker in `German` culture.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/globalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/globalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/globalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/globalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/globalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/globalization-cs1" %}
{% endif %}

## Right-To-Left

The DateRangePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to display the text in the right-to-left direction. Use the [`enableRtl`](../api/daterangepicker#enablertl) property to set the RTL direction. The following code example initializes the DateRangePicker component in `Hebrew` culture and also explains how to set the localized text to the placeholder using the `load` method of
the [L10n](../api/base/l10n#load) class.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/rtl-cs1" %}
{% endif %}

## Customize the date format

Representation of start and end date strings can be customized to the required format by using the [`format`](../api/daterangepicker#format) property. By default, the format is based on the culture. To know more about the date format standards, refer to the Internationalization Date Format section. In the following sample, the date strings are formatted to `yyyy-MM-dd` and in between the string "to" is set as a [`separator`](../api/daterangepicker#separator).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs5" %}
{% endif %}