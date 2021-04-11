// objekte 
//"use strict"
let person1 = new Object;
person1.name = "Greg";
person1.age = 25;
person1.greet = function(){
    console.log(this.name + " says Hi");
};

person1.greet();

let person2 = {
    name : "Ben",
    age : 18,
    greet : function(){
        console.log(this.name + " says Servus");
    }  
}

person2.greet();
console.log(person1["name"]);
 delete person2.age;
console.log(person2.age); 

Object.defineProperty(person2, "name",{ writable: false, configurable: false});
//person2.name = "Han Solo";
person2.greet();
//Object.seal(person2);
person2.spaceship = "Millenium Falcon";
console.log(person2.spaceship);