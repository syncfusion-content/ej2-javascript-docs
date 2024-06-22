  /**
   * Default querybuilder sample
   */
  var dateOperators = [
    { value: 'equal', key: 'Equal' },
    { value: 'greaterthan', key: 'Greater Than' },
    { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
    { value: 'lessthan', key: 'Less Than' },
    { value: 'lessthanorequal', key: 'Less Than Or Equal' },
    { value: 'notequal', key: 'Not Equal' },
    { value: 'between', key: 'Between' },
    { value: 'notbetween', key: 'Not Between' }
  ];
  var boolOperators = [
    { value: 'equal', key: 'Equal' },
  ];
  var columns = [
    { field: "EmployeeID", label: "Employee ID", type: "number" },
    { field: "FirstName", label: "First Name", type: "string" },
    { field: "LastName", label: "Last Name", type: "string" },
    { field: "Age", label: "Age", type: "number" },
    { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: boolOperators },
    { field: "PrimaryFramework", label: "Primary Framework", type: "string" },
    { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: dateOperators },
    { field: "Country", label: "Country", type: "string" }
  ];
  var importRules = {
    condition: "and",
    rules: [
      { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre" },
      { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
      { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29 },
      {
        condition: "or", rules: [
          { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
          { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
        ]
      },
      { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/22/2023", "11/30/2023"] },
    ],
  };
  var employeeData = [{
    'EmployeeID': 1,
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'HireDate': '22/07/2001',
    'City': 'Seattle',
    'Country': 'USA'
  },
  {
    'EmployeeID': 2,
    'FirstName': 'Andrew',
    'Title': 'Vice President',
    'TitleOfCourtesy': 'Dr.',
    'HireDate': '21/04/2003',
    'City': 'Tacoma',
    'Country': 'USA'
  },
  {
    'EmployeeID': 3,
    'FirstName': 'Janet',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'HireDate': '22/07/2001',
    'City': 'Kirkland',
    'Country': 'USA'
  }];
  var qryBldrObj = new ej.querybuilder.QueryBuilder({
    dataSource: employeeData,
    columns: columns,
    rule: importRules,
    allowDragAndDrop: true
  });
  qryBldrObj.appendTo('#querybuilder');

