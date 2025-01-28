import { continent } from './es5-datasource.js';

var text, title, headerElement, backBtn, hasChild = false;

//Initialize ListView control
var listviewInstance = new ej.lists.ListView({
    //set the data to dataSource property
    dataSource: continent,
    // map the groupBy field with category column
    fields: { tooltip: "text" },
    headerTemplate: '<div class="header-content"><span>Continent</span></div>',
    showHeader: true,
    select: onSelect,
    actionComplete: onComplete
});
//Render initialized ListView
listviewInstance.appendTo("#listview");

backBtn = document.querySelector(".e-back-button");
title = document.querySelector(".header-content");
title.addEventListener("click", navigateBack);

function onSelect(e) {
    text = e.text;
    hasChild = !e.item.classList.contains("e-has-child");
}

function onComplete() {
    if (!hasChild) {
        headerElement = document.querySelector(".header-content").innerHTML;
        title = document.querySelector(".nested-header .header-content");
        if (headerElement && text != undefined) {
            // Create element with new clicked item in header
            var element = document.createElement("span");
            element.textContent = ` > ${text}`;
            title.appendChild(element);

            // Recalculate levels, Since an element is added
            calculateLevelForElements();
        }
    }
}

backBtn.addEventListener("click", function () {
    var elements = document.querySelectorAll(".nested-header .header-content span");
    elements[elements.length - 1].remove();

    // Recalculate levels, Since an element is removed
    calculateLevelForElements();
    hasChild = (backBtn.style.display !== "none");
});

// Calculate level for each header element
function calculateLevelForElements() {
    var elements = document.querySelectorAll(".nested-header .header-content span");
    let index = 0;
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[index].level = i;
        index++;
    }
}

// Navigate back event handler based on element's level
function navigateBack(event) {
    if (event.target && event.target.level) {
        for (let i = 0; i <= event.target.level; i++) {
            backBtn.click();
        }
    }
}