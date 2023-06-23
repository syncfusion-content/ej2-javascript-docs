ej.base.enableRipple(true);

document.getElementById('targetButton').onclick = function(){
    // Initialize and render confirm dialog
    ej.popups.DialogUtility.confirm('This is a Confirmation Dialog!');
};

