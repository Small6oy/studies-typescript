class ClassCar {
    drive() {
        console.log('Vroom!');
    }
}

const car1 = new ClassCar();
car1.drive();


// constructor
interface ShapeInterface {
    drive(): void;
}

function ConstructorCar() { }

ConstructorCar.prototype.drive = function () {
    console.log('Vroom!');
};

// const car2 = new ConstructorCar();
// car2.drive();


// factory
const proto = {
    drive() {
        console.log('Vroom!');
    }
};

const factoryCar = () => Object.create(proto);

const car3 = factoryCar();
car3.drive();