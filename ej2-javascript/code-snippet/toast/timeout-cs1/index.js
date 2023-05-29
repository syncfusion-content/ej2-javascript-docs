
ej.base.enableRipple(true);

//Initialize Toast component
var toast = new ej.notifications.Toast({
  title: 'Anjolie Stokes',
  content: '<p><img src="https://ej2.syncfusion.com/vue/demos/src/toast/resource/laura.png"></p>',
  position: { X: "Right", Y: "Bottom" },
  width: 230,
  height: 250,
      buttons : [{
      model: { content: "Ignore" }
  }, {
    model: { content: "reply" }
  }]
});
//Render initialized Toast component
toast.appendTo('#elementToastTime');

document.getElementById('show_toast').onclick = function () {
  let value = parseInt(document.getElementById('toast_input_index').value)
  toast.show({timeOut: value});
};


