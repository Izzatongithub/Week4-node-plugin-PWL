import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import gradient from 'gradient-string';
import dayjs from 'dayjs';

// const cowsay = require("cowsay");
const message = process.argv[2] || "halo";

//penggunaan chalk
console.log(chalk.blue('Izzat Naziefa - F1D02310114'))

//penggunaan cowsay
console.log(chalk.red(cowsay.say({
    text : "Semangat terus, pantang menyerah!!",
    // e : "oO",
    // T : "U "
    f : "monkey"
})));

//penggunaan figlet
figlet("Izzat Nazhiefa", function (err, data){
    if (err) {
        console.log("error");
        console.dir(err);
        return;
    }
    console.log(data);
});

//input argumen cowsay
console.log(cowsay.say({
    text : message,
    e : "oO",
    T : "U "
}));

//gradient-string
const coolGradient = gradient(['#FF0000', '#00FF00', '#0000FF']);
const coolString = coolGradient('Izzat Gradient String');
console.log(coolString);

//penggunaan dayjs
console.log(chalk.red(dayjs().format("dddd, DD MMMM YYYY HH:mm")))
