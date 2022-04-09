
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'poke',
  aliases: ['eh'],
  description: 'Eh ehh EEHHHHHHHH !',
  
  async execute(bot, message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/poke`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} pokes ${member.displayName}`)
      .setImage(body.url)
      .setFooter('poke')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
