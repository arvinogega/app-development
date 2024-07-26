// July 25, Js object

const { json } = require("react-router-dom")

// create an object for students with properties of name , age, and shcool
let student1={
    name : "Peter pan", 
    age: 23,
  school:"QCC"
}

// tetrieve information in an object using squared bracket:
console.log(student1["name"])

//retrieve information using the dot:
console.log(student1.school)

//you can not use the dot notation if the key, property name, starts with a number

//update data in an object can be done using the dot or quared bracket notation:

student1.age=30
student1["school"]="NYU"
console.log(`Updated age ${student1.age}`)
console.log(`Update school ${student1.school}`)

//example 2: Nested object and array within an object

console.log("\n---------example 2 ---------")
let user1={
    name: "Martha",
    age:80,
    //an array as property
    friends:["wendy","carl","peter"],
    //an object as property
    favorite:{
        food:"cake",
        color:"green"
    }
}
// acces lkey inside an object
let favorite_food=user1.favorite.food
console.log(`${user1.name} favorite food is ${favorite_food}`)

// access an item inside an array
let second_friend=user1.friends[1]
console.log(`${user1.name}second friend is ${second_friend}`)

//example 3: aaray list as object
console.log("\n---------example 3 ---------")
// we  can also an array with object as list item:
let schedule=[
    {
        day:"Monday",
        plan:"Go to yoga class",
        time:"6:30"
    },
    {
        day:"Tuesday",
        plan:"Complete bootcamp labs",
        time:"11Pm" 
    }
]

// access the plan  for Tuesday
console.log(`The plan for Tuesday is ${schedule[1].plan}`)

//example 4:object methods
console.log("\n---------example 4 ---------")
let item={
    //properties
    id :123,
    name :"Pencil",
    quantity:200,
    color:['red','black','blu'],
    //methods
    sale:function(){
        return "Sale! 50% Off"
    },
    quantity_cart:function(e){
        return this.quantity -= e
        
    }

}
//access sale ()method
console.log(`the sale message of ${item.name} is ${item.sale()}`)
console.log(`The remaining quantity of ${item.name} is ${item.quantity_cart(25)}`)
/*

JSON, JavaScript Object Notation, is a pupular text format that is used to store and echange data.

Json data is stored as comma-separated list of key :value pairs within a Json object

We can converts a JavaScript object to a Json object by using the 'Json.stringify(' 

We can also convert from Json object to JavaScript object using 'Json.parse()'
*/
//example 5 : JSON
let fashionshow ={
    category:"fashion",
    model:[
        {
            name:"Alice",
            age:21,
            city:"NYC",
        },
        {
            name:"Kelly",
            age:23,
            city:"Paris",  
        }
    ]
}
// print the object 'fashionshow'
console.log("\n---------example 5 ---------")
console.log(fashionshow)

// create Json version of the JavaScript object
let json_fashionshow =JSON.stringify(fashionshow)
console.log("JSon version: ")
console.log(json_fashionshow)
