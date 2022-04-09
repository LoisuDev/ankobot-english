const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'kiss',
  aliases: ['bisou'],
  
  async execute(bot, message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://nekos.life/api/kiss`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} kisses ${member.displayName}`)
      .setImage(body.url)
      .setFooter('kiss')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
