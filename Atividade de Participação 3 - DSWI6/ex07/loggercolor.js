import util from 'util';
import chalk from "chalk";

const logLevels = {
    ERROR: chalk.red,
    WARNING: chalk.yellow,
    INFO: chalk.green
};

const currentLevel = process.env.NODE_DEV || 'INFO';
const log = logLevels[currentLevel] || chalk.white;

const debug = util.debuglog('logger');

debug('Logger initialized with level: ' + currentLevel);

function error() {
    console.log(log('Erro: Algo deu errado!'));
}

function warning() {
    console.log(log('Aviso: Isso pode ser um problema.'));
}

function info() {
    console.log(log('Info: Tudo está funcionando bem.'));
}

export { error, warning, info };