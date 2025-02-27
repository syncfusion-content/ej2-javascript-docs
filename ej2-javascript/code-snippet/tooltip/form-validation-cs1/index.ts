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

document.getElementById('sample')?.addEventListener('click', function () {
   let name = (document.getElementById('uname') as HTMLInputElement)?.value;
   let pwd = (document.getElementById('pwd') as HTMLInputElement)?.value;
   let cpwd = (document.getElementById('cpwd') as HTMLInputElement)?.value;
   if (name.length > 0 && name.length < 4) {
      let target = document.getElementById('uname');
      if (target) {
         target.title = 'Required Minimum 4 Characters';
         target.style.backgroundColor = 'red';
      }
      tooltip1.open(target);
   } else {
      let target = document.getElementById('uname');
      if (target) {
         target.style.backgroundColor = 'white';
      }
   }
   if (pwd !== '' && pwd.length < 8) {
      let pwdtarget = document.getElementById('pwd');
      if (pwdtarget) {
         pwdtarget.title = 'Required Minimum 8 Characters';
         pwdtarget.style.backgroundColor = 'red';
      }
      tooltip3.open(pwdtarget);
   } else {
      let pwdtarget = document.getElementById('pwd');
      if (pwdtarget) {
         pwdtarget.style.backgroundColor = 'white';
      }
   }
   if (name.length >= 4 && pwd !== '' && pwd.length >= 8 && pwd == cpwd) {
      alert('Form Submitted');
   } else {
      alert('Details are not Valid');
   }
})

document.getElementById('clear')?.addEventListener('click', function () {
   let target = document.getElementById('uname');
   if (target) {
      target.style.backgroundColor = 'white';
      target.style.backgroundColor = 'white';
   }
   tooltip1.close(target);

   let pwdtarget = document.getElementById('pwd');
   if (pwdtarget) {
      pwdtarget.title = 'Please enter your name';
   }
   tooltip3.close(pwdtarget);
});