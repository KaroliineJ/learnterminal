import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);

console.log(argv.value1 + '4' + argv.sign + '5' + argv.value2 + '=' );