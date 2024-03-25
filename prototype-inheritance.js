/*
function Animal() {

}

console.log(Animal.prototype);

{}
constructor: f Animal()
    arguments: null
    caller: null
    length: 0
    name: "Animal"
    prototype: {}
[[Prototype]]: Object 
    constructor: f Object()
    hasOwnProperty: f hasOwnProperty()
    toString: f toString()
    valueOf: f valueOf()

Rendelkezik egy constructor-val és egy prototype-val, ami object, mert a function-nek az object a prototype-ja

Itt lehet azt csinálni, ami van az elmagyarazas példában is, hogy ennek a function-nek (Animal) a prototype-jának csinálunk egy függvényt 
->
Animal.prototype.makeSound = function() {
    console.log("Animal is makeing sound!");
}

console.log(Animal.prototype);

Tehát a prototype-jához csatoljuk ezt a makeSound-ot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log(Animal.prototype);
    {makeSound: f}
    makeSound: f ()
        arguments: null
        caller: null
        length: 0
        name:""
        prototype: {}
    constructor: f Animal()
    [[Prototype]]: Object

És akkor itt látszik, hogy a prototype az innentől kezdve rendelkezik egy makeSound nevű metódussal!!!!!!!!!!!!!!!!!
Ezt szeretnénk, hogy örökölje egy példány, mondjuk egy cat
->
function Cat() {}
Ez nekünk majd így fog végbemenni, hogy Object.setPrototypeOf()!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és akkor a Cat-nek a prototype-ja az Animal-nek a prototype-jától fog örökölni!!!
-> 
function Cat() {}
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
Mit jelent ez 
-> 
Ez annyit tesz, hogy Cat.prototype-jának beállítjuk az Animal-nek a prototype-ját mint prototype-ot!!!!!!!!!!!!!!!!!!!!!!!

constructor pattern, csak most itt nincsen effektive paraméterek
const cat = new Cat();
cat.makeSound()
!!!
És akkor a cat.ből meg tudjuk, hívni a makeSound-ot, azért mert ezt örökölte az Animal-től!!!!!!!!!!!!!!!!!!!!!!!!!!!

Tehát a Object.setPrototypeOf(Cat.prototype, Animal.prototype) az történik, hogy a Animal-nek a prototype-ját megörökli a Cat prototype-ja 
Ezt hívják prototype inheritance-nek!!!!

de tudjuk ezt is csinálni
->
Animal.prototype.color = "Red";
és akkor a Cat a prototype-jában örökölt a makeSound metódus mellett egy color: "Red" property-t!!!
console.log(Cat.prototype);
{color: 'Red', makeSound: f}
    color: "Red"
    makeSound: f ()
    constructor: f Animal()
    [[Prototype]]: Object
    és azt fogja kiírni a console-ra, hogy Animal is making a sound (a makeSound függvény miatt!!!!!!)

ha meg csak annyit írunk 
->
console.log(cat.color); -> Red
Akkor meg ki fogja írni, hogy red, mert a color property-nek megadtuk ezt az értéket, hogy "Red"!!!

és azt a color-t ugye meg is tudjuk változtatni
->
const cat = new Cat();
cat.makeSound();
cat.color = "blue";
console.log(cat.color);
blue lesz a console-on

Tehát az Animal-nél létrehoztunk egy ilyen property-t, hogy color -> Animal.color = "Red"
a Cat függvény a Object.setPrototypeOf-jával megörököl minden metódust és property-t 
ezt a Cat függvényt példányosítottuk és itt meg felülírtük a color property-jét egy másik értékkel!!!!!!

Annyit kell megjegyezni, hogy csinálunk egy function, ennek létre tudunk hozni egy másik functiont prototype-jával
Animal.prototype.makeSound = function() {
    console.log("Animal is making sound!")
} 
így meg property-t
Animal.prototype.color = ""

Csinálhatunk-e egy ilyet az Animal-nél?
function Animal() {
    console.log(this.prototype);
}

Animal(); -> meg kell hívni, mert ez egy function
mit fog mondani a this.prototype -> undefined 

function Animal() {
    this.prototype.eat = function() {
        console.log("Animal is eating!")
    }
}

Akkor ez az eat, bent lesz az Animal prototype-jában?
Mert ha Aninmal.prototype létezik, akkor az Animal()-ön belül miért ne lehetne ezt megcsinálni this.prototype-val
de ez így nem müködik 
megpróbáljuk megnézni, hogy cat.eat és azt kapjuk, hogy undefined!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

itt nincsen olyan, hogy this.prototype
ha itt megnézzük, hogy mi a this
function Animal() {
    console.log(this);
}
Animal();

this-re azt fogja nekünk mondani, hogy window!!!!
Window {window: Window, self: Window, document:document name:'', location: location}
    Animal: f Animal()
    Cat: f Cat()
    ..... és még sok más dolog
Valamiért azt mondja a JavaScript, hogy a scope-ja ennek az, hogy window, tehát maga az ablak 
a window egy olyan beépített objektum mint mondjuk a location vagy a document!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
elmagyarazas.js!!!!!!!!!!!!!!!!!!


*/