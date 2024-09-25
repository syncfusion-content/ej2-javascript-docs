import { AzureOpenAI } from "https://cdn.jsdelivr.net/npm/openai@4.56.0/+esm";
 
//Warning: Do not expose your API key in the client-side code. This is only for demonstration purposes.

// Replace your Azure OpenAI endpoint, apiVersion, deployment and API key here
const endpoint = "AZURE_OPENAI_ENDPOINT";
const apiKey = "AZURE_OPENAI_API_KEY";
const deployment = "DEPLOYMENT_NAME";
const apiVersion = "API_VERSION";
 
const client = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment,
    dangerouslyAllowBrowser: true
});
 
window.AzureAIRequest = async function (options) {
    try {
        const result = await client.chat.completions.create({
            messages: options.messages,
            model: "",
            top_p: options.topP,
            temperature: options.temperature,
            max_tokens: options.maxTokens,
            frequency_penalty: options.frequencyPenalty,
            presence_penalty: options.presencePenalty,
            stop: options.stopSequences
        });
        return result.choices[0].message.content;
    } catch (err) {
        console.error("Error occurred:", err);
    }
}