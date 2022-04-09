const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'pong.',
  execute(bot, message, args) {
     var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.send("Pong !\n`" + `${Date.now() - message.createdTimestamp}` + " ms`");
  }
}
