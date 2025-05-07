---
layout: post
title: Localization in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Scheduler control

The Scheduler integrates different date-time formats and cultures, which allows it to function globally, thus meeting the diverse needs of different regions.

You can adapt the Scheduler to various languages by parsing and formatting the date or number ([`Internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization)), adding culture specific customization and translation to the text ([`Localization`](https://ej2.syncfusion.com/documentation/common/localization)).

## Globalization

The Internationalization library provides support for formatting and parsing the number, date, and time by using the official [`Unicode CLDR`](http://cldr.unicode.org/) JSON data and also provides the `loadCldr` method to load the culture specific CLDR JSON data.

By default, Scheduler is set to follow the English culture ('en-US'). If you want to go with different culture other than English, follow the below steps.

* Install the `ej2-cldr-data` package using the Syncfusion<sup style="font-size:70%">&reg;</sup> npm package by running the command below..

  ```
  npm install @syncfusion/ej2-cldr-data
  ```

Once the package is installed, you can find the culture specific JSON data under the location `\node_modules\@syncfusion\ej2-cldr-data`.

* Now import the required cultures from the installed location to `app.ts` file as given in the following code example.

    1. numberingSystems.json
    2. ca-gregorian.json
    3. numbers.json
    4. timeZoneNames.json

```ts
//import the loadCldr from ej2-base
import { loadCldr} from '@syncfusion/ej2-base';
import frNumberData from '@syncfusion/ej2-cldr-data/main/fr-CH/numbers.json';
import frtimeZoneData from '@syncfusion/ej2-cldr-data/main/fr-CH/timeZoneNames.json';
import frGregorian from '@syncfusion/ej2-cldr-data/main/fr-CH/ca-gregorian.json';
import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);
```

* Set the culture to Scheduler by using the `locale` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/localization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/localization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/localization-cs1" %}

> Refer [here](https://ej2.syncfusion.com/documentation/common/internationalization) for common information about globalization.

## Localizing the static Scheduler text

[`Localization`](https://ej2.syncfusion.com/documentation/common/localization) library allows to display all the static text, date content, and time mode of the Scheduler following the localized language. To achieve this, set the `locale` property of Scheduler, as well as define the translation text of static words of Scheduler through the `load` method.

For example, the following code example lets you to define the French translation words for all the static words used in Scheduler.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/localization-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/localization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/localization-cs2" %}

The localized words for static text used in Scheduler and Recurrence Editor can be referred from the following code. You can access the static text for all cultures from [`here`](https://github.com/syncfusion/ej2-locale).

```ts
L10n.load({
    "en": {
        "schedule": {
            "day": "Day",
            "week": "Week",
            "workWeek": "Work Week",
            "month": "Month",
            "year": "Year",
            "agenda": "Agenda",
            "weekAgenda": "Week Agenda",
            "workWeekAgenda": "Work Week Agenda",
            "monthAgenda": "Month Agenda",
            "today": "Today",
            "noEvents": "No events",
            "emptyContainer": "There are no events scheduled on this day.",
            "allDay": "All day",
            "start": "Start",
            "end": "End",
            "more": "more",
            "close": "Close",
            "cancel": "Cancel",
            "noTitle": "(No Title)",
            "delete": "Delete",
            "deleteEvent": "Delete Event",
            "deleteMultipleEvent": "Delete Multiple Events",
            "selectedItems": "Items selected",
            "deleteSeries": "Delete Series",
            "edit": "Edit",
            "editSeries": "Edit Series",
            "editEvent": "Edit Event",
            "createEvent": "Create",
            "subject": "Subject",
            "addTitle": "Add title",
            "moreDetails": "More Details",
            "moreEvents": "More Events",
            "save": "Save",
            "editContent": "Do you want to edit only this event or entire series?",
            "deleteRecurrenceContent": "Do you want to delete only this event or entire series?",
            "deleteContent": "Are you sure you want to delete this event?",
            "deleteMultipleContent": "Are you sure you want to delete the selected events?",
            "newEvent": "New Event",
            "title": "Title",
            "location": "Location",
            "description": "Description",
            "timezone": "Timezone",
            "startTimezone": "Start Timezone",
            "endTimezone": "End Timezone",
            "repeat": "Repeat",
            "saveButton": "Save",
            "cancelButton": "Cancel",
            "deleteButton": "Delete",
            "recurrence": "Recurrence",
            "wrongPattern": "The recurrence pattern is not valid.",
            "seriesChangeAlert": "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
            "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
            "recurrenceDateValidation": "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
            "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
            "occurenceAlert": "Cannot reschedule an occurrence of the recurring appointment if it skips over a later occurrence of the same appointment.",
            "editRecurrence": "Edit Recurrence",
            "repeats": "Repeats",
            "alert": "Alert",
            "startEndError": "The selected end date occurs before the start date.",
            "invalidDateError": "The entered date value is invalid.",
            "blockAlert": "Events cannot be scheduled within the blocked time range.",
            "ok": "Ok",
            "yes": "Yes",
            "no": "No",
            "occurrence": "Occurrence",
            "series": "Series",
            "previous": "Previous",
            "next": "Next",
            "timelineDay": "Timeline Day",
            "timelineWeek": "Timeline Week",
            "timelineWorkWeek": "Timeline Work Week",
            "timelineMonth": "Timeline Month",
            "expandAllDaySection": "Expand",
            "collapseAllDaySection": "Collapse",
            "timelineYear": "Timeline Year",
            "editFollowingEvent": "Following Events",
            "deleteTitle": "Delete Event",
            "editTitle": "Edit Event",
            "beginFrom": "Begin From",
            "endAt": "End At",
            "searchTimezone": "Search Timezone",
            "noRecords": "No records found",
            "of": "of"
        },
        "recurrenceeditor": {
            "none": "None",
            "daily": "Daily",
            "weekly": "Weekly",
            "monthly": "Monthly",
            "month": "Month",
            "yearly": "Yearly",
            "never": "Never",
            "until": "Until",
            "count": "Count",
            "first": "First",
            "second": "Second",
            "third": "Third",
            "fourth": "Fourth",
            "last": "Last",
            "repeat": "Repeat",
            "repeatEvery": "Repeat Every",
            "on": "Repeat On",
            "end": "End",
            "onDay": "Day",
            "days": "Day(s)",
            "weeks": "Week(s)",
            "months": "Month(s)",
            "years": "Year(s)",
            "every": "every",
            "summaryTimes": "time(s)",
            "summaryOn": "on",
            "summaryUntil": "until",
            "summaryRepeat": "Repeats",
            "summaryDay": "day(s)",
            "summaryWeek": "week(s)",
            "summaryMonth": "month(s)",
            "summaryYear": "year(s)"
        }
    }
});
```

## Setting date format

Scheduler can be used with all valid date formats. By default, it follows the universal date format "MM/dd/yyyy". If the [`dateFormat`](https://ej2.syncfusion.com/documentation/api/schedule/#dateformat) property is not specified, the Scheduler will use the format based on the assigned locale. Since the default locale is "en-US", it follows the "MM/dd/yyyy" pattern by default.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/localization-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/localization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/localization-cs3" %}

## Setting the time format

Time formats represent time values in different string formats in the Scheduler. By default, the Scheduler's time mode can be either 12 or 24 hours format, which is based on the [`locale`](https://ej2.syncfusion.com/documentation/api/schedule/#locale) setting. Since the default locale value is en-US, the time mode is automatically set to 12-hour format. You can customize this format using the [`timeFormat`](https://ej2.syncfusion.com/documentation/api/schedule/#timeformat)property. For more information about time format standards, refer to the [`Date and Time Format`](https://ej2.syncfusion.com/documentation/common/internationalization#custom-formats) section section.

The following example demonstrates the Scheduler control in 24 hours format.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/localization-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/localization-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/localization-cs4" %}

>Note: `timeFormat` property only accepts the valid time format's.

## Displaying Scheduler in RTL mode

The Scheduler layout and behavior can be changed to follow RTL (Right to Left) conventions by setting [`enableRtl`](https://ej2.syncfusion.com/documentation/api/schedule/#enablertl) to true. This will display the Scheduler layout from right to left. The default value is `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/localization-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/localization-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/localization-cs5" %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.

## See Also

* [How to change first day of the week in the Scheduler](./working-days#setting-start-day-of-the-week)