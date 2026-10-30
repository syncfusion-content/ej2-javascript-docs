---
layout: post
title: Busy Indicator in ##Platform_Name## Dashboard Layout | Syncfusion
description: Display a busy indicator overlay on individual Dashboard Layout panels while data is loading, using the showBusyIndicator and busyIndicatorTemplate properties.
platform: ej2-javascript
control: Busy Indicator
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Busy Indicator in ##Platform_Name## Dashboard Layout

The Dashboard Layout component provides built-in support for displaying a busy indicator over individual panels while data is being fetched or processed. This feature is useful in dashboards where different panels load data from independent network calls and need to visually communicate their loading state to the user.

The busy indicator functionality is controlled by two panel-level properties: [`showBusyIndicator`](../api/dashboard-layout/panelModel#showbusyindicator) and [`busyIndicatorTemplate`](../api/dashboard-layout/panelModel#busyindicatortemplate).

## showBusyIndicator

The [`showBusyIndicator`](../api/dashboard-layout/panelModel#showbusyindicator) property is used to enable or disable the busy indicator overlay on a panel. When set to `true`, the panel content area is covered with a default loading indicator until the property is set back to `false`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `showBusyIndicator` | `boolean` | `false` | When set to `true`, displays a loading indicator overlay on the panel. |

When the `showBusyIndicator` is enabled on a panel:

- A loading overlay is rendered on top of the panel content.
- The panel content remains intact beneath the overlay and is shown once the indicator is hidden.
- The property can be toggled dynamically to reflect the asynchronous lifecycle of data fetching.

## busyIndicatorTemplate

The [`busyIndicatorTemplate`](../api/dashboard-layout/panelModel#busyindicatortemplate) property allows you to customize the appearance of the busy indicator by providing a custom HTML string or template content. This is helpful when the default indicator needs to be styled to match the application's branding or replaced with a more descriptive loading message.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `busyIndicatorTemplate` | `string` | `null` | Custom HTML template used to render the busy indicator overlay on the panel. |

When the `busyIndicatorTemplate` is provided:

- The custom template replaces the default loading indicator.
- Any valid HTML markup, including inline SVG, CSS, or icons, can be used as the template content.
- The template is applied only when `showBusyIndicator` is set to `true`.

## Implementation example

The following sample demonstrates how to use the `showBusyIndicator` and `busyIndicatorTemplate` properties to display a custom loading indicator on each panel. After a simulated delay, the indicators are hidden and the panel content is replaced with the loaded data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/busy-indicator-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/busy-indicator-cs1" %}
{% endif %}

{% if page.publishingplatform == "typescript" %}

> Refer to the [TypeScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [TypeScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/fluent2/dashboard-layout/default.html) to knows how to present and manipulate data.

{% elsif page.publishingplatform == "javascript" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.

{% endif %}
