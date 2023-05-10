var tooltipContent = document.createElement("div");
tooltipContent.id = 'tooltipContent';
tooltipContent.innerHTML = "<p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p>";
var tooltip = new ej.popups.Tooltip({
    content: tooltipContent
});
tooltip.appendTo('#target');


