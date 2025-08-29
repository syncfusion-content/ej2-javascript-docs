import { DatePicker } from '@syncfusion/ej2-calendars';

/* Initialize the DatePicker component */
let datepicker: DatePicker = new DatePicker({
    placeholder: "Select Date",
    width: "250px",
    serverTimezoneOffset: 5.5 // Example: UTC+5:30 for IST
});

datepicker.appendTo('#datepicker');