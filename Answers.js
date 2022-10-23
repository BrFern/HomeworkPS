
// Easy Going


/*for (let i=0; i <= 20; i++){
    console.log(i);
} */


// Get Even

/*for (let i=0; i <= 200; i++) {
    if (i % 2 == 0) 
        console.log(i);
    }
//FizzBuzz

for (let i=0; i<= 100; i++) {
    if (i % 3 == 0 || i % 5 ==0)
        console.log(`FizzBuzz`)
    else if (i % 3 == 0) 
        console.log(`Fizz`)
    else (i % 5 == 0)
        console.log(`Buzz`) 
}
*/
//I DID THIS ONE SO FAST YAYYYY!!! AND WITHOUT NOTES!

//Wild Wild Life
/*const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
wolfy [3] ="Gotham City"
dart.push("Hawkins")
wolfy.shift()
wolfy.push("Gameboy") */

// Yell at the Ninja Turtles

/*const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (const element of turtles ) {
    console.log(element);
} */

//Methods Revisited
/*const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//console.log(favMovies[8]);
favMovies.sort(); //Alphabetized the movies, did not permanently alter
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift();
favMovies.splice();
favMovies[14] = "Avatar";
console.log(favMovies.slice(9,18)); //No, this will not permanently alter the array, since it's only through console.log
const sliceMovies = (favMovies.slice(1,9));
console.log(sliceMovies);
console.log(favMovies[18]);//Labels it as undefined when it is unable to reach one
//Arrays are not locked in with the const variable. */

//Where is Waldo
/*const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

console.log(whereIsWaldo.slice([1])); //may need to come back to this
console.log(whereIsWaldo[2][2]= "No one");
console.log(whereIsWaldo[3][1][1]);
console.log(whereIsWaldo); */

//Excited Kitten
/*const kittenTwenty = ["Love me, pet me! HSSSSS!"];
const evenKitty = ["...human...why you taking pictures of me?...","...the catnip made me do it...", "...why does the red dot always get away..."];
*/
//Skipped over this one for now, will come back with fresh eyes

//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
const midpoint = Math.floor(nums.length/2);
console.log(nums);
console.log(midpoint);
console.log(nums[12]);





