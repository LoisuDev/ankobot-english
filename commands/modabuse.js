const Discord = require('discord.js');
const disbut = require('discord-buttons');

module.exports = {
  name: 'modabuse',
  description: 'MOD POWER',
  
  
  async execute (bot, message, args) {
    
    let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Watch our rights')
      .setURL('https://shorturl.at/nrJV1')
    return message.channel.send('Watch admins/mods rights by clicking the button below.\nhttps://media1.tenor.com/images/78d61511dfa9d3e174dd9978528f7ca3/tenor.gif?itemid=17248464', button)
  }
}
