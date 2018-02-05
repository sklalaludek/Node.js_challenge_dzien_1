//Twój kod
const numb = process.argv.slice(2);
const result = numb.reduce((a,b) => Number(a) + Number(b));
console.log(result);
