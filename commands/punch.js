const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'punch',
  description: 'Returns a punch gif',
  usage: '%punch [@user]',
  
  async execute (bot, message, args) {
    let member = message.mentions.users.first();
    let { body } = await superagent.get(`https://api.miki.bot/images/random?tags=punch`);
    
    if(!member) return message.channel.send(body.url);
    
    let embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} punches ${member.username}`)
      .setImage(body.url)
      .setFooter('punch')
      .setTimestamp()
    
    message.channel.send(embed);
  }
}
