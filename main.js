import chalk from 'chalk';
import boxen from 'boxen';

function write(text){
    process.stdout.write(text);
}


console.log(boxen(chalk.bgGreen.magenta('hello world'), {borderStyle:'round'}))


console.log(boxen( chalk.blueBright.green ('lol'), {backgroundColor:'white', height: 6, width: 10, borderStyle: 'singleDouble'}));
console.log(boxen(chalk.bgCyanBright ('tere tulemast'), {padding: 2, margin: 1, borderStyle: 'double'}));
console.log(boxen(chalk.bgBlueBright.bold ('tere tulemast'), {padding: 2, margin: 4, borderStyle: 'classic', titleAlignment: 'right'}));
console.log(boxen(chalk.blue ('jakovleva'),  {title: 'karoliine', borderColor: 'redBright'}));

console.log(boxen(chalk.whiteBright.red('viies kast'), {borderStyle:'bold', backgroundColor:'yellow', height: 6, width: 20, textAlignment: 'center'}))