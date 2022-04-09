const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'cuddle',
  aliases: ['réconforter'],
  
  
  async execute(bot, message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://api.miki.bot/images/random?tags=cuddle`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} cuddles ${member.displayName}`)
      .setImage(body.url)
      .setFooter('cuddle')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
