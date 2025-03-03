import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let button1: Button = new Button();
button1.appendTo('#sample');
let button2: Button = new Button();
button2.appendTo('#clear');
let tooltip1: Tooltip = new Tooltip({
   position: 'RightCenter'
});
tooltip1.appendTo('#uname');
let tooltip2: Tooltip = new Tooltip({
   position: 'RightCenter'
});
tooltip2.appendTo('#mail');
let tooltip3: Tooltip = new Tooltip({
   position: 'RightCenter'
});
tooltip3.appendTo('#pwd');
let tooltip4: Tooltip = new Tooltip({
   position: 'RightCenter'
});
tooltip4.appendTo('#cpwd');
let uname = document.getElementById('uname');
let pwd = document.getElementById('pwd');
let cpwd = document.getElementById('cpwd');
document.getElementById('sample').addEventListener('click', function () {
   if (uname.value.length > 0 & uname.value.length < 4) {
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
   if (uname.value.length >= 4 && pwd !== '' && pwd.value.length >= 8 && pwd == cpwd.value) {
      alert('Form Submitted');
   } else {
      alert('Details are not Valid');
   }
})
document.getElementById('clear').addEventListener('click', function () {
   uname.style.backgroundColor = 'white';
   pwd.style.backgroundColor = 'white';
   tooltip1.close(uname);
   uname.title = 'Please enter your name';
   tooltip3.close(pwd);
});