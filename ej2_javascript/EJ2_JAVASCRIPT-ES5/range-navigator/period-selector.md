---
title: " RangeNavigator Period Selector | TypeScript "

component: "RangeNavigator"

description: "The period selector allows to select a range with specified periods."
---

# Period selector

The period selector allows to select a range with specified periods.

## Periods

An array of objects that allows the users to specify pre-defined time intervals. The `interval` property specifies the count value of the button, and the `text` property specifies the text to be displayed on the button. The `intervaltype` property allows the users to customize the interval type, and it supports the following types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tab template= "rangenavigator/periodselector" %}

```typescript

import { RangeNavigator, Chart, IChangedEventArgs, PeriodSelector, AreaSeries, DateTime, PeriodSelectorSettingsModel } from '@syncfusion/ej2-charts';

RangeNavigator.Inject(
    PeriodSelector, DateTime, AreaSeries
);
import { chartData } from './datasource.ts';
let periodsValue: PeriodSelectorSettingsModel = {
    periods: [
        { text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
        { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
        { text: '1Y', interval: 1, intervalType: 'Years' },
        { text: '2Y', interval: 2, intervalType: 'Years', selected: true
         },
        { text: 'All' }
    ]
};
let range: RangeNavigator = new RangeNavigator(
        {
        valueType: 'DateTime',
        series: [
            {
                dataSource: chartData,
                xName: 'x', yName: 'close', type: 'Area', width: 2,

            }
        ], periodSelectorSettings: periodsValue,
        }, '#element');
```

{% endtab %}

>To use the period selector feature, inject the `PeriodSelector` module using the `RangeNavigator.Inject(PeriodSelector)` method.

## Positioning period selector

The `position` property allows the users to position the period selector at the **Top** or **Bottom**.

{% tab template= "rangenavigator/periodselector" %}

```typescript

import { RangeNavigator, Chart, IChangedEventArgs, PeriodSelector, AreaSeries, DateTime, PeriodSelectorSettingsModel } from '@syncfusion/ej2-charts';

RangeNavigator.Inject(
    PeriodSelector, DateTime, AreaSeries
);
import { chartData } from './datasource.ts';
let periodsValue: PeriodSelectorSettingsModel = {
    position: 'Top',
    periods: [
        { text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
        { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
        { text: '1Y', interval: 1, intervalType: 'Years' },
        { text: '2Y', interval: 2, intervalType: 'Years', selected: true
         },
        { text: 'All' }
    ]
};
let range: RangeNavigator = new RangeNavigator(
        {
        valueType: 'DateTime',
        series: [
            {
                dataSource: chartData,
                xName: 'x', yName: 'close', type: 'Area', width: 2,

            }
        ], periodSelectorSettings: periodsValue,
        }, '#element');
```

{% endtab %}

## Height

The `height` property allows the users to specify the height of the period selector. The default value of the height property is **43px**.

{% tab template= "rangenavigator/periodselector" %}

```typescript

import { RangeNavigator, Chart, IChangedEventArgs, PeriodSelector, AreaSeries, DateTime, PeriodSelectorSettingsModel } from '@syncfusion/ej2-charts';
import { EmitType } from '@syncfusion/ej2-base';

RangeNavigator.Inject(
    PeriodSelector, DateTime, AreaSeries
);
import { chartData } from './datasource.ts';
let periodsValue: PeriodSelectorSettingsModel = {
    height: 65,
    periods: [
        { text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
        { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
        { text: '1Y', interval: 1, intervalType: 'Years' },
        { text: '2Y', interval: 2, intervalType: 'Years', selected: true
         },
        { text: 'All' }
    ]
};
let range: RangeNavigator = new RangeNavigator(
        {
        valueType: 'DateTime',
        series: [
            {
                dataSource: chartData,
                xName: 'x', yName: 'close', type: 'Area', width: 2,

            }
        ], periodSelectorSettings: periodsValue,
        }, '#element');
```

{% endtab %}

## Visibility of range navigator

The `disableRangeSelector` property allows the users to display only the period selector and not the Range Selector.

{% tab template= "rangenavigator/periodselector" %}

```typescript

import { RangeNavigator, Chart, IChangedEventArgs, PeriodSelector, AreaSeries, DateTime, PeriodSelectorSettingsModel } from '@syncfusion/ej2-charts';
import { EmitType } from '@syncfusion/ej2-base';

RangeNavigator.Inject(
    PeriodSelector, DateTime, AreaSeries
);
import { chartData } from './datasource.ts';
let periodsValue: PeriodSelectorSettingsModel = {
    periods: [
        { text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
        { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
        { text: '1Y', interval: 1, intervalType: 'Years' },
        { text: '2Y', interval: 2, intervalType: 'Years', selected: true
         },
        { text: 'All' }
    ]
};
let range: RangeNavigator = new RangeNavigator(
        {
        disableRangeSelector: true,
        valueType: 'DateTime',
        series: [
            {
                dataSource: chartData,
                xName: 'x', yName: 'close', type: 'Area', width: 2,

            }
        ], periodSelectorSettings: periodsValue,
        }, '#element');
```

{% endtab %}

## See Also

* [LightWeight](./lightweight/)