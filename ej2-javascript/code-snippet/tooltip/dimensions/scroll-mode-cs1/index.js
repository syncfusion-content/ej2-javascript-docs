var tooltipContent = document.createElement("div");
tooltipContent.id = 'tooltipContent';
tooltipContent.innerHTML = "<b>Environmentally friendly</b> or environment-friendly, (also referred to as eco-friendly, nature-friendly, and green) are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.";
var tooltip = new ej.popups.Tooltip({
    width: '300px',
    height: '60px',
    content: tooltipContent,
    isSticky: true
});
tooltip.appendTo('#target');


