import { ListView, SelectedItem } from '@syncfusion/ej2-lists';
import { Dialog } from '@syncfusion/ej2-popups';
import { closest, enableRipple, MouseEventArgs } from '@syncfusion/ej2-base';
import { DataManager, Query } from "@syncfusion/ej2-data";
enableRipple(true);

let ascClass = 'e-sort-icon-ascending';
let desClass = 'e-sort-icon-descending';

//define the array of JSON
let fruitsdata: { [key: string]: Object }[] = [
    { text: 'Date', id: '1', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/dates.jpg' },
    { text: 'Fig', id: '2', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/fig.jpg' },
    { text: 'Apple', id: '3', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apple.png' },
    { text: 'Apricot', id: '4', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apricot.jpg' },
    { text: 'Grape', id: '5', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/grape.jpg' },
    { text: 'Strawberry', id: '6', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/strawberry.jpg' },
    { text: 'Pineapple', id: '7', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/pineapple.jpg' },
    { text: 'Melon', id: '8', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/melon.jpg' },
    { text: 'Lemon', id: '9', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/lemon.jpg' },
    { text: 'Cherry', id: '10', imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/cherry.jpg' },
];

//Initialize ListView control
let listViewInstance: ListView = new ListView({

    //set the data to datasource property
    dataSource: fruitsdata.slice(),

    //set the template for list items
    template: '<div class="fruits"><div class="first"><img id="listImage" src="${imgUrl}" alt="fruit" /><button class="delete e-control e-btn e-small e-round e-delete-btn e-primary e-icon-btn" data-ripple="true"><span class="e-btn-icon e-icons delete-icon"></span></button></div><div class="fruitName">${text}</div></div>',

    //set sortOrder for list items
    sortOrder: 'Ascending',
    actionComplete: () => {
        wireEvents();
    }

});

//Render initialized ListView
listViewInstance.appendTo('#element');

let dialogObj: Dialog = new Dialog({
    header: 'Add fruit',
    content: '<div id="listDialog"><div class="input_name"><label for="name">Fruit Name: </label><input id="name" class="e-input" type="text" placeholder="Enter fruit name"/></div><div><label for="imgurl">Fruit Image: </label><input id="imgurl" class="e-input" type="text" placeholder="Enter image url"/></div></div>',
    showCloseIcon: true,
    buttons: [{
        click: dlgButtonClick,
        buttonModel: { content: 'Add', isPrimary: true }
    }],
    width: '300px',
    visible: false
});

dialogObj.appendTo('#dialog');

function addItem() {
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("imgurl") as HTMLInputElement).value = "";
    dialogObj.show()
}

function wireEvents() {
    Array.prototype.forEach.call(document.getElementsByClassName('e-delete-btn'), (ele: HTMLButtonElement) => {
        ele.addEventListener('click', onDeleteBtnClick);
    });
    (document.getElementById("add") as HTMLElement).addEventListener('click', addItem);
    (document.getElementById("sort") as HTMLElement).addEventListener('click', sortItems);
    (document.getElementById("search") as HTMLElement).addEventListener("keyup", onKeyUp);
}

//Here we are removing list item
function onDeleteBtnClick(e: MouseEventArgs) {
    e.stopPropagation();
    let li: Element = closest(e.currentTarget as Element, '.e-list-item');
    let data = listViewInstance.findItem(li);
    listViewInstance.removeItem(data as any);
    new DataManager(fruitsdata).remove('id', { id: (<{ [key: string]: any }>data)["id"] });
}

//Here we are adding list item
function dlgButtonClick() {
    let name: string = (document.getElementById("name") as HTMLInputElement).value;
    let url: string = (document.getElementById("imgurl") as HTMLInputElement).value;
    let id: number = Math.random() * 10000;
    listViewInstance.addItem([{ text: name, id: id, imgUrl: url }]);
    fruitsdata.push({ text: name, id: id, imgUrl: url });
    listViewInstance.element.querySelector('[data-uid="' + id + '"]').getElementsByClassName('e-delete-btn')[0].addEventListener('click', onDeleteBtnClick);
    dialogObj.hide();
}

//Here we are sorting list item
function sortItems() {
    let ele: Element = (document.getElementById("sort") as HTMLElement).firstElementChild as Element;
    let des = ele.classList.contains(desClass) ? true : false;
    if (des) {
        ele.classList.remove(desClass);
        ele.classList.add(ascClass);
        listViewInstance.sortOrder = 'Ascending'
    } else {
        ele.classList.remove(ascClass);
        ele.classList.add(desClass);
        listViewInstance.sortOrder = 'Descending'
    }
    listViewInstance.dataBind();
    wireEvents();
}

//Here, the list items are filtered using the DataManager instance.
function onKeyUp() {
    let value: string = (document.getElementById("search") as HTMLInputElement).value;
    let data: Object[] = new DataManager(fruitsdata).executeLocal(
        new Query().where("text", "startswith", value, true)
    );
    if (!value) {
        listViewInstance.dataSource = fruitsdata.slice();
    } else {
        listViewInstance.dataSource = data as { [key: string]: Object }[];
        listViewInstance.dataBind();
    }
}