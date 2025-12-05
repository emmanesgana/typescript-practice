// string
let user = "emman";

// number
let age = 18;

// with default value
let ageWithType: number = 22;

// arrays
let names = ["john", "jane", "tom"];

names.push("james");

// objects

let userObj = {
    username: "emman",
    age: 34,
    isAdmin: true
};

// userObj.username = "emmans"
// userObj.age = "34"

let userObj2: {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string
};

userObj2 = {
    username: "emman",
    age: 34,
    isAdmin: false
};

userObj2 = {
    username: "emman",
    age: 34,
    isAdmin: false,
    phone: "+132434323"
};

// "any" not recommended as it defeats the purpose of specifying
// a type for variables by using typescript

let testAny; // by default the type of this variable is any

testAny = 12;
testAny = "Hello";
testAny = true;

// any array

let testAnyArray: any[];

testAnyArray = [1, "two", false, [], {}];

// functions

// return anything as function hover on function it says void
let sayHi = () => {
    console.log("Hi, Welcome");
};

// sayHi = "hi" *invalid | sayHi will always be a function

// return a string as function

let funcReturnString = (): string => {
    console.log("hi"); // even if it's a stirng it won't work
    return "hi" // this will work
}
