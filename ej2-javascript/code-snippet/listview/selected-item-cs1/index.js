//define the array of string
var data = [
  { text: 'Hennessey Venom', id: 'list-01' },
  { text: 'Bugatti Chiron', id: 'list-02', isChecked: true },
  { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
  { text: 'SSC Ultimate Aero', id: 'list-04', isChecked: true },
  { text: 'Koenigsegg CCR', id: 'list-05' },
  { text: 'McLaren F1', id: 'list-06' },
  { text: 'Aston Martin One- 77', id: 'list-07', isChecked: true },
  { text: 'Jaguar XJ220', id: 'list-08' }
];

//Initialize ListView control
var listviewInstance = new ej.lists.ListView({
  //set the data to datasource property
  dataSource: data,

  //Enable checkbox
  showCheckBox: true,
});

//Render initialized ListView
listviewInstance.appendTo("#element");

var button = new ej.buttons.Button();
button.appendTo("#btn")

document.getElementById('btn').addEventListener('click', function () {
  document.getElementById('btn')?.addEventListener('click', function () {
    var selectedItem = listviewInstance.getSelectedItems();
    var valElement = document.getElementById('val');

    if (!valElement) return;

    valElement.innerHTML = '';

    // Create table rows in a fragment to minimize reflow
    var fragment = document.createDocumentFragment();

    // Create header row
    var headerRow = document.createElement('tr');
    ['Text', 'Id'].forEach(function (text) {
      var th = document.createElement('th');
      th.textContent = text;
      headerRow.appendChild(th);
    });
    fragment.appendChild(headerRow);

    // Populate table rows
    selectedItem.data.forEach(function (item, index) {
      var row = document.createElement('tr');
      row.id = index.toString();
      row.innerHTML = `<td>${selectedItem.text[index]}</td><td>${item.id}</td>`;
      fragment.appendChild(row);
    });

    // Append all elements at once
    valElement.appendChild(fragment);
  });

});