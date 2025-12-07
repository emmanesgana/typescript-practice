// STRINGS
let user = "emman";

// NUMBERS
let age = 18;

// with default value
let ageWithType: number = 22;

// ARRAYS
let names = ["john", "jane", "tom"];

names.push("james");

// OBJECTS

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

// FUNCTIONS

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

// assigning type to function parameters

let sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2;
};

sum(2, 3); // would work since we declared the type of the function parameter as number and another as optional

// this style works but kinda all over the place

let func = (user: { username: string, age: number, phone?: string }) => {
    console.log(user.username);
}

// TYPE ALIASES

type UserType = {
    username: string;
    age: number;
    phone?: string;
}

// better formatting for readability

let betterFunc = (user: UserType) => {
    console.log(user.username);
}

// creating type alias function prototype

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
    console.log(num + " times " + str);
};

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
    username: "john",
    age: 43,
    // theme: "pink" // cannot accept any string other than dark or light
    theme: "dark"
}

// INTERFACES
// used to extend any type

interface IUser {
    username: string;
    email: string;
    age: number;
}

const client: IUser = {
    username: "emman",
    email: "emman@mail.com",
    age: 43,
}

// extend interface

interface IEmployee extends IUser {
    employeedId: number;
}

const emp: IEmployee = {
    username: "emman",
    email: "emman@mail.com",
    age: 43,
    employeedId: 1 // won't work if employeeId is missing
}

// GENERICS

interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
}

// better generics structure

interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
}

const testMe: IPostBetter<String> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["str1", "str2"],
}

// another better example for generics

interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
}

const testMe2: IPostBetter<IAuthor> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, username: "emman" }],
}

const testMe3: IPostBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, title: "category title" }],
}





