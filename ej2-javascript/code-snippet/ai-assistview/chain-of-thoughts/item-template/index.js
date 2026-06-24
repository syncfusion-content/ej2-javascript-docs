ej.base.enableRipple(true);

ej.interactivechat.AIAssistView.Inject(ej.interactivechat.AssistThinking);

function stageItemTemplate(data) {
    var item = data.item;
    var statusClass = item.isStageInProgress ? 'e-stage-inprogress' : 'e-stage-done';
    return '<div class="custom-stage-item ' + statusClass + '">' +
               '<span class="e-icons ' + item.dotCss + '"></span>' +
               '<div class="custom-stage-content">' + item.content + '</div>' +
           '</div>';
}

var aiAssistView = new ej.interactivechat.AIAssistView({
    itemTemplate: stageItemTemplate,
    prompts: [
        {
            prompt: 'Explain photosynthesis.',
            response: 'Photosynthesis converts sunlight into chemical energy stored in glucose.',
            blocks: [
                {
                    blockType: 'thinking',
                    title: 'Reasoning steps',
                    isActive: false,
                    collapsed: true,
                    collapsible: true,
                    stages: [
                        { id: 'step1', status: 'completed', content: 'Recalled definition of photosynthesis.' },
                        { id: 'step2', status: 'completed', content: 'Identified inputs: sunlight, CO₂, water.' },
                        { id: 'step3', status: 'completed', content: 'Identified outputs: glucose, oxygen.' }
                    ]
                }
            ]
        }
    ],
    promptRequest: function () {
        setTimeout(function () {
            aiAssistView.addPromptResponse({
                blocks: [],
                response: 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
            }, true);
        }, 1000);
    }
});

aiAssistView.appendTo('#placeholder');