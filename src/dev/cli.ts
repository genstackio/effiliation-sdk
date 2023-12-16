import yargs from 'yargs/yargs';
import * as c1 from './commands/find-programs';

export function cli(argv: string[]) {
    yargs(argv.slice(2))
        .command(c1)
        .argv
    ;
}

export default cli;