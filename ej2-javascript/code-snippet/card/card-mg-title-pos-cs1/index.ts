
import { DropDownList } from '@syncfusion/ej2-dropdowns';

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    placeholder:"Select Position",
    change: changed,
    
});

// render initialized DropDownList
dropDownListObject.appendTo('#title_position');

function changed(e) {
    let cardEle = document.querySelector('.e-card');
    let titleEle = cardEle.querySelector('.e-card-image .e-card-title');
    titleEle.className = ''
    titleEle.classList.add('e-card-title');
    titleEle.classList.add('e-card-'+ e.value);
}