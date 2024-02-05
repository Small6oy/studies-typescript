function merges<T extends {}, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

function wrapInArray<T>(input: T): T[] {
    return [input];
}

const mergedObj = merges<{ name: string }, { age: number }>({ name: 'Godwin' }, { age: 12 })
console.log(mergedObj.name)


class DataStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

let textStorage = new DataStorage<string>();
textStorage.addItem('asd')
textStorage.addItem('max')
textStorage.addItem('menu')
textStorage.removeItem('max')
console.log(textStorage.getItems());