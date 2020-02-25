    const circle=
    {
    radious: 5,
    area:10,
    draw()
    {
        console.log('draw function',this.radious);
    },
    areas()
    {
        console.log('area function',this.area);
    }
}

//Adding properties within the object
circle.p2=10;
circle.log=function(){
    console.log('This is a log function',this.radious);

}
console.log(circle);

//Delete 
delete circle.areas