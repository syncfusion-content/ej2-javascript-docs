import { QueryBuilder, ColumnsModel, RuleModel } from '@syncfusion/ej2-querybuilder';

let employeeData: Object[] = [{
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

let dateOperators: any = [
  { value: 'equal', key: 'Equal' },
  { value: 'greaterthan', key: 'Greater Than' },
  { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
  { value: 'lessthan', key: 'Less Than' },
  { value: 'lessthanorequal', key: 'Less Than Or Equal' },
  { value: 'notequal', key: 'Not Equal' },
  { value: 'between', key: 'Between' },
  { value: 'notbetween', key: 'Not Between' }
];
let boolOperators: any = [
  { value: 'equal', key: 'Equal' },
];
let columns: ColumnsModel[] = [
  { field: "EmployeeID", label: "Employee ID", type: "number" },
  { field: "FirstName", label: "First Name", type: "string" },
  { field: "LastName", label: "Last Name", type: "string" },
  { field: "Age", label: "Age", type: "number" },
  { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: boolOperators },
  { field: "PrimaryFramework", label: "Primary Framework", type: "string" },
  { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: dateOperators },
  { field: "Country", label: "Country", type: "string" }
]
let importRules: RuleModel = {
  condition: "",
  rules: [
    { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre", condition: "and" },
    { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'], condition: "or" },
    { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29, condition: "and" },
    {
      condition: "or", rules: [
        { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true, condition: "and" },
        { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
      ]
    },
    { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/22/2023", "11/30/2023"] },
  ],
};
let qryBldrObj: QueryBuilder = new QueryBuilder({
  dataSource: employeeData,
  columns: columns,
  rule: importRules,
  enableSeparateConnector: true
});
qryBldrObj.appendTo('#querybuilder');