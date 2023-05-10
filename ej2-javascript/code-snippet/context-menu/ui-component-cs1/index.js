ej.base.enableRipple(true);

var menuItems = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' }
];

var i = 1;
var menuOptions = {
    target: '#target',
    items: menuItems,
    beforeItemRender: function(args) {
        var checkbox = new ej.buttons.CheckBox({ label: 'Option'+  i, checked: i%2 === 0 ? true : false });
        args.element.innerHTML = '';
        checkbox.appendTo('#checkbox'+i);
        var checkbox = document.getElementsByClassName('e-checkbox-wrapper');
        args.element.appendChild(checkbox[0]);
        i++;
    },
    beforeClose: function(args) {
        args.cancel = true;
    },
    select: function(args) {
        var selectedElem = args.element.parentElement.querySelectorAll('.e-selected');
        for(var i=0; i < selectedElem.length; i++){
           var ele = selectedElem[i];
           ele.classList.remove('e-selected');
        }
        var checkbox = args.element.childNodes[0];
        var frame = checkbox.querySelector('.e-frame');
        if (checkbox && frame.classList.contains('e-check')) {
            frame.classList.remove('e-check');
        } else if (checkbox) {
            frame.classList.add('e-check');
        }
    }
};

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

