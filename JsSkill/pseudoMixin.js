let mixin = function(receiver, supplier ){
    for(let i in supplier){
        
        receiver[i] = supplier[i];
    };
    
} 

//let a=[1,2,3];
let a = {
    name: "Hans",
    age: 45
};
//let b =[4,5,6];
let b = {
    gender: "male",
    weight: 90
};
mixin(a,b);
console.log(a);