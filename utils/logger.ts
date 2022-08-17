import chalk from "chalk";

export default {
    error: function (msg: string, ...args: unknown[]) { console.log(chalk.red("ERROR") + chalk.white(" - ") + chalk.red(msg), ...args); },
    shard: function (msg: string, ...args: unknown[]) { console.log(chalk.yellow("SHARD") + chalk.white(" - ") + chalk.green(msg), ...args); },
    start: function (msg: string, ...args: unknown[]) { console.log(chalk.bold(chalk.yellow("+") + chalk.white(" - ") + chalk.blue(msg)), ...args); },
    load: function (msg: string, ...args: unknown[]) { console.log(chalk.bold(chalk.yellow("LOAD") + chalk.white(" - ") + chalk.blue(msg)), ...args); },
};