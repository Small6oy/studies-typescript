
class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, private readonly name: string) {
    }

    describe(this: Department) {
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation(this: Department) {
        console.log(this.employees.length)
        console.log(this.employees)
    }

}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT')
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(report: string) {
        if (!report) throw new Error('Please add a new Report')
        this.reports.push(report)
    }

    constructor(id: string, public reports: string[]) {
        super(id, 'Accounting')

        this.lastReport = reports[0];
    }

    addEmployee(employee: string): void {
        if (employee == 'Max') {
            return;
        }

        this.employees.push(employee)
    }
}

const it = new ITDepartment('d1', ['Max'])
it.describe()

it.addEmployee('Max')
it.addEmployee('Manu')
it.printEmployeeInformation()

const accounting = new AccountingDepartment('d1', ['Max'])
accounting.describe()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()

const fetchedData = {
    id: 'ul',
    name: 'Max',
    job: { title: 'CEO' }
}

console.log(fetchedData?.job?.title)

const falsey = userInput || 'DEFAULT'
const nullish = userInput ?? 'DEFAULT'
console.log({ falsey, nullish })