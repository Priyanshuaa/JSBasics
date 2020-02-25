//Data Types
//1.Primitive Data Types
//String,Number,Boolean,Undefined,NULL
//You can use both single and double quotes
let name='Priyanshu';
let age=25;
console.log(name);
console.log(name + '' + age);
let range=10;
range=5;
console.log(range);
//Use of Const 
const year=2005;
//It will show up an error if you already define year variable as a const before and trying to change the 
//year=2020;
console.log(year);
//Primitive Data Types
let num=30;
let isactive=true;
let empname="Priyanshu Arora";
let price;
let model=null;
let wheels=undefined;
//type of Function
//typeof num

//Dynamic Typing:-->Likewise in java,you cannot do this but here in JS you can datatype whenever you want to.
let yoo="Priyanshu";
yoo=900;
console.log(yoo);

//Reference Types:
//Objects,arrays,functions

//Objects
let empdetails={
empnam:"Bhumika",
empage:25,
empid:1132
};
//1.Through DOT notation
console.log(empdetails.empage);
console.log(empdetails.empid);

//2.Through Bracket notation
empdetails['empage']=50;
console.log(empdetails.empage);

//Arrays
//List of objects
let arr=["Priyanshu","Bhumika","Ravi","YOO"];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr[4]="YOOOOO";
console.log(arr.length);

//Functions-->We don't write semicolon,since it's a statement
function getName()//no parameter function
{
   console.log("Hello!This is my Function of JS")
}

//call a function
getName();

//Parameterized Function
function greet(names,ages)
{
   console.log(names + '' + ages)
}

greet("Priyanshu",31);
greet("Priyanshu")

//Return from a function

function add(num1,num2)
{
    let num3=num1+num2;
    return num3;
    
}

console.log(add(10,20));

