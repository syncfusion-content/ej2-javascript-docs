ej.base.enableRipple(true);
var tabObj = new ej.navigations.Tab({
    items: [
        {
            header: { 'text': 'Login' },
            content: '.login-form',
            disabled: false
        },
        {
            header: { 'text': 'Grid' },
            content: '.grid-view',
            disabled: true
        }
    ],
    loadOn: 'Dynamic'
    
  });
tabObj.appendTo('#element');

var userNameObj = new ej.inputs.TextBox({
    placeholder: 'User Name',
    floatLabelType: 'Auto'
});

userNameObj.appendTo('#username');

let passWordObj = new ej.inputs.TextBox({
    placeholder: 'Password',
    floatLabelType: 'Auto'
});
passWordObj.appendTo('#password');

let buttonObj  = new ej.buttons.Button({
    content: 'Log in',
    isPrimary: true,
});
buttonObj.appendTo('#normalbtn');

let grid = new ej.grids.Grid({
    dataSource: [
        { OrderID: 10248, CustomerID: 'ALFKI', OrderDate: '2024-12-01', Freight: 32.38 },
        { OrderID: 10249, CustomerID: 'ANATR', OrderDate: '2024-12-02', Freight: 11.61 },
        { OrderID: 10250, CustomerID: 'ANTON', OrderDate: '2024-12-03', Freight: 65.83 },
        { OrderID: 10251, CustomerID: 'AROUT', OrderDate: '2024-12-04', Freight: 41.34 }
    ],
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer Name', width: 130 },
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
    ]
});
grid.appendTo('#grid')

buttonObj.element.onclick = () => {
    let userName = userNameObj.value;
    let password = passWordObj.value;
    if (!userName && !password) {
        window.alert('Enter both username and password');
    } else if (!userName) {
        window.alert('Enter the username');
    } else if (!password) {
        window.alert('Enter the password');
    } else if (userName.length < 4) {
        window.alert('Username must be at least 4 characters long');
    } else {
        debugger;
        userNameObj.value = "";
        passWordObj.value = "";
        tabObj.items[0].disabled = true;
        tabObj.items[1].disabled = false;
        tabObj.dataBind();
        tabObj.select(1);
    }
}
