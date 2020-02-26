let arr=[111,111,222,333,444,555,666,777,888,999,1000,1010,1020,1030,1040,1050,1060,1070,8523,5698,'Priyanshu'];
arr.push('Kirti');
console.log(arr);
console.log(arr.length);
console.log(arr.lastIndexOf('Priyanshu'));
arr.pop();
console.log(arr);
arr.unshift();
console.log(arr);
//Adding an element at the beginning of an array
arr.unshift("YOO","POO","JOO","KOO");
console.log(arr);
//adding an element at the middle of an array
arr.splice(1,3,"PKK","CKK");
console.log(arr);

//Printing all the elements in an array
for(Key in arr)
{
    console.log(arr[Key]);

}

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
//Finding the elements of an array
console.log(arr.indexOf(5698));
//If the specific element is not present in an array,then the output will be '-1'
console.log(arr.indexOf(1));
arr.splice(4,0,"Bhumika","Aashish");
console.log(arr);
//console.log(arr.indexOf(8523,arr.indexOf(8523)+1));
arr.splice(4,0,"Priyanshu");
console.log(arr);
arr.splice(8,0,111);
console.log(arr);
console.log(arr.indexOf(111,4));
//or
console.log(arr.indexOf(111,arr.indexOf(111)+1));

//Includes Function
console.log(arr.includes("Priyanshu"));
console.log(arr.includes('YOO'));

//Adding elements in an array-->Refrence Types-->Array can store objects too

const courses=[
       {id:1132,name:'Priyanshu'},
       {id:1133,name:'Amit'}
];

let c1=courses.find(function(course)
    {
       return course.name==='Priyanshu';
    })

console.log(c1);

let c2=courses.findIndex(function(course)
    {
       return course.name==='Amit';
    })

console.log(c2);

//Removing an element from the last of an array by using POP 
let yoo=["NOO","AOO","BOO","COO","DOO","EOO"];
yoo.length=0;
console.log(yoo);
yoo.push("Priyanshu","Kirti","Amayra","Neha");
console.log(yoo);
yoo.pop();
console.log(yoo);


//Removing an element from beginning of an array by using UNSHIFT
yoo.shift();
console.log(yoo);

//Removing an element from the beginning of an array
yoo.push("Priyanshu","Senorita","Kaish");
yoo.splice(1,1);
console.log(yoo);

//Delete by using the references

let num=[111,222,333,444,555,666,777,888,999,1000,1010,1100,1200];
let num1=num;
console.log(num);
console.log(num1);
num=[];
console.log(num);
console.log(num1);

num1.splice(0,num1.length);
console.log(num1);
num1.push(111,222,333,444,555,666,777,888,999,1000,1010,1100,1200)
console.log(num1);

while(num1.length>0)
{
    num1.pop();
}
console.log(num1);

//Spliec method is also used to add and remove items from within an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

let fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citruss = fruits.slice(1, 3);
console.log(fruitss);
console.log(citruss);