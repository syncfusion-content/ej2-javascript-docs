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
document.getElementById('sample').addEventListener('click', function(){
  var name = document.getElementById('uname').value;
  var pwd = document.getElementById('pwd').value;
  var cpwd = document.getElementById('cpwd').value;
  if(name.length > 0 & name.length < 4){
    document.getElementById('uname').title = 'Required Minimum 4 Characters';
    document.getElementById('uname').style.backgroundColor = 'red';
    var target = document.getElementById('uname');
    tooltip1.open(target);
  } else {
   
     document.getElementById('uname').style.backgroundColor = 'white';
  }
  if(pwd !== '' && pwd.length < 8){
     document.getElementById('pwd').title = 'Required Minimum 8 Characters';
    document.getElementById('pwd').style.backgroundColor = 'red';
    var pwdtarget = document.getElementById('pwd');
    tooltip3.open(pwdtarget);
  } else {
     document.getElementById('pwd').style.backgroundColor = 'white';
  }
  if(name.length >= 4 && pwd !== '' && pwd.length >= 8  &&  pwd == cpwd ){ 
     alert('Form Submitted');
  } else {
     alert('Details are not Valid');
  }
})
document.getElementById('clear').addEventListener('click', function(){
  document.getElementById('uname').style.backgroundColor = 'white';
  document.getElementById('pwd').style.backgroundColor = 'white';
  var target = document.getElementById('uname');
  tooltip1.close(target);
  document.getElementById('uname').title = 'Please enter your name';
  var pwdtarget = document.getElementById('pwd');
  tooltip3.close(pwdtarget);
});

