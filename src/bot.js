var dotenv = require('dotenv');
dotenv.config();

var commandSwitch = require('./comm_switch');
var DiscordJS = require('discord.js');
var {Intents} = require('discord.js');
const PREFIX = '%';

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on('ready', () => {
    console.log(client.user.username+': I am ready!');
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.slice(PREFIX.length).split(' ');

        if (CMD_NAME) commandSwitch(CMD_NAME, message, client);
    }
});

client.login(process.env.DISCORD_TOKEN);