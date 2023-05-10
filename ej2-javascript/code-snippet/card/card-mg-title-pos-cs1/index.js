// initialize DropDownList component
let dropDownListObject = new ej.dropdowns.DropDownList({
    placeholder:"Select Position",
    change: changed,
});

// render initialized DropDownList
dropDownListObject.appendTo('#title_position');

function changed(e) {
    var cardEle = document.querySelector('.e-card');
    var titleEle = cardEle.querySelector('.e-card-image .e-card-title');
    titleEle.className = ''
    titleEle.classList.add('e-card-title');
    titleEle.classList.add('e-card-'+ e.value);
}