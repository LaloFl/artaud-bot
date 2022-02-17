var commands = require('./commands.js');

function commandSwitch(CMD, message, client){
    switch (CMD) {
        case 'ping':
            commands.ping(message, client).func;
            return 'pong';
        case 'pong':
            return 'ping';
        default:
            return 'ping';
    }
}

module.exports = commandSwitch;