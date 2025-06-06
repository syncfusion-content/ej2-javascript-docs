---
layout: post
title: Globalization in ##Platform_Name## Timepicker control | Syncfusion
description: Learn here all about Globalization in Syncfusion ##Platform_Name## Timepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Globalization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## Timepicker control

Globalization is the combination of internalization and localization. You can adapt the component to various languages by parsing and formatting the date or number [`internationalization`](../common/internationalization/), and also add culture specific customization and translation to the text [`localization`](../common/localization/).

By default, the time format and meridian names are specific to the `American English` culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](../common/internationalization/) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data. It provides the `loadCldr` method to load culture specific CLDR JSON data. To use a different culture other than `English`, follow the steps below:

* Install the `CLDR-Data` package by using the following command (installs all the CLDR JSON data). To know more about CLDR-Data refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

Once the package is installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Import the installed CLDR JSON data into the `app.ts` file. To import JSON data, install the JSON plugin loader. Here, The systemJS JSON plugin loader is used.

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
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
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

* Use the [`loadCldr`](../common/internationalization#cldr-data-dependencies) method to load the culture specific CLDR JSON data from the installed location to `app.ts` file.

* TimePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the TimePicker with loaded culture's first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts

import { loadCldr } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/supplemental/weekdata.json') // To load the culture based first day of week
);

```

* Before changing to a culture other than `English`, ensure that the locale text for the concerned culture is loaded through [`L10n.load`](../api/base/l10n#load) method.

```ts

//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit' }
    }
});

 ```

* Set the culture by using the [`locale`](../api/timepicker#locale) property. In the following code example, the TimePicker component is initialized in `German` culture with corresponding localized text.

```ts

import { TimePicker } from '@syncfusion/ej2-calendars';
//Load the L10n from ej2-base
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json')
);

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit' }
    }
});

// creates the timepicker with German culture.
let timeObject: TimePicker = new TimePicker({
    locale:'de',
    value: new Date()
});
timeObject.appendTo('#element');

```

The following example demonstrates the TimePicker in `German` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timepicker/internationalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/internationalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timepicker/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timepicker/internationalization-cs1" %}
{% endif %}

## Right-To-Left

The TimePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](../api/timepicker#enablertl) property to set the RTL direction.

The code example demonstrates the TimePicker component in `Arabic` culture. It also explains how to set localized text to the placeholder using [`L10n.load`](../api/base/l10n#load) method.

 ```ts

import { TimePicker } from '@syncfusion/ej2-calendars';
//Load the L10n from ej2-base
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/ar/ca-gregorian.json'),
    require('cldr-data/main/ar/numbers.json')
);

//load the locale object to set the localized placeholder value
L10n.load({
    'ar': {
        'timepicker': { placeholder: 'حدد الوقت' }
    }
});

// creates the timepicker with Arabic culture.
let timeObject: TimePicker = new TimePicker({
    //sets the locale
    locale: 'ar',
    value: new Date(),
    //sets the enableRtl
    enableRtl: true
});
timeObject.appendTo('#element');
 ```

The following example demonstrates TimePicker in `Arabic` culture with right-to-left direction.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timepicker/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timepicker/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timepicker/rtl-cs1" %}
{% endif %}