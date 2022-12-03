import Developer from './concrete-class/employee/Developer';
import Designer from './concrete-class/employee/Designer';
import Organization from './concrete-class/Organization';

export default function () {
    const developper = new Developer('John Doe', 10, [])
    const designer = new Designer('Jane Doe', 23, [])
    const organization = new Organization()

    organization
        .addEmployee(developper)
        .addEmployee(designer)

    console.log('Total salary to pay :', organization.getNetSalaries())
}
