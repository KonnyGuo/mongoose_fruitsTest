// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//create schema (table)
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String
});

//fruit in .model would be name of collections
const fruit = mongoose.model("fruit", fruitSchema);

const fruitObj1 = new fruit({
    name: "Apple",
    rating: 8,
    review: "It's Apple, A tier"
});

const fruitObj2 = new fruit({
    name: "Pear",
    rating: 6,
    review: "It's Pear, B tier"
});

const fruitObj3 = new fruit({
    name: "Orange",
    rating: 9,
    review: "It's Orange, A tier"
});

const fruitObj4 = new fruit({
    name: "Watermelon",
    rating: 10,
    review: "It's Watermleon, S tier"
});


//model.insertMany
// fruit.insertMany([fruitObj2,fruitObj3,fruitObj4], function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("sucess");
//     }
// });
//saves the fruitObj1 into collections
// fruitObj1.save();
// fruitObj5.save(); 

// fruit.find(function(err, fruits) {
//     if(err){
//         console.log(err);
//     } else {
//         mongoose.connection.close();
//         fruits.forEach(function(f){
//             console.log(f.name);
//         });
//     }
// });

// fruit.deleteOne({name: "John"}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("deleted apple")
//     }
// });

// fruits.updateOne({_id: "63c8b177eaaee8814097f513"}, {name:"Peach"}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("added peach")
//     }
// })


//create schema (table)
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

//fruit in .model would be name of collections
const person = mongoose.model("person", personSchema);

const personObj1 = new person({
    name: "John",
    rating: 37,
});

const personObj2 = new person({
    name: "Amy",
    rating: 25,
    favoriteFruit: fruitObj2
});

// person.updateOne({_id: "63c8b2863bb98eb0b43f003b"}, {favoriteFruit: fruitObj1}, function(err){
//     if(err){
//         console.log("error");
//     } else {
//         console.log("update success");
//     }
// });

// personObj2.save();

// // personObj1.save();