

//solve using for in loop
var car = { brand: "Toyota", model: "corolla",year:2020};
for (i in car) {
  var x= "" + car[i]; // as it is a number we've to convert it into string ,we used ""
  console.log(`${i} :`,x.toUpperCase());
};

2
var numbers = [1,2,3,4,5];


for (i in numbers){

    console.log(`${numbers[i]}-HI`)
}

3

var fruits = ['apple','banana','cherry','date'];

for(i in fruits){

    console.log(i+"-" + fruits[i])
}

4
//update city property here

var obj ={
    name: 'john',
    age:30,
    address:{
        city:'Los angeles',
        state:'CA'
    }
};

obj.city = 'san fransisco'



    console.log(obj)



5     // update  model & year here
var car = {
    brand : 'toyota',
    model :'camry',
    year : 2020
}
car.model = 'corolla'

console.log(car)

6 // add an ingredient here

var recipe = {

    name: 'pasta',
    serving:2,
    ingredients:['noodles','sauce']
};

recipe.ingredients[2] = "cheese";

console.log(recipe);


