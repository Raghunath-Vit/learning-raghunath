function multiply(a, b, c) {
    return a * b * c;
}
let res = multiply(1, 2, 3);
console.log(res); 

function multiply_curried(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}
let mc1 = multiply_curried(1);
let mc2 = mc1(2);
let mc3 = mc2(3);
console.log(mc3); 

let res3 = multiply_curried(1)(2)(3);
console.log(res3); 

let multiply2 = (a, b, c) => a * b * c;

let multiply_curried2 = a => b => c => a * b * c;

let res21 = multiply2(1, 2, 3);
console.log(res21); 

let res22 = multiply_curried2(1)(2)(3);
console.log(res22); 


let human = { name: 'JC' };
function sayName1() {
    console.log(this.name);
}
sayName1.call(human); 

let human2 = { name: 'JC' };
function sayName(greeting) {
    console.log(greeting + ' ' + this.name);
}
sayName.call(human2, 'Hi!'); 



let human3 = { name: 'JC' };
function sayName3(greeting, city) {
    console.log(greeting + ' ' + this.name + ' from ' + city);
}
sayName3.apply(human3, ['Hi', 'Taguig']); 

let human4 = { name: 'JC' };
function sayName4(greeting, city) {
    console.log(greeting + ' ' + this.name + ' from ' + city);
}
let greet = sayName4.bind(human4);
greet('Hi!', 'Taguig'); 
greet('Hello!', 'Makati'); 




var func1 = function() {
    console.log(this);
}.bind(1);
func1(); 


var func = function() {
    console.log(this);
}.bind(1);
var obj = {
    callFun: func
};
obj.callFun(); 




function checkFun2(a, b, c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun2.call(1, 2, 3, 4); 

function checkFun(a, b, c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.apply(1, [2, 3, 4]); 





function sumOfNumbers() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
var sum = sumOfNumbers(1, 2, 3);
console.log(sum);

function sumOfNumbers2() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
var sum = sumOfNumbers2.call(null, 1, 2, 3);
console.log(sum); 

function sumOfNumbers3() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
var numbers = [1, 2, 3];
var sum = sumOfNumbers3.apply(null, numbers);
console.log(sum); 





function updateZipCode2() {
    console.log(this);
}
updateZipCode2.call(1); 

var updateZipCode = function() {
    console.log(this);
};
updateZipCode.call({ zip: '11787' }); 

var updateZipCode3 = function() {
    console.log(this);
};
var zipCode = {
    zip: '11787'
};
updateZipCode3.call(zipCode); 

var updateZipCode4 = function(newZip, country) {
    console.log(newZip + ' ' + country);
};
updateZipCode4.call(zipCode, '11888', 'us'); 

var updateZipCode5 = function(newZip, country) {
    console.log(newZip + ' ' + country);
};
updateZipCode5.apply(zipCode, ['11888', 'us']); 

"use strict";
var zipcode2 = {
    checkZipcode: function() {
        console.log(this);
        function updateZipCode() {
            console.log(this);
        }
        updateZipCode.call(this);
    }
};
zipcode2.checkZipcode();

"use strict";
var zipcode = {
    checkZipcode: function() {
        console.log(this);
        var updateZipCode = function() {
            console.log(this);
        }.bind(this);
        updateZipCode();
    }
};
zipcode.checkZipcode(); 

"use strict";
var person = {
    name: "Jack",
    prop: {
        name: "Daniel",
        getName: function() {
            return this.name;
        }
    }
};
var name = person.prop.getName.bind(person);
console.log(name());

var name = person.prop.getName();
console.log(name); 