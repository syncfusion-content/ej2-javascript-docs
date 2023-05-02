var progressBtn = new ej.splitbuttons.ProgressButton({ 
    content: 'Progress', 
    enableProgress: true, 
    begin: function(args) {
        updateEventLog(args);
    },
    end: function(args) {
        updateEventLog(args);
    },
    progress: function(args) {
        updateEventLog(args);
    },
    fail: function(args) {
        updateEventLog(args);
    }
    });

progressBtn.appendTo('#progressbtn');

var clear = new ej.buttons.Button({ cssClass: 'e-small'});
clear.appendTo('#clear');

clear.element.onclick = () => {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].innerHTML = '';
}

function updateEventLog(args) {
    var propertyElem = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].insertAdjacentHTML('beforeend', args.name + ' Event triggered. <br />');
}

