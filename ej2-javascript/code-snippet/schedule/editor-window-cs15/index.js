var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2018, 1, 15),
  currentView: 'Month',
  views: ['Day', 'Week', 'WorkWeek', 'Month'],
  eventSettings: { dataSource: scheduleData },
  popupOpen: (args) => {
    if (args.type === 'Editor') {
      if (!args.element.querySelector('#closeEditor')) {
        let btnElement = ej.base.createElement("BUTTON", { id: 'closeEditor', className: 'e-custom-close' });
        args.element.querySelector('.e-footer-content').appendChild(btnElement)
        let btnObj = new ej.buttons.Button();
        btnElement.textContent = "Close Editor";
        btnObj.appendTo('#closeEditor');
        btnObj.element.onclick = () => {
          scheduleObj.closeEditor();
        }
      }
    }
  }
});
scheduleObj.appendTo('#Schedule');