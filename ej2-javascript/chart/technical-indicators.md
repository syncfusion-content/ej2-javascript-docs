---
layout: post
title: Technical indicators in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Technical indicators in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Technical indicators 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Technical indicators in ##Platform_Name## Chart control

A technical indicator is a mathematical calculation based on historic price, volume or open interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of stock. To render a Accumulation Distribution Indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `AccumulationDistribution` and inject
`AccumulationDistributionIndicator` module using `Chart.Inject(AccumulationDistributionIndicator)`. To calculate the signal line [`volume`](../api/chart/technicalIndicatorModel/) field is additionally added with `dataSource`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs1" %}
{% endif %}

## Average True Range (ATR)

ATR measures the stock volatility by comparing the current value with the previous value. To render a Average True Range (ATR) Indicator,
use indicator [`type`](../api/chart/technicalIndicatorModel/) as `Atr` and inject `AtrIndicator` module using `Chart.Inject(AtrIndicator)`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs2" %}
{% endif %}

## Bollinger Band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `BollingerBand` and inject `BollingerBands` module using `Chart.Inject(BollingerBands)` method. Bollinger band will be represented by three lines (upperLine, lowerLine, signalLine). The default values of the Bollinger Band [`period`](../api/chart/technicalIndicatorModel/) is 14 and [`standardDeviations`](../api/chart/technicalIndicatorModel/) is 2.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs3" %}
{% endif %}

**Customization of BollingerBand**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](../api/chart/technicalIndicatorModel/),
and the lowerLine can be customized by using [`lowerLine`](../api/chart/technicalIndicatorModel/) properties of indicator.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs4" %}
{% endif %}

## Exponential Moving Average (EMA)

Moving average Indicators are used to define the direction of the trend. To render a EMA Indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `Ema` and inject `EmaIndicator` module using `Chart.Inject(EmaIndicator)`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs5" %}
{% endif %}

## Momentum

Momentum shows the speed at which the price of the stock is changing. To render a Momentum indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `Momentum`and inject `MomentumIndicator` module using `Chart.Inject(MomentumIndicator)` method. Momentum indicator will be represented by two lines (upperLine, signalLine).In momentum indicator the upperBand value is always renders at the value 100.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs6" %}
{% endif %}

**Customization of MomentumIndicator**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using [`upperLine`](../api/chart/technicalIndicatorModel/) property of indicator.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs7" %}
{% endif %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMA's. To render a MACD Indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as
`Macd` and inject `MacdIndicator` module using `Chart.Inject(MacdIndicator)`.MACD indicator will be represented by MACD line,signal line, MACD histogram. MACD histogram is used to differentiate MACD line and signal line.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs8" %}
{% endif %}

**Customization of MACD**

`stroke`, `stroke-width`, and `color`of macdLine can be customized by using,[`macdLine`](../api/chart/technicalIndicatorModel/),
property of indicator. The positive and negative changes of histogram can be customized by [`macdPositiveColor`](../api/chart/technicalIndicatorModel/) and [`macdNegativeColor`](../api/chart/technicalIndicatorModel/) properties. The [`macdType`] is used to define the type of MACD indicator. To customize the MACD period using [`slowPeriod`](../api/chart/technicalIndicatorModel/) and [`fastPeriod`](../api/chart/technicalIndicatorModel/) properties.

By default `macdType` as 'Both'.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs9" %}
{% endif %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render a RSI Indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `Rsi` and inject `RsiIndicator` module using `Chart.Inject(Rsindicator)`.RSI indicator will be represented
by three lines (upperBand, lowerBand, signalLine). The upperBand and lowerBand values are customized by [`overBought`](../api/chart/technicalIndicatorModel/) and [`overSold`](../api/chart/technicalIndicatorModel/) properties of indicator and the signalLine is calculated by RSI formula.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs10" %}
{% endif %}

## Simple Moving Average (SMA)

Moving average Indicators are used to define the direction of the trend. To render a SMA Indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `Sma` and inject `SmaIndicator` module using `Chart.Inject(SmaIndicator)`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs11" %}
{% endif %}

## Stochastic

It shows how a stock is, when compared to previous state. To render a Stochastic indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `Stochastic` and inject `StochasticIndicator` module using `Chart.Inject(StochasticIndicator)` method.
stochastic indicator will be represented by four lines (upperLine, lowerLine, periodLine, signalLine). In stochastic indicator the upperBand value and lowerBand value is customized by [`overBought`](../api/chart/technicalIndicatorModel/) and [`overSold`](../api/chart/technicalIndicatorModel/) properties of indicators and the periodLine and signalLine is render based on stochastic formula.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs12" %}
{% endif %}

**Customization of StochasticIndicator**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](../api/chart/technicalIndicatorModel/),
the lowerLine can be customized by using [`lowerLine`](../api/chart/technicalIndicatorModel/) and the periodLine can be customized by using [`periodLine`](../api/chart/technicalIndicatorModel/) properties of indicator. To customize the period to find the average price using [`kPeriod`](../api/chart/technicalIndicatorModel/) and [`dPeriod`](../api/chart/technicalIndicatorModel/)
properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs13" %}
{% endif %}

## Triangular Moving Average (TMA)

Moving average Indicators are used to define the direction of the trend. To render a TMA Indicator, use indicator [`type`](../api/chart/technicalIndicatorModel/) as `Tma` and inject `TmaIndicator` module using `Chart.Inject(TmaIndicator)`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs14" %}
{% endif %}

**Customization of Technical Indicators**

`stroke`, `stroke-width`, and `color` of signalLine can be customized by using,[`fill`](../api/chart/technicalIndicatorModel/), [`width`](../api/chart/technicalIndicatorModel/) and [`dashArray`](../api/chart/technicalIndicatorModel/) properties. and the [`period`](../api/chart/technicalIndicatorModel/) property is used to predict the data forecast calculations. The [`field`](../api/chart/technicalIndicatorModel/) value is used to the compare the current price with previous price. It is applicable to Bollinger bands and moving averages. The [`showZones`](../api/chart/technicalIndicatorModel/#showzones) property is used to shows/Hides the overBought and overSold regions. It is applicable for RSI and stochastic indicators.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs15" %}
{% endif %}

**Data Source**

Usually technical indicators are added along with a financial series. The [`seriesName`](../api/chart/technicalIndicatorModel/) represents the series, the data of which has to be analysed through indicators.

Technical indicators can also be added without series using [`dataSource`](../api/chart/technicalIndicatorModel/) property of indicator.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/technical-indicators-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/technical-indicators-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/technical-indicators-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/technical-indicators-cs16" %}
{% endif %}