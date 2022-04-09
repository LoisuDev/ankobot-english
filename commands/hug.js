const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'hug',
  aliases: ['câlin', 'calin'],
  description: 'returns a hug pic/gif.',
  
  async execute(bot, message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://nekos.life/api/hug`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} hugs ${member.displayName}`)
      .setImage(body.url)
      .setFooter('hug')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
