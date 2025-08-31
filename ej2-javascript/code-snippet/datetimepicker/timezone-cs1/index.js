var ej = require('@syncfusion/ej2-calendars');

// Initialize the DatePicker component
var datepicker = new ej.DatePicker({
    placeholder: "Select Date Time",
    width: "250px",
    serverTimezoneOffset: 5.5 // Example: UTC+5:30 for IST
});

// Append the DatePicker to the DOM element with ID 'datepicker'
datepicker.appendTo('#datepicker');