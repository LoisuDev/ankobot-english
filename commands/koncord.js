const Discord = require('discord.js');
const disbut = require('discord-buttons');

module.exports = {
  name: 'koncord',
  description: 'The K-On Discord',
  usage: '%koncord',
  
  async execute(bot, message, args) {
    let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('K-On! Discord Server')
      .setURL('https://discord.gg/kon')
    message.channel.send('Here\'s the link of the K-On Discord server ❤️ :', button)
  }
}
