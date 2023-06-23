---
layout: post
title: Islamic calendar in ##Platform_Name## Calendar control | Syncfusion
description: Learn here all about Islamic calendar in Syncfusion ##Platform_Name## Calendar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Islamic calendar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Islamic calendar in ##Platform_Name## Calendar control

In addition to the Gregorian calendar, the calendar control supports displaying the Islamic calendar (Hijri calendar). **Islamic calendar** or **Hijri calendar** is a `lunar calendar` consisting of 12 months in a year of 354 or 355 days. To know more about Islamic calendar, please refer this [wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar).

Also, it consists of all Gregorian calendar functionalities as like min and max date, week number, start day of the week, multi selection, enable RTL, start and depth view, localization, highlight and customize the specific dates.

By default, calendar mode is in **Gregorian**. You can enable the Islamic mode by setting the **calendarMode** as **Islamic**. Also, need to import and injecting the `Islamic` module from `ej2-calendars` as shown below.

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