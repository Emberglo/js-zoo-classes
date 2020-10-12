export default class Fish {

    addAnimals(animalsArr) {
        if (!this.animals.length) {
            this.animals = animalsArr
        } else {
            this.animals = this.animals.concat(animalsArr)
        }
    }

    constructor() {
        this.animals = []
    }

}