import chalk from 'chalk';
import boxen from 'boxen';

function write(text){
    process.stdout.write(text);
}

// for(let i = 0; i<255;i++){
//     write(chalk.rgb(i,i,i)('#'));
// }
// console.log(chalk.italic('hello'));
let time = new Date().toLocaleTimeString();
write(time);
setTimeout(()=>) {
    write('\x1B[8D'); // A up B down C right D left
    write('MM22    ');
}, 5000 );