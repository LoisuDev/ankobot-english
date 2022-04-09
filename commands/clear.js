const Discord = require('discord.js');

module.exports = {
  name: "clear",
  description: "Clears the amount of messages you provided.",
  usage: '%clear <amount of messages to delete>',
  permissions: ['Manage Messages'],
  execute(bot, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) 
        return message.channel.send("Senpai, you can't do that! >.< ♥")
        if (!args[0])
        return message.channel.send("Invalid arguments provided.");

        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Senpai, I deleted **__${args[0]} messages__** just for you. >///< ♥`);
        })
        message.delete();
  }
}
