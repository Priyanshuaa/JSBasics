//Factory Function is used to produce objects
// function Createcircle(rad)
// {
//     const circle=
//     {
//       radious:rad,
//       draw()
//       {
//           console.log("This is the draw function")
//       }  
//     }
//   return circle;
// }

// const c1=console.log(Createcircle(10));
// const c2=console.log(Createcircle(20));

//or

function Createcircle(rad){
    return{
      radious:rad,
      draw()
      {
          console.log("This is the draw function");
      }  
    }
}

const c1=console.log(Createcircle(10));
c1.draw;
const c2=console.log(Createcircle(20));

