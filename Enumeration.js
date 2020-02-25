const square= {
    length: 2,
    width: 3,
    height: 4,
    area()
    {
        console.log('This is an area function');
    }
};

//For In loop
for(let Key in square) 
    console.log(Key, square[Key]);

//For of Loop
for(let Key of Object.keys(square))
   console.log(Key);

for(let entry of Object.entries(square))
{
    console.log(entry);
}
