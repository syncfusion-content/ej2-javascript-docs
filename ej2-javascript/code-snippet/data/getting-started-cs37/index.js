let dataManager;
function load() {
  fetch('https://localhost:xxxx/orders') // Use remote server host and port instead of 'xxxx'.
    .then(response => {
      if (!response.ok) {
        throw new Error("Unable to fetch data. Please check URL or network connectivity.");
      }
      return response.json();
    })
    .then(jsonValue => {
      dataManager = new ej.data.DataManager({
        json: jsonValue, 
        adaptor: new ej.data.RemoteSaveAdaptor()
      });

      dataManager.executeQuery(new Query().take(8)).then((e) => {
       const data = e.result;
       data.forEach((item) => {
        table.appendChild(compiledFunction(item)[0]);
       });
      })
    }).catch(err => console.error("Fetch error:", err));
}

load();