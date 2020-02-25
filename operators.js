//Arithmetic
//++ and --
// let p1=10;
// let q1=p1++;
// console.log(p1++);
// console.log(p1);
// let m=2;
// console.log(--m);
// console.log(m);

//Assignment
// let x=10;
// let c=x+10;
// console.log(c)
// x*=10;
// console.log(x);

// let j=5;
// j+=5;
// console.log(j);

//Ternary
// let points=110;
// let type=points<90 ? 'gold' : 'silver';
// console.log(type);


//Comparision
// let z=1;
// console.log(z>1);
// console.log(z==1);//value should match,data type doesn't matter--also known as lose equality
// console.log(z===1);//strict equality-it will check both type and value
// console.log('1'==1);

//Logical
//AND (&&),same applies for OR operators
// let highincome=true;
// let goodccscrore=false;
// let overalscore=highincome && goodccscrore
// console.log(overalscore);

//NOT operator
// let isactive=true;
// console.log(!isactive);

//Logical operators with Non-Boolean
//Falsy values
//False
//Undefined
//NULL
//0
//''
//Nan

//Truthy values:which are not falsy
// console.log(true || null);
// console.log(false||1);
// console.log(false||undefined);

// let usercolor=false;
// let defaultcolor='RED';
// console.log(usercolor || defaultcolor);

//Binary--Bitwise Operator
//Operator precedence-->prioritry will be always Multiplication
// console.log(2+3*4+5);
// console.log((2+5)*7);

//Swap 2 values
let a=10;
let b=20;
 let c=a;
     a=b;
     b=c;
     console.log(a);
     console.log(b);
