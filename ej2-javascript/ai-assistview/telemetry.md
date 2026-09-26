---
layout: post
title: Telemetry in ##Platform_Name## AI AssistView | Syncfusion®
description: Track AI interaction metrics such as duration, tool calls, and token usage with the Syncfusion® ##Platform_Name## AI AssistView telemetry.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Telemetry in ##Platform_Name## AI AssistView

The telemetry feature in AI AssistView will track AI interaction metrics such as response duration, tool calls, model informations and render a built-in telemetry button (displaying the duration) in each response toolbar when enabled. It can also be customized using the `telemetrySettings` properties which has `metrics` & `beforeReport` event.

You can hover over the telemetry button in any response toolbar to view the telemetry report in a tooltip.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/telemetry/getting-started/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/getting-started" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/telemetry/getting-started/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/getting-started" %}
{% endif %}

## Configuring metrics

You can control which telemetry metrics are captured in the report using the `metrics` property of the [telemetrySettings](../api/ai-assistview/telemetrySettings) option. It accepts one or more values from the `TelemetryMetric` type, such as `status`, `duration`, `toolCalls`, `streamingChunks`, `model`, `inputTokens`, `outputTokens` and `totalTokens`.

Additionally, the order of metrics in the `metrics` array also determines the display order of rows in the telemetry tooltip.

| Metric | Description |
|---------|-------------|
| `status` | Indicates whether the response was completed or cancelled. |
| `duration` | Total time taken to generate the response. |
| `toolCalls` | Number of tool invocations performed while generating the response. |
| `streamingChunks` | Number of streamed content chunks received for the response. |
| `model` | Name of the AI model used to generate the response. |
| `inputTokens` | Number of tokens included in the input prompt. |
| `outputTokens` | Number of tokens generated in the response. |
| `totalTokens` | Total token count calculated as the sum of `inputTokens` and `outputTokens`. |
| `reasoningTokens` | Number of tokens consumed for reasoning by the model, when available. |
| `cachedInputTokens` | Number of input tokens served from the model cache, when available. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/telemetry/metrics/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/metrics/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/metrics" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/telemetry/metrics/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/metrics/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/metrics" %}
{% endif %}

## Customizing the report

Use the `beforeReport` event in the [telemetrySettings](../api/ai-assistview/telemetrySettings) to intercept the generated report before it is rendered. It accepts the report (`TelemetryReport`) as an argument and allows you to modify it or `null` to suppress the report delivery. Custom attributes added in this callback will be displayed additionally in the telemetry tooltip.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/telemetry/before-report/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/before-report/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/before-report" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/telemetry/before-report/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/before-report/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/before-report" %}
{% endif %}

## Displaying AI data

The AI AssistView automatically measures the metrics such as `duration`, `toolCalls`, and `streamingChunks`. To include model and token usage details, configure the optional parameter `TelemetryData` to the [addPromptResponse](../api/ai-assistview#addpromptresponse) method. The `model`, `inputTokens`, `outputTokens`, `reasoningTokens`, and `cachedInputTokens` values from this argument is merged into the final telemetry report.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/telemetry/usage-data/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/usage-data/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/usage-data" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/telemetry/usage-data/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/usage-data/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/usage-data" %}
{% endif %}

### Custom attributes

Pass custom key/value pairs through the `customAttributes` field of the [TelemetryData](../api/ai-assistview#addpromptresponse) argument to surface domain-specific metrics (for example, `region`, `tenant`, `sessionId`, or `feature`) inside the telemetry report. Each entry is rendered as its own row in the telemetry tooltip and is included alongside the standard metrics regardless of the `metrics` filter.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/telemetry/custom-attributes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/custom-attributes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/custom-attributes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/telemetry/custom-attributes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/telemetry/custom-attributes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/telemetry/custom-attributes" %}
{% endif %}

## Key characteristics

The following are the key behaviors and constraints of the telemetry support:

1. **Turn tracking**: A telemetry turn begins when a prompt is sent (or `executePrompt` is called) and ends when the response is completed or cancelled (via `stop responding` button, `cancelPrompt`, or `failPrompt`). The status is recorded as `completed` or `cancelled` respectively in the report.

2. **Telemetry button state**: The telemetry button in the response toolbar displays `— ms` (a disabled state) when no telemetry report is available for the completed or cancelled response, and then shows only the `duration` value once the report is generated.

3. **Tooltip data display**: The telemetry tooltip only displays rows for metrics that have valid values. Count-based metrics `toolCalls`, `inputTokens`, `outputTokens`, `totalTokens`, `reasoningTokens`, `cachedInputTokens`, and `streamingChunks` are displayed only when their values are positive numbers (greater than 0). Other metrics such as `model` and `status` are displayed whenever they are present.

4. **Duration formatting**: Duration values below 1 second are displayed in `ms`, and values of 1 second or above are displayed in `s` with two decimal places (for example, `500 ms`, `1.25 s`).

5. **Total tokens**: The `totalTokens` metric is automatically computed as the sum of `inputTokens` and `outputTokens` whenever either value is provided through `TelemetryData`.

6. **Metrics filter precedence**: When the `metrics` property of the [telemetrySettings](../api/ai-assistview/telemetrySettings) option is configured, only the specified metrics are retained in the report. However, `status` and `duration` are always retained, and `customAttributes` are always included in the tooltip.

7. **Regenerate flow**: Each regenerated response emits its own telemetry report. The report of the latest completion is bound to the prompt response.