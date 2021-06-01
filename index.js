// const popLimit = 10;

// let fish = 0;

// while (fish < popLimit) {
//     // execute code
//     fish++;
//     console.log(`There's room for ${(popLimit - fish)} more fish`);
// }

// const iceCapsAreMelting = true;

// let polarBears = 5;

// while (iceCapsAreMelting) {
//     console.log(`There are ${polarBears} polar bears.`);
//     polarBears--;
//     if(polarBears === 0) {
//         console.log(`There are no polar bears left.`)
//         break;
//     }
// }
// let x = 0;

// do {
//     x++;
//     console.log('x++', x)
// } while (false);

// let i = 0;

// do {
//     console.log( i );
//     i++;
// } while(i < 6);

// for (let i = 0; i < 6; i++) {
//     // loop body
//     console.log(i)
// }

for (let i = 0; i < 10; i++) {
    if(i % 2 != 0) continue;
    console.log(i);
    // if( i > 5) {
    //     console.log(i)
    // } else {
    //     continue;
    // }
    // (i > 5) ? console.log(i) : continue; its not allowed
}
// let capacity = 5;
// let coords = [];

// break outer; 

// outer: for (let x = 0; x < capacity; x++) {
//     for (let y = 0; y < capacity; y++) {
//         let input = prompt(`Value at coords (${x}, ${y})`, '');
//         // what is we want to exit from here to Done (below)?
//         // if an empty string or canceled then break out of both loops
//         if(!input) break outer;
//         coords.push(input);
//     }
// }

// alert('Done!');

// document.write(coords);


let data = [];

for (let i = 0; i < 6; i++) {
    // update array with variable value
    data.push(i);
    console.log(data)
}

let fish = ['salmon', 'eel', 'pike'];

for (let i = 0; i < fish.length; i++) {
    // print each item to the console
    console.log(fish[i])
}

// const shark = {
//     species: 'great white',
//     color: 'white',
//     numberOfTeeth: Infinity
// }

// for (attribute in shark) {
//     // console.log('attribute', attribute)
//     // console.log(shark[attribute])
//     let nameUppercase = `${attribute}`.toUpperCase();

//     console.log(`${nameUppercase} : ${shark[attribute]}`)
// }

// const sharks = ['great white', 'tiger', 'hammerhead'];

// for (let shark of sharks) {
//     console.log(shark)
// }

// for (let [index, shark] of sharks.entries()) {
//     console.log(index, shark)
// }

// let skarkString = "sharks";
// console.log(skarkString.length);

// for (let shark of skarkString) {
//     console.log(shark)
// }

const foods = [
    {name: 'Burrito', ingredients: ['floor', 'salt', 'water']},
    {name: 'Pizza', ingredients: ['floor', 'salt', 'water']},
    {name: 'Burger', ingredients: ['sandwich', 'ketchup', ' mustard']},
    {name: 'Pasta', ingredients: ['floor', 'water', ' salt']}
];

// for (let i = 0; i < foods.length; i++) {
//     console.log(`i value: ${i} | Food Name:`, foods[i]);
// }

// foods.forEach((food, index) => {
//     console.log(`index value: ${index} | Food Name:`, food);
// })

// for (let i = 0; i < foods.length; i++) {
//     let food = foods[i];
//     console.log('food', food);
//     for (let j = 0; j < food.ingredients.length; j++) {
//         let ingredient = food.ingredients[j];
//         console.log(ingredient)
//     }
// }

// components --> templates -- > organisms -- > molecules --> atoms // Atomic Design

foods.forEach((food) => {
    console.log(food);
    food.ingredients.forEach((ingredient) => {
        console.log(ingredient)
    })
})