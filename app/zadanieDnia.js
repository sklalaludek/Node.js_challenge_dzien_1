//Twój kod
const numb = process.argv.slice(2);
const arrOfNumb = numb.map(Number).sort();

arrOfNumb.forEach((liczba) => {
    setTimeout(() => {
        console.log(liczba);
    }, 1000*liczba);
});
