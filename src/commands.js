const ping = (message, client) => {
    return {
        name: "ping",
        description: "Pong!",
        aliases: [
            "ping",
            "p"
        ],
        func: () => {
            message.channel.send(`Pong! \n\n***Message***:\n${JSON.stringify(message.channel, ' ', 2)}\n\n***Client***:\n${JSON.stringify(client, ' ', 2)}`);
        }
    }
}

const help = (message, client) => {
    return {
        name: "help",
        description: "Pong!",
        aliases: [
            "h",
        ],
        func: () => {
            message.channel.send(`Pong! \n\n***Message***:\n${JSON.stringify(message.channel, ' ', 2)}\n\n***Client***:\n${JSON.stringify(client, ' ', 2)}`);
        }
    }
}


const commands = [
    ping
]
module.exports = commands;