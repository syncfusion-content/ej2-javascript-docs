


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let promptBtn: Button = new Button({isPrimary: true});
promptBtn.appendTo('#promptBtn');
document.getElementById('promptBtn').onclick = (): void => {
    document.getElementById("statusText").style.display="none";
    let dialogObj = DialogUtility.confirm({
        title: 'Join Chat Group',
        width: '300px',
        content: '<p>Enter your name: </p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
        okButton: { click:promptOkAction.bind(this)},
        cancelButton: { click:promptCancelAction.bind(this)},
    });

    function promptOkAction (){
        let value:string ;
        value = (document.getElementById("inputEle")as any).value;
        if (value==""){
            dialogObj.hide();
            document.getElementById("statusText").innerHTML="The user's input is returned as \" \" ";
            document.getElementById("statusText").style.display="block";
        }
        else{
            dialogObj.hide();
            document.getElementById("statusText").innerHTML="The user's input is returned as"+" "+value;
            document.getElementById("statusText").style.display="block";
        }
    }
    function promptCancelAction (){
        dialogObj.hide();
        document.getElementById("statusText").innerHTML="The user canceled the prompt dialog";
        document.getElementById("statusText").style.display="block";
    }
};



