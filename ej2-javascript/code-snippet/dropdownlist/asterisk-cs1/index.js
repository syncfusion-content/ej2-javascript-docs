var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
   // initialize DropDownList component
    var listObj = new ej.dropdowns.DropDownList({
        dataSource: sportsData, 
        floatLabelType : 'Auto' ,
        // set placeholder to DropDownList input element
        placeholder: "Select games"});
    listObj.appendTo('#ddlelement');
 

