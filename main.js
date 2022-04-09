const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const prefix = "%";
const fs = require('fs');
const superagent = require('superagent');
const disbut = require('discord-buttons');
disbut(bot);

bot.login("YOUR_TOKEN");

bot.on('ready', async => {
    bot.user.setActivity("%help", {type : "WATCHING"})
        .then(console.log(`${bot.user.username} est en ligne`))
        .catch(console.error());
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}


bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.toLowerCase().includes("is not cute")) {
        let member = message.mentions.users.first();
        if(!member) return;
        if(member.id !== "828715499894079488") return;
        message.channel.send('How dare you?!\nhttps://c.tenor.com/yCR6JOoxS6wAAAAC/anime-angry.gif')
    } 

    if(message.content.toLowerCase().includes("fdp")) {
        message.react("❤")
        message.channel.send("JE T'AIME. FDP.")
    }

    if(message.content.toLowerCase().includes("lois")) {
        let lois = message.guild.members.cache.get('655605141046820884')
        lois.send(`${message.author.username} a mentionné ton nom sur LoisuCord. Voici le message:\n${message.content}`)
    }

    if(message.content.toLowerCase().includes('<@!655605141046820884>')) {
        let lois = message.guild.members.cache.get('655605141046820884')
        message.channel.send('You just pinged my master? She\'ll be mad, you know...\nhttps://tenor.com/view/yandere-knife-cute-anime-gif-14593966')
        lois.send(`${message.author.username} pinged you. They said:\n${message.content}`)
    }
    if(message.content.toLowerCase().includes("owo")) message.channel.send("What's This?")
    if(!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    	|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
	
	try {
	command.execute(bot, message, args);
	} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
	}
});
