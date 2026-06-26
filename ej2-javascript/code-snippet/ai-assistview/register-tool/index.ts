import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import { CircularGauge, Annotations, GaugeTooltip, Legend } from '@syncfusion/ej2-circulargauge';
enableRipple(true);

CircularGauge.Inject(Annotations, GaugeTooltip, Legend);

let scoreBlocks: any = [];
let weatherData: any = [ { blockType: "text", content: "Here is the current weather forecast for your location:" },
                    { blockType: "tool", toolName : "weather-card" },
                    { blockType: "text", content: "**Scattered Showers Expected** with temperatures ranging from **1°C to -4°C**. There is a **100% chance of snow**, so it's recommended to bundle up and exercise caution if traveling. The weather system is expected to continue throughout the day with moderate precipitation." }]
let aiAssistView: AIAssistView = new AIAssistView({
    promptSuggestions: ["Suggest a healthy breakfast recipe under 5 ingredients", "What is the weather in New York?" ],
    enableStreaming: true,
    prompts: [{prompt: 'What is the weather in New York?', blocks: weatherData}],
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    },
    promptRequest: onPromptRequest
});

// Registering generative tool UI
aiAssistView.registerToolUI({
    toolName: 'weather-card',
    template: '<div tabindex="0" class="e-card" id="weather_card" role="button"><div class="e-card-header"><div class="e-card-header-caption"><div class="e-card-header-title">Today</div><div class="e-card-sub-title">New York - Scattered Showers.</div></div></div><div class="e-card-header weather_report"><div class="e-card-header-image"></div><div class="e-card-header-caption"><div class="e-card-header-title">1º / -4º</div><div class="e-card-sub-title">Chance for snow: 100%</div></div></div></div>'
});

function recipeTemplate(args: any) {

    var data = Object.assign({
        title: "Custom Recipe",
        ingredients: [],
        instructions: []
    }, args);

    return `
        <div class="recipe-panel e-card">
            <h2 class="recipe-title">${data.title}</h2>
            <div class="recipe-section">
                <div class="recipe-header">
                    <h4>🥕 Ingredients</h4>
                    <button class="e-btn e-primary e-small add-ingredient">
                        Add Ingredient
                    </button>
                </div>
                <div class="ingredients-list">
                    ${data.ingredients.map(function (ingredient: any) {
                        return `
                            <div class="ingredient-item">
                                <span class="ingredient-name editable" contenteditable="true">${ingredient.name || ingredient}</span>
                                <span class="ingredient-qty editable" contenteditable="true">${ingredient.quantity || ''}</span>
                                <button class="e-btn e-small e-danger remove-ingredient e-icons e-close"></button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class="recipe-section">
                <div class="recipe-header">
                    <h4>📋 Instructions</h4>
                    <button class="e-btn e-primary e-small add-step">
                        Add Step
                    </button>
                </div>
                <div class="instructions-list">
                    ${data.instructions.map(function (step: any) {
                        return `
                            <div class="step-item">
                                <span class="step-text editable" contenteditable="true">${step}</span>
                                <button class="e-btn e-small e-danger remove-step e-icons e-close"></button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <button class="e-btn e-primary check-score-btn">
                Check Recipe Score
            </button>
        </div>
    `;
}

aiAssistView.registerToolUI({
    toolName: 'recipe-maker',
    template: recipeTemplate,
    handler: function (container: any) {
        container.addEventListener('click', function (e: any) {
            if (e.target.classList.contains('add-ingredient')) {
                container.querySelector('.ingredients-list')
                    .insertAdjacentHTML(
                        'beforeend',
                        `
                        <div class="ingredient-item">
                            <span class="ingredient-name editable" contenteditable="true">
                                New Ingredient
                            </span>
                            <span class="ingredient-qty editable" contenteditable="true">
                                qty
                            </span>
                            <button class="e-btn e-small e-danger remove-ingredient e-icons e-close"></button>
                        </div>
                        `
                    );
                return;
            }
            if (e.target.classList.contains('add-step')) {
                container.querySelector('.instructions-list')
                    .insertAdjacentHTML(
                        'beforeend',
                        `
                        <div class="step-item">
                            <span class="step-text editable" contenteditable="true">
                                New instruction step...
                            </span>
                            <button class="e-btn e-small e-danger remove-step e-icons e-close"></button>
                        </div>
                        `
                    );
                return;
            }
            if (e.target.classList.contains('remove-ingredient')) {
                e.target.closest('.ingredient-item').remove();
                return;
            }
            if (e.target.classList.contains('remove-step')) {
                e.target.closest('.step-item').remove();
                return;
            }
            if (e.target.classList.contains('check-score-btn')) {
                var recipeData = getCurrentRecipeData(container);
                var score = calculateRecipeScore(recipeData);
                scoreBlocks = [{blockType: 'text', content: `**Recipe Score Analysis**\n\nHere is the health & quality score for **${recipeData.title}**.` },
                                { blockType: 'tool', toolName: 'recipe-score-gauge', props: { score: score, title: recipeData.title } },
                                { blockType: 'text', content: 'You can continue editing the recipe above and check the score again anytime.' }];
                aiAssistView.executePrompt('Generate a score analysis for this recipe.');
            }
        });
    }
});

function recipeScoreGaugeTemplate(args: any) {
    var score = args.score || 85;
    return `
        <div class="score-gauge-panel e-card">
            <div class="score-gauge"></div>
            <div class="score-value">
                ${score}/100
            </div>
            <p class="score-comment">
                ${getScoreComment(score)}
            </p>
        </div>
    `;
}

aiAssistView.registerToolUI({
    toolName: 'recipe-score-gauge',
    template: recipeScoreGaugeTemplate,
    handler: function (container: any, args: any) {
        var score = args.score || 85;
        var recipeTitle = args.title || "Recipe Score";
         let circulargauge: CircularGauge = new CircularGauge({
            height: '380px',
            width: '380px',
            title: recipeTitle,
            allowMargin: false,
            titleStyle: { size: '18px', fontFamily: 'inherit' },
            tooltip: { enable: true },
            axes: [
                {
                    annotations: [ { content: `<div class="gauge-annotation">${score}</div>`, angle: 0, zIndex: '1', radius: '-10%' }],
                    lineStyle: { width: 0 },
                    labelStyle: { font: { size: '12px', fontFamily: 'inherit' }, position: 'Outside', offset: -40 },
                    majorTicks: { height: 12, width: 1.5, interval: 2, offset: 35 },
                    minorTicks: { height: 0 },
                    startAngle: 270,
                    endAngle: 90,
                    minimum: 0,
                    maximum: 10,
                    radius: '105%',
                    pointers: [{radius: '70%', needleEndWidth: 2, pointerWidth: 5, value: score / 10, cap: { radius: 8, border: { width: 2 }}}],
                    ranges: [
                        { start: 0, end: 2, startWidth: 40, endWidth: 40, color: '#F03E3E', radius: '80%' },
                        { start: 2, end: 5, startWidth: 40, endWidth: 40, color: '#f6961e', radius: '80%' },
                        { start: 5, end: 8, startWidth: 40, endWidth: 40, color: '#FFDD00', radius: '80%' },
                        { start: 8, end: 10, startWidth: 40, endWidth: 40, color: '#30B32D', radius: '80%' }
                    ]
                }
            ]
        });
        circulargauge.appendTo(container.querySelector('.score-gauge'));
    }
});

aiAssistView.appendTo('#register-tool');

function getCurrentRecipeData(container: any) {
    return {
        title:
            container.querySelector('.recipe-title')
                .textContent.trim() || "Untitled Recipe",
        ingredients:
            Array.from(
                container.querySelectorAll('.ingredient-item')
            )
                .map(function (item: any) {
                    return {
                        name: item.querySelector('.ingredient-name')
                            .textContent.trim(),
                        quantity: item.querySelector('.ingredient-qty')
                            .textContent.trim()
                    };
                })
                .filter(function (ingredients) {
                    return ingredients.name;
                }),
        instructions:
            Array.from(
                container.querySelectorAll('.step-item')
            )
                .map(function (item: any) {
                    return item.querySelector('.step-text')
                        .textContent.trim();
                })
                .filter(Boolean)
    };
}

function calculateRecipeScore(recipe: any) {
    var i, score = 100,
        ingredients = recipe.ingredients || [],
        instructions = recipe.instructions || [],
        validIng = 0,
        validSteps = 0;
    if (!ingredients.length) return 15;
    if (!instructions.length) return 20;
    for (i = 0; i < ingredients.length; i++) {
        var n = (ingredients[i].name || "").trim(),
            q = (ingredients[i].quantity || "").trim();
        if (!n || !q) score -= 12;
        else validIng++;
    }
    score += (validIng >= 5 ? 10 : validIng === 1 ? -20 : validIng === 2 ? -10 : 0);
    for (i = 0; i < instructions.length; i++) {
        var s = (instructions[i] || "").trim();
        if (!s) score -= 15;
        else validSteps++;
    }
    score += (validSteps >= 4 ? 10 : validSteps === 1 ? -25 : validSteps === 2 ? -15 : validSteps === 3 ? -5 : 0);
    if (validIng >= 3 && validSteps >= 3) score += 8;
    score += Math.floor(Math.random() * 6);
    return score < 10 ? 10 : score > 100 ? 100 : score;
}

function getScoreComment(score: any) {
    if (score >= 90) {
        return "Outstanding recipe! Highly recommended.";
    }
    if (score >= 80) {
        return "Very good recipe with excellent balance.";
    }
    if (score >= 70) {
        return "Solid recipe. Minor improvements possible.";
    }
    return "Average recipe. Consider refining ingredients or steps.";
}

function onPromptRequest(args: any) {
    setTimeout(function () {
        if (args.prompt === "What is the weather in New York?") {
            aiAssistView.addPromptResponse({ blocks: weatherData });
        }
        else if (args.prompt === "Generate a score analysis for this recipe.") {
            aiAssistView.addPromptResponse({ blocks: scoreBlocks });
        }
        else if (args.prompt === 'Suggest a healthy breakfast recipe under 5 ingredients') {
            var mockRecipe = {
                title: "Butter Toast",
                ingredients: [ { name: "Bread slices", quantity: "2" }, { name: "Butter", quantity: "1 tbsp" }, { name: "Sugar", quantity: "1 tsp" } ],
                instructions: [ "Spread butter on bread slices", "Toast until golden and sprinkle sugar on top"]
            };
            aiAssistView.addPromptResponse({
                blocks: [ { blockType: 'text', content: '**Here is your recipe!** Feel free to edit ingredients and steps, then click **Check Recipe Score**.' },
                        { blockType: 'tool', toolName: 'recipe-maker', props: mockRecipe }]
            });
        } else {
            aiAssistView.addPromptResponse("For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.");
        }
    }, 1000);
}

function toolbarItemClicked(args: any) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        aiAssistView.promptSuggestions = ["Suggest a healthy breakfast recipe under 5 ingredients", "What is the weather in New York?" ];
    }
}
