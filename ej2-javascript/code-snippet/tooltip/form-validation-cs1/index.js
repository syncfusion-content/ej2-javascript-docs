var button1 = new ej.buttons.Button();
button1.appendTo('#sample');
var button2 = new ej.buttons.Button();
button2.appendTo('#clear');
var tooltip1 = new ej.popups.Tooltip({
   position: 'RightCenter'
});
tooltip1.appendTo('#uname');
var tooltip2 = new ej.popups.Tooltip({
   position: 'RightCenter'
});
tooltip2.appendTo('#mail');
var tooltip3 = new ej.popups.Tooltip({
   position: 'RightCenter'
});
tooltip3.appendTo('#pwd');
var tooltip4 = new ej.popups.Tooltip({
   position: 'RightCenter'
});
tooltip4.appendTo('#cpwd');

var uname = document.getElementById('uname');
var pwd = document.getElementById('pwd');
var cpwd = document.getElementById('cpwd');
document.getElementById('sample').addEventListener('click', function () {
   if ((uname.value.length > 0) & (uname.value.length < 4)) {
      uname.title = 'Required Minimum 4 Characters';
      uname.style.backgroundColor = 'red';
      tooltip1.open(uname);
   } else {
      uname.style.backgroundColor = 'white';
   }
   if (pwd !== '' && pwd.value.length < 8) {
      pwd.title = 'Required Minimum 8 Characters';
      pwd.style.backgroundColor = 'red';
      tooltip3.open(pwd);
   } else {
      pwd.style.backgroundColor = 'white';
   }
   if (
      uname.value.length >= 4 &&
      pwd !== '' &&
      pwd.value.length >= 8 &&
      pwd == cpwd.value
   ) {
      alert('Form Submitted');
   } else {
      alert('Details are not Valid');
   }
});
document.getElementById('clear').addEventListener('click', function () {
   uname.style.backgroundColor = 'white';
   pwd.style.backgroundColor = 'white';
   tooltip1.close(uname);
   uname.title = 'Please enter your name';
   tooltip3.close(pwd);
});