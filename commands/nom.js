const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'nom',
  aliases: ['manger'],
  description: 'I can tell you\'re hungry, don\'t you?',
  
  async execute(bot, message, args) {
    let { body } = await superagent.get(`https://shiro.gg/api/images/nom`);
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} is hungry!`)
      .setImage(body.url)
      .setFooter('nom')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
