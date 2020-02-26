//Getting the maximum number from the given numbers
//console.log(Math.max(1, 3, 2));
// expected output: 3

//console.log(Math.max(-1, -3, -2));
// expected output: -1

//const array1 = [1, 3, 2];

//console.log(Math.max(...array1));
// expected output: 3

//Getting the addition of all the elements of an array--use function array.reduce() function
// let arr=[99,55,66,99,55,44,88,77,11,36,45,89,56,65,75];
// const reducer = (accumulator, currentValue)=> accumulator + currentValue;
// console.log(arr.reduce(reducer));


//Spread operator to find the maximum number in an array..
// let maximumarr=[96,122,4545,211,333];
// let maxval=Math.max(...maximumarr); 
// console.log(maxval);

//Date Object
const dates=new Date();
//console.log(dates);
const dates1=new Date(2019,4,11,9,0);
const dates2=new Date('June 9 2019 08:00');
const dates3=new Date();
console.log(dates.toDateString());
console.log(dates2.toString());
//console.log(dates);
console.log(dates.getDate());
console.log(dates.getUTCDate());
console.log(dates.toISOString());






