function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template
        }
    }
}

@Logger('Test')
@WithTemplate('<h1>My person</h1>', 'app')
class Person {

    name = 'Unknown'

    constructor() {
        console.log('Creating person object...')
    }

}

const per = new Person;

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator')
    console.log({ target, propertyName })
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor')
    console.log({ target, name, descriptor })
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method Decorator')
    console.log({ target, name, descriptor })
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator')
    console.log({ target, name, position })
}

class Product {

    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - must be postive')
        }
    }

    constructor(title: string, _price: number) {
        this.title = title;
        this._price = _price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
       return this._price * (1 + tax)
    }
}