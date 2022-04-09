const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'shrug',
  
  
  async execute(bot, message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://api.miki.bot/images/random?tags=shrug`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} shrugs at ${member.displayName}`)
      .setImage(body.url)
      .setFooter('shrug')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
