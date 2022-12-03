import Employee from '../interface/Employee';

export default class Organization {
    protected employees: Employee[] = []

    addEmployee(employee: Employee): Organization {
        this.employees.push(employee)
        return this
    }

    getNetSalaries(): number {
        return this.employees.reduce((acc: number, employee: Employee) => {
            return acc + employee.getSalary()
        }, 0)
    }
}
