let a=80;
let b=2;
let c=65;
if(a>b && a>c)
{
    console.log("A is the greatest number out of three");
}
else if(b>c)
{ 
   console.log("B is the greatest number out of three");
}
else console.log("C is the greatest number out of three");

//Switch Cases

let role='fffhfh';
switch(role)
{
    case 'admin' :
        console.log("This is the admin role");
        break;
    case 'user' :
        console.log("This is the user role");
        break;
    case 'superadmin' :
        console.log("This is the superadmin role");
        break;
    case 'content writer' :
        console.log("This is content writer role");
        break;
    default:
        console.log("No user predicted");
}
