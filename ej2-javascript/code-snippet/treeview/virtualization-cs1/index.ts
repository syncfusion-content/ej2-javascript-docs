import { TreeView } from '@syncfusion/ej2-navigations';
let totalNodes = 8000;
let employeesPerDept = 20;
const departments = ['Engineering', 'Sales', 'Human Resources', 'Finance', 'Marketing', 'Customer Support', 'Operations', 'Legal', 'Research', 'IT Infrastructure'];
const employeeRoles = ['Manager', 'Senior Engineer', 'Software Engineer', 'Business Analyst', 'QA Engineer', 'Consultant', 'Specialist', 'Coordinator', 'Executive', 'Associate'];
function generateOrganizationData(total: number, children: number): any[] {
    const data: any[] = []; let index = 0; let id = 1; let deptIndex = 0;
    while (index < total) {
        const deptId = id++;
        const deptName = departments[deptIndex % departments.length];
        const parentIndex = index;
        data[index++] = {
            id: deptId,
            pid: null,
            name: deptName,
            hasChild: false,
            isChecked: true,
            isExpanded: false
        };
        let childCount = 0;
        for (let i = 0; i < children && index < total; i++) {
            const role = employeeRoles[i % employeeRoles.length];
            data[index++] = {
                id: id++,
                pid: deptId,
                name: `${role} - Employee ${i + 1}`,
                isChecked: true,
                isExpanded: false
            };
            childCount++;
        }
        if (childCount > 0) { data[parentIndex].hasChild = true; }
        deptIndex++;
    }
    return data;
}
const orgData = generateOrganizationData(totalNodes, employeesPerDept);
const treeObj = new TreeView({
    fields: {
        dataSource: orgData,
        id: 'id',
        parentID: 'pid',
        text: 'name',
        hasChildren: 'hasChild',
        isChecked: 'isChecked',
        expanded: 'isExpanded'
    },
    height: 400,
    enableVirtualization: true,
    showCheckBox: true
});
treeObj.appendTo('#treeview');