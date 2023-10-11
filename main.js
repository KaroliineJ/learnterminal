import chalk from 'chalk';
import boxen from 'boxen';

function write(text){
    process.stdout.write(text);
}

console.log(chalk.bgGreen.magenta('hello world'));
console.log(chalk.underline('hello world'));
console.log(chalk.italic('hello world'));
console.log(chalk.strikethrough('hello world'));
console.log(chalk.inverse('hello world'));

console.log(boxen(chalk.bgGreen.magenta('hello world'), {borderStyle:'round'}))