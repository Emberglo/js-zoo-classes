import AyeAye from './models/a.js'
import BrownBear from './models/b.js'
import Cassowary from './models/c.js'
import Discus from './models/d.js'
import Eland from './models/e.js'
import FrilledDragon from './models/f.js'
import Gyrfalcon from './models/g.js'
import Hyrax from './models/h.js'
import IceFish from './models/i.js'
import Jaguarundi from './models/j.js'
import KomodoDragon from './models/k.js'
import Lechwe from './models/l.js'
import MalachiteKingfisher from './models/m.js'
import Numbat from './models/n.js'
import Oarfish from './models/o.js'
import PoisonDartFrog from './models/p.js'
import Quoll from './models/q.js'
import Racer from './models/r.js'
import SlenderLoris from './models/s.js'
import Tortoise from './models/t.js'
import Uaru from './models/u.js'
import Vicuna from './models/v.js'
import Wambenger from './models/w.js'
import Xerus from './models/x.js'
import Yak from './models/y.js'
import Zorilla from './models/z.js'

import Zoo from './models/zoo.js'
import Mammals from './models/mammals.js'
import Birds from './models/birds.js'
import Reptiles from './models/reptiles.js'
import Fish from './models/fish.js'

let ajax = new AyeAye("Ajax", "Aye-aye", "mammal")
let bruno = new BrownBear("Bruno", "Brown Bear", "mammal")
let clifford = new Cassowary("Clifford", "Cassowary", "bird")
let darryl = new Discus("Darryl", "Discus", "fish")
let emma = new Eland("Emma", "Eland", "mammal")
let frank = new FrilledDragon("Frank", "Frilled Dragon", "reptile")
let gracie = new Gyrfalcon("Gracie", "Gyrfalcon", "bird")
let harry = new Hyrax("Harry", "Hyrax", "mammal")
let imogene = new IceFish("Imogene", "Ice Fish", "fish")
let jimmy = new Jaguarundi("Jimmy", "Jaguarundi", "mammal")
let kallie = new KomodoDragon("Kallie", "Komodo Dragon", "reptile")
let lilly = new Lechwe("Lilly", "Lechwe", "mammal")
let moe = new MalachiteKingfisher("Moe", "Malachite Kingfisher", "bird")
let nelly = new Numbat("Nelly", "Numbat", "mammal")
let olly = new Oarfish("Olly", "Oarfish", "fish")
let penny = new PoisonDartFrog("Penny", "Poison Dart Frog", "reptile")
let quinn = new Quoll("Quinn", "Quoll", "mammal")
let randy = new Racer("Randy", "Racer", "reptile")
let sandy = new SlenderLoris("Sandy", "Slender Loris", "mammal")
let tim = new Tortoise("Tim", "Tortoise", "reptile")
let ulysses = new Uaru("Ulysses", "Uaru", "fish")
let vinny = new Vicuna("Vinny", "Vicuna", "mammal")
let winnie = new Wambenger("Winnie", "Wambenger", "mammal")
let xerxes = new Xerus("Xerxes", "Xerus", "mammal")
let yasmin = new Yak("Yasmin", "Yak", "mammal")
let zuri = new Zorilla("Zuri", "Zorilla", "mammal")

let animals = [ajax, bruno, clifford, darryl, emma, frank, gracie, harry, imogene, jimmy, kallie, lilly, moe, nelly, olly, penny, quinn, randy, sandy, tim, ulysses, vinny, winnie, xerxes, yasmin, zuri]

let mammals = []
animals.forEach(animal => {
    if (animal.type == "mammal") {
        mammals.push(animal)
    }
})

let mammalCage = new Mammals()
mammalCage.addAnimals(mammals)

function drawMammals() {
    let template = ''
    mammalCage.animals.forEach(mammal => template += /*html*/`
        <div class="col-3 p-3 mb-3 text-center">
            <h2>${mammal.name}</h2>
            <h4>${mammal.species}</h4>
            <p>${mammal.type}</p>
        </div>
    `)
    document.querySelector('#mammals').innerHTML = template
}

drawMammals()

let birds = []
animals.forEach(animal => {
    if (animal.type == "bird") {
        birds.push(animal)
    }
})

let birdCage = new Birds()
birdCage.addAnimals(birds)

function drawBirds() {
    let template = ''
    birdCage.animals.forEach(bird => template += /*html*/`
        <div class="col-3 p-3 mb-3 text-center">
            <h2>${bird.name}</h2>
            <h4>${bird.species}</h4>
            <p>${bird.type}</p>
        </div>
    `)
    document.querySelector('#birds').innerHTML = template
}

drawBirds()

let reptiles = []
animals.forEach(animal => {
    if (animal.type == "reptile") {
        reptiles.push(animal)
    }
})

let reptileCage = new Reptiles()
reptileCage.addAnimals(reptiles)

function drawReptiles() {
    let template = ''
    reptileCage.animals.forEach(reptile => template += /*html*/`
        <div class="col-3 p-3 mb-3 text-center">
            <h2>${reptile.name}</h2>
            <h4>${reptile.species}</h4>
            <p>${reptile.type}</p>
        </div>
    `)
    document.querySelector('#reptiles').innerHTML = template
}

drawReptiles()

let fish = []
animals.forEach(animal => {
    if (animal.type == "fish") {
        fish.push(animal)
    }
})

let fishCage = new Fish()
fishCage.addAnimals(fish)

function drawFish() {
    let template = ''
    fishCage.animals.forEach(fish => template += /*html*/`
        <div class="col-3 p-3 mb-3 text-center">
            <h2>${fish.name}</h2>
            <h4>${fish.species}</h4>
            <p>${fish.type}</p>
        </div>
    `)
    document.querySelector('#fish').innerHTML = template
}

drawFish()


// let wholeZoo = [mammals, birds, reptiles, fish]

// let zoo = new Zoo()
// zoo.addAnimals(animals)

// function drawZoo() {
//     let template = ''
//     zoo.animals.forEach(animal => template += /*html*/`
//         <div class="col-3 p-3">
//             <h2>${animal.name}</h2>
//             <h4>${animal.species}</h4>
//             <p>${animal.type}</p>
//         </div>
//     `)
//     document.querySelector('#animals').innerHTML = template
// }

// drawZoo()