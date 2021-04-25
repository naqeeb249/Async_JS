

console.log('Person 1 shows ticket');
console.log('Person 2 shows ticket');


 

const preMovie = async() =>{

    const wifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('tickets')}, 3000);
    });

    const getPopcorn = new Promise((resolve,reject) => {
        resolve('popcorn');
    });

    const getButter = new Promise((resolve,reject) => {resolve('butter')});

    const getColdDrink = new Promise((resolve, reject)=> {resolve('cold Drink')});

    let ticket = await wifeBringingTicks;

    console.log('Wife : Here is your ticket');
    console.log('Should we go in');
    console.log('I need some popcorn');

   

    let popcorn = await getPopcorn;

        console.log(`Husband : Here is your ${popcorn}`);
        console.log('Husband : Should we go now');
        console.log('Wife : I need some butter on my popcorn');

        

        let butter = await getButter;

        console.log(`Husband : I got some ${butter}`);
        console.log('Husband : Lets go now');
        console.log('Wife : Gwt something to drink');

        let coldDrink = await getColdDrink;

        console.log(`Husband : Here take your${coldDrink} `);
        console.log('Wife : Lets go we are late already');

    return ticket;
}



preMovie().then((c)=> console.log(`person 3 shows ${c}`));


