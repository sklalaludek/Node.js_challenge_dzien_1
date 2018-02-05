//Twój kod
const hello = 'Witam';
const text = ['sie', 'z', 'programem', 'Node.js', 'w konsoli', 'i korzystam', 'z funkcji czasu!'];
let counter = 0;

console.log(hello);

const myInterval = setInterval(() => {
    console.log(text[counter]);
    counter++;

    if (counter === text.length) {
        clearInterval(myInterval);
    }
}, 1000);
