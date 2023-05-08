
// To Configure RegExp for predicting Numeric values on keyUp event function

function onKeyup(e) {
    let str = e.value.match(/^[0-9]+$/);
    if (!((str && str.length > 0)) && e.value.length) {
       e.classList.add('e-error');
    } else {
      e.classList.remove('e-error');
    }
  }

