const Circle = (radius: number) => {
    const proto = {
        type: 'Circle',
        //code 
    }
    return Object.assign(Object.create(proto), { radius })
}

const Square = (length: number) => {
    const proto = {
        type: 'Square',
        //code 
    }
    return Object.assign(Object.create(proto), { length })
}

type Shapes = typeof Circle | typeof Square

const areaCalculator = (shapes: Shapes[]) => {
    const proto = {
        sum() {
            const area = []
            for (let shape of shapes) {
                area.push(shape.prototype.area())
            }
            return area.reduce((v, c) => c += v, 0)
        },
        output() {
            return `
         <h1>
           Sum of the areas of provided shapes:
           ${this.sum()} 
         </h1>`
        }
    }
    return Object.assign(Object.create(proto), { shapes })
}

const shapes: Shapes[] = [
    Circle(2),
    Square(5),
    Square(6)
]
const areas = areaCalculator(shapes)
console.log(areas.output())