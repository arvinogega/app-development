console.log("\n---------example 2: 'any' type");
//explicit type
function greeter(username) {
    console.log("Welcome to TypeScript ".concat(username));
}
var user = "Arvino";
greeter(user);
// implicit type
var y = 12;
console.log(y);
//explicit array (list)
var colors = ['red', 'blue', 'white'];
console.log(colors);
//implicit array
var numbers = [3, -9, 5];
console.log(numbers);
numbers = [-1, 10, 30];
console.log(numbers);
console.log("\n---------example 2: 'any' type");
//use the 'any' data type:allows all types
var a;
a = 5;
console.log("a = 5", typeof (a));
a = "Peter pan";
console.log("a='Peter pan'", typeof (a));
a = false;
console.log("a = false", typeof (a));
console.log("\n---------example 3: 'unknown' type");
//'unknown is similar to 'any'
var b;
b = 10;
console.log("b =10", typeof (b));
b = "MArtha";
console.log("b='Martha'", typeof (b));
b = true;
console.log("b=true", typeof (b));
console.log("\n---------example 4: 'enum' type");
//'enum' is a special class that represents a group or list of constan values (values that can't be changed)
//'enum' can use numerical or string constant.
var Countries;
(function (Countries) {
    Countries[Countries["Usa"] = 0] = "Usa";
    Countries[Countries["Canada"] = 1] = "Canada";
    Countries[Countries["Mexico"] = 2] = "Mexico";
})(Countries || (Countries = {}));
var Usa = Countries.Usa;
var Canada = Countries.Canada;
var Mexico = Countries.Mexico;
console.log("Class objec of Canada ".concat(Canada));
console.log("Class objec of Mexico ".concat(Mexico));
console.log("Class objec of Usa ".concat(Usa));
console.log("\n---------example 5: data type classses");
//if the data type is explicit, you can directly use the method to the specific data type
var username = "Ann Smith";
var characters_username = username.length;
console.log("User ".concat(username, " has ").concat(characters_username, "characters"));
var firstname = "Luisa";
//cast into string
firstname = firstname;
var characters_firstname = firstname.length;
console.log("User ".concat(firstname, " has ").concat(characters_firstname, "characters"));
console.log("\n---------example 6: return type function");
function get_time() {
    return new Date().getHours();
}
console.log("The time is ".concat(get_time, "h"));
console.log("\n---------example 7: void function-------");
//void function does not return value
function greeting() {
    console.log("Welcome to Anuglar data type!");
}
//calling function
greeting();
console.log("\n---------example 8:function with parameters-------");
function get_sum(num1, num2, name) {
    var result = name + ",the number is " + (num1 + num2);
    return result;
}
console.log(get_sum(2, 3, "Peter"));
console.log("\n---------example 9: optional parameters-------");
//The ? operator marks parameters as optional.
function sum_total(n1, n2) {
    if (n2 !== undefined) {
        return (n1 + n2);
    }
    else {
        return -1;
    }
}
console.log(" The sum is ".concat(sum_total(5, 9)));
console.log(" The sum is ".concat(sum_total(5)));
console.log("\n---------example 10: spread syntax...-------");
//spread syntax is used to decustruct an array
function get_average() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var average = 0;
    var count = 0;
    for (var i = 0; i < n.length; i++) {
        console.log[i];
        count++;
    }
    average = total / n.length;
    return average;
}
console.log("The averange is ".concat(get_average(10, 6, 2)));
console.log("\n---------example 11: class-------");
var Car = /** @class */ (function () {
    function Car(brand, model, year_manufacture) {
        this.brand = brand;
        this.model = model;
        this.year_manufacture = year_manufacture;
    }
    Car.prototype.year = function () {
        console.log("The car was manufactured at ".concat(this.year_manufacture));
    };
    return Car;
}());
