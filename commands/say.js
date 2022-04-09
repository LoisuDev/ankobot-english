const Discord = require('discord.js');

module.exports = {
  name: 'say',
  aliases: ['dis'],
  
  async execute(bot, message, args) {
    let msg = args.join(' ');
    message.channel.send(msg);
    message.delete();
  }
}
