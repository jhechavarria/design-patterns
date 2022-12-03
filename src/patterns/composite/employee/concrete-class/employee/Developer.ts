import Employee from '../../interface/Employee';

export default class Developer implements Employee {
    protected name: string
    protected salary: number
    protected roles: string[]

    constructor(name: string, salary: number, roles: string[]) {
        this.name = name
        this.salary = salary
        this.roles = roles
    }

    getName(): string {
        return this.name
    }

    setSalary(salary: number) {
        this.salary = salary
    }

    getSalary(): number {
        return this.salary
    }

    getRoles(): string[] {
        return this.roles
    }
}
