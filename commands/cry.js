const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'cry',
  aliases: ['pleurer', 'sad', 'triste'],
  description: 'You\'re sad?!',
  
  async execute(bot, message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/cry`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} cries because of ${member.displayName}`)
      .setImage(body.url)
      .setFooter('cry')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
