
console.log('Person 1 shows ticket');
console.log('Person 2 shows ticket');



const wifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('tickets');
    },3000);
})

const getPopcorn = wifeBringingTicks.then((t) => {
    console.log('Wife : Here are the tickets');
    console.log('Husband : should we go in ?');
    console.log('Wife : I am hungry');

    return new Promise((resolve,reject) =>{
        resolve(`${t} popcorn`);
    });
});

const getButter = getPopcorn.then((t) => {
    console.log('Husband : Here is your popcorn');
    console.log('Husband : should we go in');
    console.log('Wife : I need butter on my popcorn');
   
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`);
    })
});

const getColdDrink = getButter.then((t)=> {
    console.log('Husband : I got you some Butter');
    console.log('Wife : Get something to drink');

    return new Promise((resolve,reject) => {
        resolve(`${t} cold Drink`);
    })
    
});


getColdDrink.then((t)=> console.log(t));

console.log('Person 4 shows ticket');
console.log('Person 5 shows ticket');
