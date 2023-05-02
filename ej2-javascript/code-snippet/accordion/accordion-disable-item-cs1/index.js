ej.base.enableRipple(true);

var success = 'Your payment successfully processed';
var email_alert = 'Enter valid email address';
var mobile_alert = 'Mobile number length should be 10';
var card_alert = 'Card number length should be 16';
var cvv_alert = 'CVV number length should be 3';

var mobile = new ej.inputs.NumericTextBox({
  placeholder: 'Mobile',
  floatLabelType: 'Auto',
  format: '0',
  showSpinButton: false
});
mobile.appendTo('#mobile');

var cardNum = new ej.inputs.NumericTextBox({
  placeholder: 'Card No',
  floatLabelType: 'Auto',
  format: '0',
  showSpinButton: false
});
cardNum.appendTo('#cardNo');

var datepicker = new ej.calendars.DatePicker({
  width: '100%',
  format: 'MM/yyyy',
  floatLabelType: 'Auto',
  placeholder: 'Expiry Date'
});
datepicker.appendTo('#expiry');

var cvv = new ej.inputs.NumericTextBox({
  placeholder: 'CVV',
  floatLabelType: 'Auto',
  format: '0',
  showSpinButton: false
});
cvv.appendTo('#CVV');

var alertDialog = new ej.popups.Dialog({
  header: 'Alert',
  width: 200,
  isModal: true,
  content: '',
  target: document.body,
  buttons: [{
    buttonModel: { content: 'Ok', isPrimary: true },
    click: (() => {
      alertDialog.hide();
      if (acrdnObj.expandedIndices[0] === 2 && alertDialog.content === success) {
        acrdnObj.enableItem(0, true);
        acrdnObj.enableItem(1, false);
        acrdnObj.enableItem(2, false);
        acrdnObj.expandItem(true, 0);
      }
    })
  }]
});
alertDialog.appendTo('#alertDialog');
alertDialog.hide();

var acrdnObj = new ej.navigations.Accordion({
  expanding: expand,
  created: () => {

  },
  items: [
    { header: 'Sign In', content: '#Sign_In_Form', expanded: true },
    { header: 'Delivery Address', content: '#Address_Fill' },
    { header: 'Card Details', content: '#Card_Fill' },
  ]
});
acrdnObj.appendTo('#element');

function checkMail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true);
  } else {
    alertDialog.content = email_alert;
    alertDialog.show();
    return (false);
  }
}

function checkMobile(mobile) {
  if (mobile.match(/^\d{10}$/)) {
    return (true);
  } else {
    alertDialog.content = mobile_alert;
    alertDialog.show();
    return (false);
  }
}

function checkCardNo(cardNo) {
  if (cardNo.match(/^\d{16}$/)) {
    return (true);
  } else {
    alertDialog.content = card_alert;
    alertDialog.show();
    return (false);
  }
}

function checkCVV(cvv) {
  if (cvv.match(/^\d{3}$/)) {
    return (true);
  } else {
    alertDialog.content = cvv_alert;
    alertDialog.show();
    return (false);
  }
}

function expand(e) {
  if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 0) {
    document.getElementById('Continue_Btn').onclick = (e) => {
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      if (email.value !== '' && password.value !== '') {
        if (checkMail(email.value)) {
          email.value = password.value = '';
          acrdnObj.enableItem(1, true);
          acrdnObj.enableItem(0, false);
          acrdnObj.expandItem(true, 1);
        }
        document.getElementById('err1').classList.remove('show');
      } else {
        document.getElementById('err1').classList.add('show');
      } 
    };
  } else if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 1) {
    document.getElementById('Continue_BtnAdr').onclick = (e) => {
      var name = document.getElementById('name');
      var address = document.getElementById('address');
      var mobile = document.getElementById('mobile');
      if ((name.value !== '') && (address.value !== '') && (mobile.value !== '')) {
        if (checkMobile(mobile.value)) {
          acrdnObj.enableItem(2, true);
          acrdnObj.enableItem(1, false);
          acrdnObj.expandItem(true, 2);
        }
        document.getElementById('err2').classList.remove('show');
      } else {
        document.getElementById('err2').classList.add('show');
      }
    };
  } else if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 2) {
    document.getElementById('Back_Btn').onclick = (e) => {
      acrdnObj.enableItem(1, true);
      acrdnObj.enableItem(2, false);
      acrdnObj.expandItem(true, 1);
    };
    document.getElementById('Save_Btn').onclick = (e) => {
      var cardHolder = document.getElementById('cardHolder');
      var expiry = document.getElementById('expiry');
      var cardNo = document.getElementById('cardNo');
      var cvv = document.getElementById('CVV');
      if ((cardNo.value !== '') && (cardHolder.value !== '') && (expiry.value !== '') && (cvv.value !== '')) {
        if (checkCardNo(cardNo.value)) {
          if (checkCVV(cvv.value)) {
            alertDialog.content = success;
            alertDialog.show();
          }
        }
        document.getElementById('err3').classList.remove('show');
      } else {
        document.getElementById('err3').classList.add('show');
      }
    };
  }
}

