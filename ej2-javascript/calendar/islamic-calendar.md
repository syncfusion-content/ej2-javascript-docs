---
layout: post
title: Islamic Calendar in ##Platform_Name## Calendar | Syncfusion
description: Display the Islamic (Hijri) lunar calendar in ##Platform_Name## Calendar by setting the calendarMode property and injecting the Islamic module.
platform: ej2-javascript
control: Islamic calendar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Islamic Calendar in ##Platform_Name## Calendar

In addition to the Gregorian calendar, the Calendar supports displaying the Islamic calendar (Hijri calendar). The **Islamic calendar** or **Hijri calendar** is a `lunar calendar` consisting of 12 months in a year of 354 or 355 days. To know more about the Islamic calendar, refer to this [wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar) link.

It also consists of all Gregorian calendar functionalities such as min and max date, week number, start day of the week, multi selection, enable RTL, start and depth view, localization, and highlighting and customizing the specific dates.

By default, the calendar mode is in **Gregorian**. The Islamic mode can be enabled by setting the **calendarMode** as **Islamic**. Also, import and inject the `Islamic` module from `ej2-calendars` as shown below.

> import { Islamic, Calendar } from '@syncfusion/ej2-calendars';\
> Calendar.Inject(Islamic);

The following example demonstrates how to display the Islamic Calendar (Hijri Calendar).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/islamic-calendar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/islamic-calendar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/islamic-calendar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/islamic-calendar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/islamic-calendar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/islamic-calendar-cs1" %}
{% endif %}