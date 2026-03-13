ej.base.enableRipple(true);

// Define predefined prompts and responses
var promptsData = [{
        prompt: "What tools or apps can help me prioritize tasks?",
        response: '<div>Here are some effective task prioritization tools:\
                    <ul>\
                        <li><strong>Todoist:</strong> A robust task manager with priority levels and project organization.</li>\
                        <li><strong>Asana:</strong> Project management tool with timeline and board views.</li>\
                        <li><strong>Microsoft To Do:</strong> Simple and integrated with Microsoft ecosystem.</li>\
                        <li><strong>Notion:</strong> All-in-one workspace for notes, databases, and tasks.</li>\
                        <li><strong>ClickUp:</strong> Comprehensive tool with customizable workflows and prioritization features.</li>\
                    </ul>\
                </div>'
    },
    {
        prompt: "How do I manage multiple projects effectively?",
        response: '<div>Here are best practices for managing multiple projects:\
                    <ul>\
                        <li><strong>Use a centralized dashboard:</strong> Track all projects in one place.</li>\
                        <li><strong>Set clear milestones:</strong> Break down each project into manageable phases.</li>\
                        <li><strong>Prioritize tasks:</strong> Focus on high-impact items first.</li>\
                        <li><strong>Delegate effectively:</strong> Assign tasks to team members based on skills.</li>\
                        <li><strong>Regular reviews:</strong> Conduct weekly or bi-weekly project status meetings.</li>\
                    </ul>\
                </div>'
    }
];

var assistViews = [{
    name: "Task Assistant",
    iconCss: "e-icons e-assistview-icon"
}];

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    promptSuggestions: [
        "What tools or apps can help me prioritize tasks?",
        "How do I manage multiple projects effectively?"
    ],
    prompts: promptsData,
    views: assistViews,
    promptRequest: function() {
        setTimeout(function() {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#scroll-to-bottom');