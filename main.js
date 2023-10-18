import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hidenBin(process.argv)).argv;

console.log(argv);
console.log(argv.value1);
console.log(argv.value2);

