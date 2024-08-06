var age=19;
var canDrive;
if(age>16)
{
    canDrive="yes";
}
else{
    canDrive="no";
}

var age=19;
var canDrive=age>16?"Yes":"No";

// We can also set the default parameters of a function
// Use Case:
function foo(bar)
{
    bar=typeof(bar)!==undefined?bar:10;
    console.log(bar);
}
foo();
foo(20);


// We can also perform multiple operations if use () brackets
var authenticated = true;
var nextURL = authenticated ? (
 alert('You will redirect to admin area'),
 '/admin'
) : (
alert('Access denied'),
 '/403'
);
console.log(nextURL);


var speed = 90;
var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 
'OK');
console.log(message);


var locked = 1;
var canChange = locked != 1 ? true : false;