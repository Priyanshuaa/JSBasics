//while loop 
// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }

//Do-while loop-->difference between do while and while loop is that do while loop always execute once no matter

// let j=11;
// do
// {
//     console.log(j);
//     j++;
// }
// while(j<=10);

// console.log('XXXXXXXXXXXXXXXXXXXXX');

//for-in loop--fetch the values from objects

// let persons=
// {
//     name:'Priyanshu',
//     age:31,
//     dept:'QA',
//     salary:90000
// }

// for(let Key in persons) 
// console.log(Key,persons[Key]);

//Arrays
// let colors=['RED','BLUE','GREEN','YELLOW','PINK','GLUE']
// for(let index in colors)
//console.log(colors[index]);
// console.log(index,colors[index]);

//for-of loop used to fetch the values from an array
//for(let i of colors) console.log(i,colors[i]);

//Break Statement in loops
let h=100;
while(h<=200)
{
    if(h==120)
    {
    break;
    }
    console.log(h);
    h++;
}
